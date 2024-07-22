import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-primaryColor sticky top-0 z-50 scroll-smooth">
            <div className="container m-auto p-6 flex items-center justify-between">
                <Link className="flex items-center text-white text-3xl font-bold" to="/">
                    <img src="/assets/icon-admin.png" alt="Logo Brand" width="30" className="mr-5" /> Admin Panel
                </Link>
                <ul className="flex space-x-8">
                    <li>
                        <Link
                            to="/"
                            className="text-white text-lg font-medium hover:text-secondaryColor transition-colors duration-200"
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/list-products"
                            className="text-white text-lg font-medium hover:text-secondaryColor transition-colors duration-200"
                        >
                            Products
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;