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
// import SignUp from "./features/Auth/components/SignUp";
import Login from "./features/Auth/components/Login";
import {
  CheckAuthAsync,
  selectLoginUserInfo,
  selectUserCheck,
} from "./features/Auth/AuthSlice";
import LogOut from "./features/Auth/components/LogOut";
import { Toaster } from "react-hot-toast";
import ErrorPage from "./features/common/ErrorPage";
import CheckoutPage from "./Pages/CheckoutPage";
import DashboardPage from "./Pages/DashboardPage";
import OrderHistoryPage from "./Pages/OrderHistoryPage";
import WishlistPage from "./Pages/WishlistPage";
// import Wishlist from "./"
// ===========================================

// Define route configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  // {
  //   path: "/signUp",
  //   element: (
  //     <ErrorBoundary>
  //       <SignUp />
  //     </ErrorBoundary>
  //   ),
  // },
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
    path: "/orders",
    element: (
      <ErrorBoundary>
        <OrderHistoryPage />
      </ErrorBoundary>
    ),
  },
  {
    path: "/userDashboard",
    element: (
      <ErrorBoundary>
        <DashboardPage />
      </ErrorBoundary>
    ),
  },
  {
    path: "/wishlist",
    element: (
      <ErrorBoundary>
        <WishlistPage />
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
        <Cart />
      </ErrorBoundary>
    ),
  },
  {
    path: "/checkout",

    element: (
      <ErrorBoundary>
        <CheckoutPage />,
      </ErrorBoundary>
    ),
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

// ===========================================

// Render the app

const App = () => {
  const dispatch = useDispatch();
  const User = useSelector(selectLoginUserInfo);
  const check = useSelector(selectUserCheck);

  // ===========================================

  useEffect(() => {
    dispatch(fetchCartByUserIdAsync());
    dispatch(fetchLoggedInUserAsync());
    // dispatch(fetchLoggedInUserOrdersAsync());
  }, [dispatch, User, check]);

  useEffect(() => {
    dispatch(CheckAuthAsync());
  }, [dispatch, check]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="top-left"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        }}
      />
    </>
  );
};

export default App;
