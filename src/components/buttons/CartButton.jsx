"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";

const CartButton = ({ product }) => {
  const session = useSession();
  const isLogin = session.status == "authenticated";
  const router = useRouter();
  const path = usePathname();

  const addToCart = () => {
    if (isLogin) alert(product._id);
    else router.push(`/login?callbackUrl=${path}`);
  };

  return (
    <div>
      <button onClick={addToCart} className="btn btn-primary mt-5 gap-2">
        <FaShoppingCart />
        Add to Cart
      </button>
    </div>
  );
};

export default CartButton;
