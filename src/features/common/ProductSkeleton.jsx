import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const ProductSkeleton = () => {
  return (
    <>
      {/* Product Image Skeleton */}
      <div className="flex-shrink-0">
        <Skeleton height={250} width={250} />
      </div>
    </>
  );
};

export default ProductSkeleton;
