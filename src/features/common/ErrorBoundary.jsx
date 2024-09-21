import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Assuming you're using React Router for navigation

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when an error occurs
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}

// Fallback component with navigation back to the home page
const ErrorFallback = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Navigate to home page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-6">
        Oops! Something went wrong.
      </h1>
      <p className="text-lg text-gray-700 mb-10">
        We apologize for the inconvenience. Please try again or go back to the
        homepage.
      </p>
      <Link to="/">
        <button
          onClick={handleGoHome}
          className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 ease-in-out"
        >
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorBoundary;
