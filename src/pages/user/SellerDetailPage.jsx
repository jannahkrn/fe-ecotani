// src/pages/user/SellerDetailPage.jsx
import React, { useState } from "react";
import Footer from "../../components/user/Footer";
import ProductCard from "../../components/user/ProductCard";
import logoImg from "../../assets/logo.png";
import botolImg from "../../assets/botol.jpg";

const sellerData = {
  name: "Jannah Kurniawati",
  location: "Klaten, Jawa Tengah",
  rating: 4.8,
  reviewCount: 203,
  soldCount: 33,
  responseTime: "<1 jam",
  responseRate: "98%",
  description:
    "Produsen kompos organik terpercaya dengan pengalaman lebih dari 10 tahun. Kami berkomitmen menyediakan produk berkualitas tinggi untuk mendukung pertanian berkelanjutan.",
  products: [
    {
      id: 1,
      name: "Botol Plastik",
      price: "Rp3.000/g",
      image: "/src/assets/product-placeholder.png",
      rating: 5.0,
      sales: "10+",
      seller: "Jannah Kurniawati",
      location: "Klaten, Jawa Tengah",
    },
    {
      id: 2,
      name: "Botol Kaca",
      price: "Rp5.000/g",
      image: "/src/assets/product-placeholder.png",
      rating: 5.0,
      sales: "10+",
      seller: "Jannah Kurniawati",
      location: "Klaten, Jawa Tengah",
    },
  ],
};

const SellerDetailPage = () => {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState(""); // ✅ untuk alert

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
    setMessage(`${item.name} berhasil ditambahkan ke keranjang!`);

    // otomatis hilang setelah 3 detik
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <div className="container mx-auto px-12 py-8 flex-grow">
        {/* ✅ Alert pesan */}
        {message && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <span className="block sm:inline">{message}</span>
          </div>
        )}

        {/* ✅ Header Lihat Toko (tidak dihapus) */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex items-center gap-4 mb-8">
          <img
            src={logoImg}
            alt="Ecotani Logo"
            className="h-8"
          />
          <div className="w-[1px] h-8 bg-gray-300 mx-2"></div>
          <h1 className="text-2xl font-bold text-[#43703a]">
            Lihat Toko
          </h1>
        </div>

        {/* Profil Penjual */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <div className="flex flex-wrap items-start gap-8">
            {/* Kiri */}
            <div className="flex flex-col text-left text-center w-48">
              <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src="/src/assets/seller-photo-placeholder.png"
                  alt={sellerData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-xl font-bold text-gray-800 mt-3">
                {sellerData.name}
              </h1>
              <p className="text-gray-500 text-sm">{sellerData.location}</p>
              <button className="mt-4 py-2 px-6 rounded-sm bg-[#43703A] text-white font-semibold text-sm hover:bg-[#345a2e] transition-colors">
                Kirim Pesan
              </button>
            </div>

            {/* Kanan: Statistik */}
            <div className="flex flex-1 flex-wrap items-center justify-start gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#43703a]">
                  {sellerData.rating}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {sellerData.reviewCount} Ulasan
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#43703a]">
                  {sellerData.soldCount}
                </p>
                <p className="text-sm text-gray-500 mt-1">Penjualan</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#43703a]">
                  {sellerData.responseTime}
                </p>
                <p className="text-sm text-gray-500 mt-1">Waktu Respon</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#43703a]">
                  {sellerData.responseRate}
                </p>
                <p className="text-sm text-gray-500 mt-1">Tingkat Response</p>
              </div>
            </div>
          </div>

          {/* Tentang */}
          <div className="mt-6 border-t border-gray-200 pt-6">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Tentang</h2>
            <p className="text-gray-700 text-sm">{sellerData.description}</p>
          </div>
        </div>

        {/* Produk Toko */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Produk Toko</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sellerData.products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SellerDetailPage;
