"use client";
import { createOrder } from "@/actions/server/order";
import { useSession } from "next-auth/react";
import React, { useMemo } from "react";
import Swal from "sweetalert2";

const CheckOut = ({ cartItems = [] }) => {
  const session = useSession();

  const totalItems = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const totalPrice = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const payload = {
      name: form.name.value,
      email: form.email.value,
      contact: form.phone.value,
      address: form.address.value,
      instruction: form.instruction.value,
    };

    const result = await createOrder(payload);
    if (result.success) {
      Swal.fire("success", "Order Added!", "success");
    } else {
      Swal.fire("error", "Something went wrong!", "error");
    }
  };

  if (session.status == "loading") {
    return (
      <h2 className="py-4 text-xl text-primary font-semibold">Loading...</h2>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Checkout Form</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* LEFT: Checkout Form */}
        <div className="flex-3">
          <div className="card bg-base-100 shadow border">
            <div className="card-body">
              <h2 className="card-title mb-4">Checkout Information</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Email */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label className="label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={session?.data?.user?.name}
                      className="input input-bordered w-full"
                      placeholder="Your name"
                      required
                      readOnly
                    />
                  </div>

                  <div className="flex-1">
                    <label className="label">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={session?.data?.user?.email}
                      className="input input-bordered w-full"
                      placeholder="you@email.com"
                      required
                      readOnly
                    />
                  </div>
                </div>

                {/* Delivery Info */}
                <div>
                  <label className="label">Delivery Information</label>
                  <textarea
                    name="address"
                    className="textarea textarea-bordered w-full"
                    placeholder="Street, house no, area"
                    required
                  />
                </div>

                {/* Order Info */}
                <div>
                  <label className="label">Order Instructions</label>
                  <textarea
                    name="instruction"
                    className="textarea textarea-bordered w-full"
                    placeholder="Special instructions (optional)"
                  />
                </div>

                {/* Contact Info */}
                <div>
                  <label className="label">Contact Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="input input-bordered w-full"
                    placeholder="01XXXXXXXXX"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full mt-2"
                  disabled={!cartItems.length}
                >
                  Check out with Cash On Delivery
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* RIGHT: Order Summary */}
        <div className="flex-1">
          <div className="card bg-base-100 shadow border sticky top-4">
            <div className="card-body">
              <h2 className="card-title">Order Summary</h2>

              <div className="overflow-x-auto">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th className="text-center">Qty</th>
                      <th className="text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item._id}>
                        <td className="max-w-35 truncate">{item.title}</td>
                        <td className="text-center">{item.quantity}</td>
                        <td className="text-right">
                          ৳{(item.price * item.quantity).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="divider" />

              <div className="flex justify-between">
                <span>Total Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between text-lg font-bold">
                <span>Grand Total</span>
                <span className="text-primary">৳{totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
