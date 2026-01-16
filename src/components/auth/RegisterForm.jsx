"use client";

import { postUser } from "@/actions/server/auth";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { SocialButtons } from "./SocialButton";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";

const RegisterForm = () => {
  const params = useSearchParams();
  const callBack = params.get("callbackUrl") || "/";

  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await postUser(form);
    if (result.acknowledged) {
      // router.push("/login");
      const result = await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
        callbackUrl: callBack,
      });
      if (!result.ok) {
        Swal.fire("error", "Email or passwprd didn't match!", "error");
      } else {
        Swal.fire("success", "Welcome to kids hub!", "success");
        router.push(callBack);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <form onSubmit={handleSubmit} className="card-body">
          <h2 className="text-2xl font-bold text-center">Register</h2>

          {/* Name */}
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Email */}
          <div className="form-control mt-2">
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
              placeholder="Create a password"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Register Button */}
          <button className="btn btn-primary mt-6">Register</button>

          {/* Google Register */}
          <SocialButtons />

          {/* Login Link */}
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link href="/login" className="link link-primary">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
