import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
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
      <Navbar />
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
