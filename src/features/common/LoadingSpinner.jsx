import React from "react";

const LoadingSpinner = () => {
  return (
    <>
      <div className="flex items-center justify-center h-auto w-auto mx-auto p-4 mt-5">
        <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-yellow-400" />
        <h2 className="font-bold dark:text-black ml-5">Loading...</h2>
      </div>
    </>
  );
};

export default LoadingSpinner;
