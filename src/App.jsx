import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductsDetailsPage from "./Pages/ProductsDetailsPage";

// ===========================================

// Define route configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/ProductsDetailsPage",
    element: <ProductsDetailsPage />,
  },
]);

// ===========================================

// Render the app

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
