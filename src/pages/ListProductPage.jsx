import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";
import { Link } from "react-router-dom";
import { VITE_BACKEND_URL } from "../App";

export default function ListProductPage() {

    const [products, setProducts] = useState([]); // products is array
    const [isLoading, setIsLoading] = useState(false); // check our app is loading

    // load all products from back end
    const getProducts = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`${VITE_BACKEND_URL}/list-products`);
            console.log(response.data);
            setProducts(response.data); // get data from api
            setIsLoading(false);
        } catch (error) {
            console.log(error); // bug
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div>
            <div>
                <Link to="/create" className="inline-block mt-10 shadow-md bg-blue-600 text-white text-sm rounded-lg px-6 py-3 font-bold hover:bg-blue-500 transition-all duration-200 hover:scale-105">
                    + Add Product
                </Link>
            </div>
            <div className="grid grid-col-2 lg:grid-cols-3 gap-6 mt-8">
                {isLoading ? (
                    "Loading"
                ) : (
                    <>
                        {products.length > 0 ? (
                            <>
                                {
                                    products.map((product, index) => {
                                        return (
                                            <Product key={index} product={product} getProducts={getProducts} />
                                        );
                                    })
                                }
                            </>
                        ) : (
                            <div>
                                There is no products
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}