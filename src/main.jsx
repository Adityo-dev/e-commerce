import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Hero from "./Components/Header/Hero";
import HomeData from "./Components/HomeData";
import ShoppingCart from "./Components/AddShoppingCart/AddShoppingCart";
import LoginForm from "./Components/Account/LoginForm/LoginForm";
import CreateAccount from "./Components/Account/CreateAccount/CreateAccount";
import Wishlist from "./Components/Wishlist/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/home",
        element: <HomeData />,
      },
      {
        path: "/shop",
        element: <Hero />,
      },
      {
        path: "/shoppingCart",
        element: <ShoppingCart />,
      },
      {
        path: "/CreateAccount",
        element: <CreateAccount />,
      },
      {
        path: "/Wishlist",
        element: <Wishlist />,
      },
      {
        path: "/home",
        element: <HomeData />,
      },
      {
        path: "/loginFrom",
        element: <LoginForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
