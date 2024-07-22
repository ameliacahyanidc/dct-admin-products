import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { VITE_BACKEND_URL } from "../App";

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
                            <div>
                                <label className="font-semibold">Name</label>
                                <input type="text" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} className="w-full block border p-3 text-gray-600 rounded-lg focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Name" />
                            </div>
                            <div>
                                <label className="font-semibold">Brand</label>
                                <input type="text" value={product.brand} onChange={(e) => setProduct({ ...product, brand: e.target.value })} className="w-full block border p-3 text-gray-600 rounded-lg focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Brand Name" />
                            </div>
                            <div>
                                <label className="font-semibold">Category</label>
                                <input type="text" value={product.category} onChange={(e) => setProduct({ ...product, category: e.target.value })} className="w-full block border p-3 text-gray-600 rounded-lg focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Category" />
                            </div>
                            <div>
                                <label className="font-semibold">Price</label>
                                <input type="number" value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} className="w-full block border p-3 text-gray-600 rounded-lg focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Price" />
                            </div>
                            <div>
                                <label className="font-semibold">Description</label>
                                <textarea value={product.description} rows="4" onChange={(e) => setProduct({ ...product, description: e.target.value })} className="w-full block border p-3 text-gray-600 rounded-lg focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Write your description"></textarea>
                            </div>
                            <div>
                                <label className="font-semibold">Image URL</label>
                                <input type="text" value={product.imageFileName} onChange={(e) => setProduct({ ...product, imageFileName: e.target.value })} className="w-full block border p-3 text-gray-600 rounded-lg focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Image URL" />
                            </div>
                            <div>
                                {!isLoading && (
                                    <button className="block w-full mt-6 bg-blue-700 text-white rounded-lg px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">Update</button>
                                )}
                            </div>
                        </div>
                    </form>
                </>
            )}
        </div>
    );
}

export default EditPage;