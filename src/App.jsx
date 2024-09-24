import React, { useEffect } from "react";
import HomePage from "./Pages/HomePage";
import ProductsDetailsPage from "./Pages/ProductsDetailsPage";
import Cart from "./features/Cart/Cart";
import UserProfilePage from "./Pages/UserProfilePage";
import ErrorBoundary from "./features/common/ErrorBoundary";
import ProductsPage from "./Pages/ProductsPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoggedInUserAsync } from "./features/User/UserSlice";
import { fetchCartByUserIdAsync } from "./features/Cart/CartSlice";
import SignUp from "./features/Auth/components/SignUp";
import Login from "./features/Auth/components/Login";
import {
  CheckAuthAsync,
  loginUserAsync,
  selectLoginUserInfo,
} from "./features/Auth/AuthSlice";
import LogOut from "./features/Auth/components/LogOut";
// ===========================================

// Define route configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signUp",
    element: (
      <ErrorBoundary>
        <SignUp />
      </ErrorBoundary>
    ),
  },
  {
    path: "/logIn",
    element: (
      <ErrorBoundary>
        <Login />
      </ErrorBoundary>
    ),
  },
  {
    path: "/logOut",
    element: (
      <ErrorBoundary>
        <LogOut />
      </ErrorBoundary>
    ),
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
        <ProductsDetailsPage />
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
  const User = useSelector(selectLoginUserInfo);
  console.log(User);
  // ===========================================

  // useEffect(() => {
  //   dispatch(fetchCartByUserIdAsync());
  //   // dispatch(loginUserAsync());
  //   dispatch(CheckAuthAsync());
  //   dispatch(fetchLoggedInUserAsync());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCartByUserIdAsync());
    dispatch(fetchLoggedInUserAsync());
    // dispatch(fetchLoggedInUserOrdersAsync());
  }, [dispatch, User]);

  useEffect(() => {
    dispatch(CheckAuthAsync());
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
