import React from "react";

const LoadingSpinner = () => {
  return (
    <>
      <>
        <div className="flex flex-row gap-2 items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce" />
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]" />
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]" />
        </div>
      </>
    </>
  );
};

export default LoadingSpinner;
