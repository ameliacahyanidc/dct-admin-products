import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { VITE_BACKEND_URL } from "../App";

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
            const response = await axios.post(`${VITE_BACKEND_URL}/list-products`, { name: name, brand: brand, category: category, price: price, description: description, imageFileName: imageFileName });
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
                    <div>
                        <label className="font-semibold">Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full block border p-3 text-gray-600 rounded-lg focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter name here" />
                    </div>
                    <div>
                        <label className="font-semibold">Brand</label>
                        <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} className="w-full block border p-3 text-gray-600 rounded-lg focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter brand here" />
                    </div>
                    <div>
                        <label className="font-semibold">Category</label>
                        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full block border p-3 text-gray-600 rounded-lg focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter category here" />
                    </div>
                    <div>
                        <label className="font-semibold">Price</label>
                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full block border p-3 text-gray-600 rounded-lg focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter price here" />
                    </div>
                    <div>
                        <label className="font-semibold">Description</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="4" className="w-full block border p-3 text-gray-600 rounded-lg focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Write your description here"></textarea>
                    </div>
                    <div>
                        <label className="font-semibold">Image URL</label>
                        <input type="text" value={imageFileName} onChange={(e) => setImageFileName(e.target.value)} className="w-full block border p-3 text-gray-600 rounded-lg focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter image URL here" />
                    </div>
                    <div>
                        {!isLoading && (
                            <button className="block w-full mt-6 bg-blue-700 text-white rounded-lg px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">Save</button>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreatePage;