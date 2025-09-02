import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-5xl font-bold text-ecotani-green mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        OPS! Sepertinya halaman yang anda cari tidak ditemukan.
      </h2>
      <p className="text-gray-500 mb-6 text-center max-w-md">
        Halaman yang Anda akses tidak tersedia atau sudah dipindahkan.
      </p>
      <Link
        to="/"
        className="bg-ecotani-green text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
      >
        Kembali ke Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
