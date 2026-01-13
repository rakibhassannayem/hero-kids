const ProductDetailsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Image */}
      <div className="skeleton h-[400px] w-full rounded-lg"></div>

      {/* Content */}
      <div className="space-y-4">
        <div className="skeleton h-6 w-3/4"></div>
        <div className="skeleton h-4 w-1/2"></div>

        <div className="flex gap-4">
          <div className="skeleton h-4 w-16"></div>
          <div className="skeleton h-4 w-20"></div>
          <div className="skeleton h-4 w-16"></div>
        </div>

        <div className="skeleton h-8 w-32"></div>

        <div className="skeleton h-10 w-40"></div>

        <div className="space-y-2 mt-6">
          <div className="skeleton h-4 w-40"></div>
          <div className="skeleton h-4 w-60"></div>
          <div className="skeleton h-4 w-52"></div>
        </div>
      </div>

      {/* Description */}
      <div className="md:col-span-2 space-y-3">
        <div className="skeleton h-5 w-32"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-3/4"></div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
