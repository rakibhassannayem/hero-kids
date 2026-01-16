"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import CartButton from "../buttons/CartButton";

const ProductCard = ({ product }) => {
  const { _id, title, image, price, discount, ratings, sold } = product;

  const finalPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
      {/* Image */}
      <figure className="relative h-48">
        <Image
          src={image}
          alt={title}
          width={300}
          height={180}
          className="object-cover"
        />
      </figure>

      <div className="card-body p-4">
        {/* Title */}
        <h2 className="card-title text-sm line-clamp-2">{title}</h2>

        {/* Rating & Sold */}
        <div className="flex items-center justify-between text-sm mt-1">
          <div className="flex items-center gap-1">
            <FaStar className="text-warning" />
            <span>{ratings}</span>
          </div>
          <span className="text-gray-500">Sold: {sold}</span>
        </div>

        {/* Price */}
        <div className="mt-2">
          {discount && (
            <span className="line-through text-sm text-gray-400 mr-2">
              ৳{price}
            </span>
          )}
          <span className="text-lg font-bold text-primary">৳{finalPrice}</span>
        </div>

        {/* Add to cart */}
        <CartButton product={{ ...product, _id: _id.toString() }} />
        <Link
          href={`/products/${_id}`}
          className="btn btn-primary btn-outline btn-sm mt-3 gap-2"
        >
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
