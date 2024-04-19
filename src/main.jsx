import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Hero from "./Components/Header/Hero";
import HomeData from "./Components/HomeData";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/homeData",
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
