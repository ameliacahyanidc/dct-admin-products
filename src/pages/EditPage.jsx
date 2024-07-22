import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { VITE_BACKEND_URL } from "../App";
import TextInput from "../components/TextInput";
import Textarea from "../components/TextArea";
import Button from "../components/Button";

const EditPage = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState({
        name: "",
        brand: "",
        category: "",
        price: "",
        description: "",
        imageFileName: "",
    })

    const getProduct = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${VITE_BACKEND_URL}/list-products/${id}`);
            setProduct({
                name: response.data.name,
                brand: response.data.brand,
                category: response.data.category,
                price: response.data.price,
                description: response.data.description,
                imageFileName: response.data.imageFileName,
            })
            setIsLoading(false);

        } catch (error) {
            setIsLoading(false);
            toast.error(error.message);
        }
    }

    const updateProduct = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await axios.put(`${VITE_BACKEND_URL}/list-products/${id}`, product);
            toast.success("Update a product successfully");
            navigate(`/list-products`);

        } catch (error) {
            setIsLoading(false);
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getProduct();
    }, [])

    return (
        <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
            <h1 className="text-4xl font-bold text-center mb-6">Update a product</h1>

            {isLoading ? ("Loading") : (
                <>
                    <form onSubmit={updateProduct}>
                        <div className="space-y-2">
                            <TextInput
                                label="Name"
                                value={product.name}
                                onChange={(e) => setProduct({ ...product, name: e.target.value })}
                                placeholder="Enter Name"
                            />
                            <TextInput
                                label="Brand"
                                value={product.brand}
                                onChange={(e) => setProduct({ ...product, brand: e.target.value })}
                                placeholder="Enter Brand Name"
                            />
                            <TextInput
                                label="Category"
                                value={product.category}
                                onChange={(e) => setProduct({ ...product, category: e.target.value })}
                                placeholder="Enter Category"
                            />
                            <TextInput
                                label="Price"
                                type="number"
                                value={product.price}
                                onChange={(e) => setProduct({ ...product, price: e.target.value })}
                                placeholder="Enter Price"
                            />
                            <Textarea
                                label="Description"
                                value={product.description}
                                onChange={(e) => setProduct({ ...product, description: e.target.value })}
                                placeholder="Write your description"
                            />
                            <TextInput
                                label="Image URL"
                                value={product.imageFileName}
                                onChange={(e) => setProduct({ ...product, imageFileName: e.target.value })}
                                placeholder="Enter Image URL"
                            />
                            {!isLoading && <Button>Update</Button>}
                        </div>
                    </form>
                </>
            )}
        </div>
    );
}

export default EditPage;