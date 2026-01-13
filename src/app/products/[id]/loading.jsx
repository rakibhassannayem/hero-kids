import ProductDetailsSkeleton from "@/components/skeleton/ProductDetailsSkeleton";
import React from "react";

const loading = () => {
  return (
    <div>
      {[...Array(9)].map((_, index) => (
        <ProductDetailsSkeleton key={index} />
      ))}
    </div>
  );
};

export default loading;
