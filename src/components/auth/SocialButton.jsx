"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

export const SocialButtons = () => {
  const params = useSearchParams();
  // console.log(params.get("callbackUrl") || "/");

  const handleSingIn = async () => {
    const result = await signIn("google", {
      // redirect: "false",
      callbackUrl: params.get("callbackUrl") || "/",
    });
    console.log(result);

    if (result.ok) Swal.fire("success", "Welcome", "success");
    else Swal.fire("error", "Sorry", "error");
  };
  return (
    <button
      onClick={handleSingIn}
      className="btn btn-outline mt-3 gap-2 text-primary"
    >
      <FaGoogle />
      Login with Google
    </button>
  );
};
