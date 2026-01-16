"use client";

import { useMemo, useState } from "react";
import CartItem from "../cards/CartItem";

const Cart = ({ cartItem = [] }) => {
  const [items, setItems] = useState(cartItem);

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item._id != id));
  };

  const updateQuantity = (id, q) => {
    if (q < 1) return;
    setItems((prev) =>
      prev.map((item) =>
        item._id == id ? { ...item, quantity: q } : item
      )
    );
  };

  return (
    <div>
      <p className="py-3 text-lg">
        <span className="text-primary font-bold">{items.length}</span> Items
        Found in the Cart
      </p>

      <div className="flex gap-6">
        {/* LEFT: Cart Items */}
        <div className="flex-[3] space-y-3">
          {items.map((item) => (
            <CartItem
              key={item._id.toString()}
              item={{ ...item, _id: item._id.toString() }}
              removeItem={removeItem}
              updateQuantity={updateQuantity}
            />
          ))}
        </div>

        {/* RIGHT: Summary Card */}
        <div className="flex-1">
          <div className="card bg-base-100 shadow-md border">
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
                    {items.map((item) => (
                      <tr key={item._id}>
                        <td className="max-w-[140px] truncate">
                          {item.title}
                        </td>
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

              <div className="flex justify-between font-semibold">
                <span>Total Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between text-lg font-bold">
                <span>Grand Total</span>
                <span className="text-primary">
                  ৳{totalPrice.toFixed(2)}
                </span>
              </div>

              <div className="card-actions mt-4">
                <button
                  className="btn btn-primary w-full"
                  disabled={!items.length}
                  onClick={() => console.log("Confirm order", items)}
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
