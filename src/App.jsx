import React, { useEffect } from "react";
import HomePage from "./Pages/HomePage";
import ProductsDetailsPage from "./Pages/ProductsDetailsPage";
import Cart from "./features/Cart/Cart";
import UserProfilePage from "./Pages/UserProfilePage";
import ErrorBoundary from "./features/common/ErrorBoundary";
import ProductsPage from "./Pages/ProductsPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchLoggedInUserAsync } from "./features/User/UserSlice";
import { fetchCartByUserIdAsync } from "./features/Cart/CartSlice";

// ===========================================

// Define route configuration
const router = createBrowserRouter([
  {
    path: "/",

    element: <HomePage />,
  },
  {
    path: "/userProfile",
    element: (
      <ErrorBoundary>
        <UserProfilePage />
      </ErrorBoundary>
    ),
  },
  {
    path: "/Products",
    element: (
      <ErrorBoundary>
        <ProductsPage />
      </ErrorBoundary>
    ),
  },
  {
    path: "/ProductsDetails/:id",
    element: (
      <ErrorBoundary>
        <ProductsDetailsPage />,
      </ErrorBoundary>
    ),
  },
  {
    path: "/cart",
    element: (
      <ErrorBoundary>
        <Cart />,
      </ErrorBoundary>
    ),
  },
]);

// ===========================================

// Render the app

const App = () => {
  const dispatch = useDispatch();
  // ===========================================

  useEffect(() => {
    dispatch(fetchCartByUserIdAsync("2019"));
    dispatch(fetchLoggedInUserAsync());
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
