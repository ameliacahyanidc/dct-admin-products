import { Routes, Route, Link } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import ListProductPage from "./pages/ListProductPage";


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react-refresh/only-export-components
export const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  return (
    <div>
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

      <div className="container mx-auto p-2 h-full">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="/list-products" element={<ListProductPage />} />
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
