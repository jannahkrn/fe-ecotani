// src/components/user/PurchaseItem.jsx

import React from "react";
import { Link } from "react-router-dom";

const PurchaseItem = ({ order }) => {
  const renderStatus = () => {
    switch (order.status) {
      case "completed-rated":
        return (
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-600">
              Rating dari penjual: {order.sellerRating} / 5.0
            </p>
            <p className="text-sm font-semibold text-gray-600">
              Rating untuk produk: {order.productRating} / 5.0
            </p>
          </div>
        );
      case "completed":
        return (
          <div className="flex justify-end gap-2 mt-2">
            <Link
              to="/review"
              className="text-sm font-semibold text-white bg-ecotani-green px-4 py-2 rounded-full hover:bg-green-700 transition-colors"
            >
              Rating Sekarang
            </Link>
          </div>
        );
      case "pending-payment":
        return (
          <div className="flex justify-end gap-2 mt-2">
            <Link
              to="/payment-upload"
              className="text-sm font-semibold text-white bg-red-500 px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
            >
              Bayar Sekarang
            </Link>
          </div>
        );
      case "awaiting-verification":
        return (
          <div className="text-right">
            <p className="text-sm font-medium text-gray-500">
              Bukti Transfer sedang Diverifikasi
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center mb-4">
      <div className="flex items-start gap-6 flex-grow">
        <img
          src={order.productImage}
          alt={order.productName}
          className="w-24 h-24 object-cover rounded-lg"
        />
        <div>
          <p className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium inline-block mb-1">
            {order.productCategory}
          </p>
          <h3 className="font-semibold text-lg">{order.productName}</h3>
          <p className="text-sm text-gray-600">Penjual: {order.sellerName}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm font-medium text-gray-500">
              {order.paymentMethod}
            </span>
            <span
              className={`text-sm font-medium px-2 py-1 rounded-full 
                            ${
                              order.transactionStatus === "Selesai"
                                ? "bg-green-100 text-green-700"
                                : order.transactionStatus === "Diajukan"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-gray-100 text-gray-700"
                            }`}
            >
              {order.transactionStatus}
            </span>
          </div>
          {order.status === "completed-rated" && (
            <div className="mt-2 text-sm text-gray-600">
              <p>Rating dari penjual: {order.sellerRating}</p>
              <p>Rating untuk produk: {order.productRating}</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-end justify-between self-stretch">
        <p className="font-bold text-lg text-ecotani-green">
          Rp{order.price.toLocaleString("id-ID")}
        </p>
        <div className="mt-4">
          <Link
            to={`/tracking?orderId=${order.id}`}
            className="text-sm text-ecotani-green font-semibold hover:underline"
          >
            Detail Pesanan
          </Link>
        </div>
        {renderStatus()}
      </div>
    </div>
  );
};

export default PurchaseItem;
