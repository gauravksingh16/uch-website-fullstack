import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./assets/Pages/Home";
import Product from "./assets/Pages/Product.jsx";
import ProductCategory from "./assets/Pages/ProductCategory.jsx";
import LoginPage from "./assets/Components/LoginPage/LoginPage.jsx";
import RegisterPage from "./assets/Components/LoginPage/RegisterPage.jsx";
import Error from "./assets/Components/Error/Error.jsx";
import CartPage from "./assets/Components/Cart/CartPage.jsx";
import AdminDashboard from "./assets/Pages/AdminDashboard.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/productcategory" element={<ProductCategory />} />
        <Route path="/productcategory/:id" element={<ProductCategory />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<Error />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
