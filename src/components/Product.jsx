import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { VITE_BACKEND_URL } from "../App";

/* eslint-disable react/prop-types */
const Product = ({ product, getProducts }) => {
    const deleteProduct = async (id) => {
        const result = await Swal.fire({
            title: "Do you really want to delete the product?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(`${VITE_BACKEND_URL}/list-products/${id}`);
                toast.success("Delete a product successfully");
                getProducts();
                
            } catch (error) {
                toast.error(error.message);
            }
        }
    };

    return (
        <div className="bg-white rounded-xl p-4 shadow-lg transition-all duration-700 hover:scale-105">
            <img src={product.imageFileName} alt={product.name} className="w-auto h-auto p-2" />
            <div className="px-4 pt-2 pb-4">
                <h2 className="text-2xl font-semibold">{product.name}</h2>
                <div className="text-sm">
                    <span className="font-semibold">Brand:</span> {product.brand}
                </div>
                <div className="text-sm">
                    <span className="font-semibold">Category:</span> {product.category}
                </div>
                <div className="text-sm">
                    <span className="font-semibold">Price:</span> Rp.{product.price}
                </div>
                <div className="text-sm text-justify">
                    <span className="font-semibold">Description:</span> {product.description}
                </div>
                <div className="mt-4 flex gap-4">
                    <Link
                        to={`/edit/${product.id}`}
                        className="flex items-center shadow-md text-sm bg-[#FFEAC5] text-yellow-500 rounded-sm px-4 py-2 font-bold hover:bg-yellow-200 hover:cursor-pointer"
                    >
                        <img src="./public/assets/icon-edit.png" alt="Edit" width="25" className="mr-2" />
                        Edit
                    </Link>
                    <button
                        onClick={() => deleteProduct(product.id)}
                        className="flex items-center shadow-md text-sm bg-[#FFCECE] text-red-600 rounded-sm px-4 py-2 font-bold hover:bg-red-300 hover:cursor-pointer"
                    >
                        <img src="./public/assets/icon-delete.png" alt="Delete" width="25" className="mr-2" />
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
