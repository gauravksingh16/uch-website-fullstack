import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./assets/Pages/Home";
import Product from "./assets/Pages/Product.jsx";
import ProductCategory from "./assets/Pages/ProductCategory.jsx";
import LoginPage from "./assets/Components/LoginPage/LoginPage.jsx";
import RegisterPage from "./assets/Components/LoginPage/RegisterPage.jsx";
import Error from "./assets/Components/Error/Error.jsx";
import CartPage from "./assets/Components/Cart/CartPage.jsx";
import AdminDashboard from "./assets/Pages/AdminDashboard.jsx";
import Orders from './assets/Components/Orders/Orders'
import Inventory from './assets/Components/Inventory/Inventory'
import Dashboard from "./assets/Components/Dashboard/Dashboard.jsx";
import Users from "./assets/Components/Users/Users.jsx";
import Statistics from "./assets/Components/Statistics/Statistics.jsx";
import Billings from "./assets/Components/Billings/Billings.jsx";
import { UserProvider } from './assets/Context/UserContext.jsx';
import AdminRoute from "./assets/Components/AdminRoutes/AdminRoute.jsx";
import AddProduct from "./assets/Components/AddProduct/AddProduct.jsx";
import AddOrder from "./assets/Components/AddOrder/AddOrder.jsx";

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
      <Route path="/*" element={<Error />} />
      <Route path="/admin" element={
        <AdminRoute>
          <AdminDashboard />
        </AdminRoute>
      }>
        <Route path="" element={<Dashboard />} />
        <Route path="/admin/stats" element={<Statistics />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/orders/add" element={<AddOrder />} />
        <Route path="/admin/inventory" element={<Inventory />} />
        <Route path="/admin/inventory/add" element={<AddProduct />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/billing" element={<Billings />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
