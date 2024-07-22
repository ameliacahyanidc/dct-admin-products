import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { VITE_BACKEND_URL } from "../App";
import TextInput from "../components/TextInput";
import Textarea from "../components/TextArea";
import Button from "../components/Button";

const CreatePage = () => {

    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [imageFileName, setImageFileName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const saveProduct = async (e) => {
        e.preventDefault();
        if (name === "" || brand === "" || category === "" || price === "" || description === "" || imageFileName === "") {
            alert('Please fill out all input completely');
            return;
        }
        try {
            setIsLoading(true);
            const response = await axios.post(`${VITE_BACKEND_URL}/list-products`, 
                { 
                    name: name, 
                    brand: brand, 
                    category: category, 
                    price: price, 
                    description: description, 
                    imageFileName: imageFileName 
                });
            toast.success(`Save ${response.data.name} sucessfully`);
            setIsLoading(false);
            navigate(`/list-products`);

        } catch (error) {
            toast.error(error.message);
            setIsLoading(false);
        }
    }

    return (
        <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
            <h1 className="text-4xl font-bold text-center mb-6">Create a product</h1>

            <form onSubmit={saveProduct}>
            <div className="space-y-2">
                    <TextInput label="Name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name here" />
                    <TextInput label="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="Enter brand here" />
                    <TextInput label="Category" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter category here" />
                    <TextInput label="Price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter price here" type="number" />
                    <Textarea label="Description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Write your description here" />
                    <TextInput label="Image URL" value={imageFileName} onChange={(e) => setImageFileName(e.target.value)} placeholder="Enter image URL here" />
                    {!isLoading && <Button>Save</Button>}
                </div>
            </form>
        </div>
    );
}

export default CreatePage;