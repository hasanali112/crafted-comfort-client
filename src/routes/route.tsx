import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Registration from "@/pages/Registration";
import Products from "@/pages/Products";
import DashboardLayout from "@/layout/DashboardLayout/DashboardLayout";
import DashboardHome from "@/pages/Dashboard/DashboardHome";
import AddProduct from "@/pages/Dashboard/AddProduct";
import AllProduct from "@/pages/Dashboard/AllProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "product",
        element: <AllProduct />,
      },
      {
        path: "create-product",
        element: <AddProduct />,
      },
    ],
  },
]);

export default router;
