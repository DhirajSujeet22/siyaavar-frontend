import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductsDetailsPage from "./Pages/ProductsDetailsPage";
import Cart from "./features/Cart/Cart";
import { useDispatch } from "react-redux";
import { fetchCartByUserIdAsync } from "./features/Cart/CartSlice";

// ===========================================

// Define route configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/ProductsDetails/:id",
    element: <ProductsDetailsPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

// ===========================================

// Render the app

const App = () => {
  const dispatch = useDispatch();
  // ===========================================

  useEffect(() => {
    dispatch(fetchCartByUserIdAsync("2019"));
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchCartByUserIdAsync());
  //   // we can get req.user by token on backend so we don't need to give in frontend
  //   dispatch(fetchLoggedInUserAsync());
  //   dispatch(fetchLoggedInUserOrdersAsync());
  // }, [dispatch, User]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
