"use client";

import { handleCart } from "@/actions/server/cart";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2";

const CartButton = ({ product }) => {
  const session = useSession();
  const isLogin = session.status == "authenticated";
  const path = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const addToCart = async () => {
    setLoading(true);

    if (isLogin) {
      const result = await handleCart({ product, inc: true });
      if (result.success) {
        Swal.fire("Added to Cart", product?.title, "success");
      } else {
        Swal.fire("Opps", "Something Wrong Happened!", "error");
      }
      setLoading(false);
    } else {
      router.push(`/login?callbackUrl=${path}`);
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        disabled={session.status == "loading" || loading}
        onClick={addToCart}
        className="btn btn-primary mt-5 gap-2 w-full"
      >
        <FaShoppingCart />
        Add to Cart
      </button>
    </div>
  );
};

export default CartButton;
