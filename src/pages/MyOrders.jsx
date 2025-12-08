import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyOrders = () => {
  const [order, setOrder] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`https://pawbuddy-five.vercel.app/orders?email=${user.email}`)
      .then((res) => setOrder(res.data))
      .catch((err) => console.log(err));
  }, [user.email]);

  console.log(order);

  return (
    <>
      {/* Responsive Orders -> Table on md+, Card list on mobile */}
      <div className="w-full p-4">
        {/* Desktop / Tablet: table (md+) */}
        <div className="hidden md:block overflow-x-auto h-96 w-full p-2">
          <table className="min-w-full rounded-lg shadow-md">
            <thead className="bg-rose-200/70 sticky top-0 backdrop-blur-sm">
              <tr className="text-amber-900">
                <th className="text-lg font-semibold py-3 px-4">#</th>
                <th className="text-lg font-semibold py-3 px-4">
                  Product/Listing Name
                </th>
                <th className="text-lg font-semibold py-3 px-4">Buyer Name</th>
                <th className="text-lg font-semibold py-3 px-4">Price</th>
                <th className="text-lg font-semibold py-3 px-4">Quantity</th>
                <th className="text-lg font-semibold py-3 px-4">Address</th>
                <th className="text-lg font-semibold py-3 px-4">Date</th>
                <th className="text-lg font-semibold py-3 px-4">Phone</th>
              </tr>
            </thead>

            <tbody className="bg-white/80">
              {Array.isArray(order) && order.length ? (
                order.map((item, index) => (
                  <tr
                    key={item._id ?? index}
                    className="hover:bg-amber-100 transition-colors border-b border-rose-100"
                  >
                    <td className="py-3 px-4 font-semibold text-amber-800">
                      {index + 1}
                    </td>
                    <td className="py-3 text-center px-4">
                      {item.listingName}
                    </td>
                    <td className="py-3 text-center px-4">{item.buyerName}</td>
                    <td className="py-3 text-center px-4">৳ {item.price}</td>
                    <td className="py-3 text-center px-4">{item.quantity}</td>
                    <td className="py-3 text-center px-4">{item.address}</td>
                    <td className="py-3 text-center px-4">{item.date}</td>
                    <td className="py-3 text-center px-4">{item.phone}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center py-8 text-gray-600">
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile: card list (sm and below) */}
        <div className="md:hidden space-y-3">
          {Array.isArray(order) && order.length ? (
            order.map((item, index) => (
              <article
                key={item._id ?? index}
                className="bg-white/90 rounded-xl p-4 shadow-sm border border-rose-50"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-sm font-bold text-amber-700 mb-1">
                      #{index + 1}
                    </div>

                    <h3 className="text-md font-semibold text-amber-900">
                      {item.listingName}
                    </h3>

                    <p className="text-sm text-gray-700 mt-1">
                      <span className="font-medium">Buyer:</span>{" "}
                      {item.buyerName}
                    </p>

                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Address:</span>{" "}
                      {item.address}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-md font-semibold text-amber-800">
                      ৳ {item.price}
                    </p>
                    <p className="text-sm text-gray-600">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
                  <div>
                    <div>
                      <span className="font-medium">Pick-up:</span> {item.date}
                    </div>
                    <div className="mt-1">
                      <span className="font-medium">Phone:</span> {item.phone}
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button className="text-xs px-3 py-1 rounded-full bg-amber-100 text-amber-900 hover:bg-amber-200">
                      View
                    </button>
                    <button className="text-xs px-3 py-1 rounded-full bg-rose-50 text-rose-700 hover:bg-rose-100">
                      Delete
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="text-center py-8 text-gray-600">
              No orders found.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyOrders;
