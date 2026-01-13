import ProductCardSkeleton from "@/components/skeleton/ProductCardSkeleton";
import React from "react";

const loading = () => {
  return (
    <div>
      {[...Array(9)].map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default loading;
