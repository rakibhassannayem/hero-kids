"use client";

import { deleteItemsFromCart } from "@/actions/server/cart";
import Image from "next/image";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const CartItem = ({ item, removeItem }) => {
  const { _id, title, image, quantity, price } = item;

  const handleDeleteCart = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await deleteItemsFromCart(_id);
        if (result.success) {
          removeItem(_id);

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Opps!",
            text: "Something Went Wrong.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className="flex gap-4 items-center p-4 rounded-xl border border-base-300 bg-base-100 shadow-sm">
      {/* Image */}
      <div className="relative w-24 h-24 rounded-lg overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Info */}
      <div className="flex-1 space-y-2">
        <h3 className="font-semibold text-base md:text-lg line-clamp-2">
          {title}
        </h3>

        <p className="text-sm text-gray-500">
          Price: <span className="font-medium">৳{price}</span>
        </p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3">
          <button
            className="btn btn-sm btn-outline"
            disabled={quantity <= 1}
          >
            <FaMinus />
          </button>

          <span className="font-semibold min-w-6 text-center">{quantity}</span>

          <button className="btn btn-sm btn-outline">
            <FaPlus />
          </button>
        </div>
      </div>

      {/* Remove */}
      <div>
        <button
          onClick={handleDeleteCart}
          className="btn btn-sm btn-error btn-outline"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
