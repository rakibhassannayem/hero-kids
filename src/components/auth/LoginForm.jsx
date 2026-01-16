"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import Swal from "sweetalert2";
import { SocialButtons } from "./SocialButton";
import { useRouter, useSearchParams } from "next/navigation";

const LoginForm = () => {
  const params = useSearchParams();
  const router = useRouter();
  const callBack = params.get("callbackUrl") || "/";

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
      callbackUrl: params.get("callbackUrl") || "/",
    });
    // console.log(result);
    if (!result.ok) {
      Swal.fire(
        "error",
        "Email or passwprd didn't match! Try Google login/register.",
        "error"
      );
    } else {
      Swal.fire("success", "Welcome to kids hub!", "success");
      router.push(callBack);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <form onSubmit={handleSubmit} className="card-body">
          <h2 className="text-2xl font-bold text-center">Login</h2>

          {/* Email */}
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Password */}
          <div className="form-control mt-2">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Login Button */}
          <button className="btn btn-primary mt-6">Login</button>

          {/* Google Login */}
          <SocialButtons />

          {/* Register Link */}
          <p className="text-center text-sm mt-4">
            Don&apos;t have an account?{" "}
            <Link
              href={`/register?callbackUrl=${callBack}`}
              className="link link-primary"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
