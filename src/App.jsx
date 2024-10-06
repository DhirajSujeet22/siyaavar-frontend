import React, { Suspense, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoggedInUserAsync } from "./features/User/UserSlice";
import { fetchCartByUserIdAsync } from "./features/Cart/CartSlice";
import {
  CheckAuthAsync,
  selectLoginUserInfo,
  selectUserCheck,
} from "./features/Auth/AuthSlice";
// ----------------------------------------------------------------
import ErrorBoundary from "./features/common/ErrorBoundary";
import LogOut from "./features/Auth/components/LogOut";
import ErrorPage from "./features/common/ErrorPage";
import PageOnTop from "./Home/PageonTop";
import LoadingSpinner from "./features/common/LoadingSpinner";
// ----------------------------------------------------------------
const HomePage = React.lazy(() => import("./Pages/HomePage"));
const ProductsDetailsPage = React.lazy(() =>
  import("./Pages/ProductsDetailsPage")
);
const ProductsPage = React.lazy(() => import("./Pages/ProductsPage"));
const Cart = React.lazy(() => import("./features/Cart/Cart"));
const UserProfilePage = React.lazy(() => import("./Pages/UserProfilePage"));
const CheckoutPage = React.lazy(() => import("./Pages/CheckoutPage"));
const DashboardPage = React.lazy(() => import("./Pages/DashboardPage"));
const OrderHistoryPage = React.lazy(() => import("./Pages/OrderHistoryPage"));
const WishlistPage = React.lazy(() => import("./Pages/WishlistPage"));
const PrivacyPage = React.lazy(() => import("./Pages/PrivacyPage"));
const BlogPage = React.lazy(() => import("./Pages/BlogPage"));
const BlogDetailPage = React.lazy(() => import("./Pages/BlogDetailPage"));
const AboutPage = React.lazy(() => import("./Pages/AboutPage"));
const ContactUsPage = React.lazy(() => import("./Pages/ContactUsPage"));
const CareersPage = React.lazy(() => import("./Pages/CareersPage"));
const ExchangePolicyPage = React.lazy(() =>
  import("./Pages/ExchangePolicyPage")
);
const FAQPage = React.lazy(() => import("./Pages/FAQPage"));
const ShippingDetailsPage = React.lazy(() =>
  import("./Pages/ShippingDetailsPage")
);

// ===========================================
// Define route configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <ErrorBoundary>
          <PageOnTop />
          <HomePage />
        </ErrorBoundary>
      </Suspense>
    ),
  },
  {
    path: "/logOut",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <ErrorBoundary>
          <LogOut />
        </ErrorBoundary>
      </Suspense>
    ),
  },
  {
    path: "/userProfile",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <ErrorBoundary>
          <PageOnTop />
          <UserProfilePage />
        </ErrorBoundary>
      </Suspense>
    ),
  },
  {
    path: "/orders",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <ErrorBoundary>
          <PageOnTop />
          <OrderHistoryPage />
        </ErrorBoundary>
      </Suspense>
    ),
  },
  {
    path: "/userDashboard",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <ErrorBoundary>
          <PageOnTop />
          <DashboardPage />
        </ErrorBoundary>
      </Suspense>
    ),
  },
  {
    path: "/wishlist",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <ErrorBoundary>
          <PageOnTop />
          <WishlistPage />
        </ErrorBoundary>
      </Suspense>
    ),
  },
  {
    path: "/Products",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <ErrorBoundary>
          <PageOnTop />
          <ProductsPage />
        </ErrorBoundary>
      </Suspense>
    ),
  },
  {
    path: "/ProductsDetails/:id",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <ErrorBoundary>
          <PageOnTop />
          <ProductsDetailsPage />
        </ErrorBoundary>
      </Suspense>
    ),
  },
  {
    path: "/cart",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <ErrorBoundary>
          <PageOnTop />
          <Cart />
        </ErrorBoundary>
      </Suspense>
    ),
  },
  {
    path: "/checkout",

    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <ErrorBoundary>
          <PageOnTop />
          <CheckoutPage />
        </ErrorBoundary>
      </Suspense>
    ),
  },
  {
    path: "/privacypolicy",
    element: (
      <>
        <Suspense fallback={<LoadingSpinner />}>
          <ErrorBoundary>
            <PageOnTop />
            <PrivacyPage />
          </ErrorBoundary>
        </Suspense>
      </>
    ),
  },
  {
    path: "/blog",
    element: (
      <>
        <Suspense fallback={<LoadingSpinner />}>
          <ErrorBoundary>
            <PageOnTop />
            <BlogPage />
          </ErrorBoundary>
        </Suspense>
      </>
    ),
  },
  {
    path: "/blogDetails",
    element: (
      <>
        <Suspense fallback={<LoadingSpinner />}>
          <ErrorBoundary>
            <PageOnTop />
            <BlogDetailPage />
          </ErrorBoundary>
        </Suspense>
      </>
    ),
  },
  {
    path: "/aboutUs",
    element: (
      <>
        <Suspense fallback={<LoadingSpinner />}>
          <ErrorBoundary>
            <PageOnTop />
            <AboutPage />
          </ErrorBoundary>
        </Suspense>
      </>
    ),
  },
  {
    path: "/ContactUs",
    element: (
      <>
        <Suspense fallback={<LoadingSpinner />}>
          <ErrorBoundary>
            <PageOnTop />
            <ContactUsPage />
          </ErrorBoundary>
        </Suspense>
      </>
    ),
  },
  {
    path: "/FAQ",
    element: (
      <>
        <Suspense fallback={<LoadingSpinner />}>
          <ErrorBoundary>
            <PageOnTop />
            <FAQPage />
          </ErrorBoundary>
        </Suspense>
      </>
    ),
  },
  {
    path: "/ShippingPolicy",
    element: (
      <>
        <Suspense fallback={<LoadingSpinner />}>
          <ErrorBoundary>
            <PageOnTop />
            <ShippingDetailsPage />
          </ErrorBoundary>
        </Suspense>
      </>
    ),
  },
  {
    path: "/careers",
    element: (
      <>
        <Suspense fallback={<LoadingSpinner />}>
          <ErrorBoundary>
            <PageOnTop />
            <CareersPage />
          </ErrorBoundary>
        </Suspense>
      </>
    ),
  },
  {
    path: "/exchangePolicy",
    element: (
      <>
        <Suspense fallback={<LoadingSpinner />}>
          <ErrorBoundary>
            <PageOnTop />
            <ExchangePolicyPage />
          </ErrorBoundary>
        </Suspense>
      </>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <ErrorBoundary>
          <ErrorPage />
        </ErrorBoundary>
      </Suspense>
    ),
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
