import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../../components/user/Footer";

const SellerProductDetailPage = ({ cartItems }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      const products = JSON.parse(storedProducts);
      const foundProduct = products.find(
        (p) => p.id === parseInt(productId, 10)
      );
      setProduct(foundProduct);
    }
  }, [productId]);

  // default images
  const [selectedImage, setSelectedImage] = useState(
    "https://placehold.co/600x400/E5E7EB/24292e?text=Product+Image"
  );

  const thumbnails = [
    "https://placehold.co/200x200/E5E7EB/24292e?text=Thumbnail+1",
    "https://placehold.co/200x200/E5E7EB/24292e?text=Thumbnail+2",
    "https://placehold.co/200x200/E5E7EB/24292e?text=Thumbnail+3",
  ];

  if (!product) {
    return (
      <div className="font-sans">
        <div className="container mx-auto px-12 py-20 text-center">
          <h1 className="text-2xl font-bold">Produk Tidak Ditemukan</h1>
          <p className="mt-4 text-gray-600">
            Mohon maaf, produk yang Anda cari tidak tersedia.
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="font-sans">
      <main className="container mx-auto px-12 mt-8 mb-12">
        {/* Header + Tombol Kembali */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Detail Produk</h1>
          <button
            onClick={() => navigate("/profile")}
            className="bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-full hover:bg-gray-400 transition-colors"
          >
            Kembali ke Toko
          </button>
        </div>

        {/* Foto Produk + Thumbnails */}
        <div className="flex gap-4 justify-center mb-6">
          <div className="w-4/5">
            <img
              src={selectedImage}
              alt={product.productTitle}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="w-1/5 flex flex-col gap-2">
            {thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`thumbnail ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-80"
                onClick={() => setSelectedImage(thumb)}
              />
            ))}
          </div>
        </div>

        {/* Informasi Produk */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#43703A] text-white font-bold py-1 px-3 rounded-sm text-xs font-medium">
                {product.category || "Kategori"}
              </span>
              <span className="bg-White text-[#43703A] font-bold py-1 px-3 rounded-sm text-xs font-medium">
                {product.condition || "Kondisi"}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800">
              {product.productTitle}
            </h1>
            {/* Rating Produk */}
            <div className="flex items-center gap-4 mt-2 mb-4">
              <div className="flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="ml-1 text-gray-700 font-semibold">5.0</span>
                <span className="ml-1 text-gray-500 text-sm">
                  (3 ulasan)
                </span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <p className="text-gray-700 font-semibold">–</p>
            </div>
            <p className="text-[#43703A] text-4xl font-bold">
              Rp{parseInt(product.price).toLocaleString("id-ID")}
            </p>
            <div className="mt-2 text-sm text-gray-600 space-y-1">
              <p>Berat: {product.weight} gram</p>
              <p>Lokasi: {product.location}</p>
              <p>Garansi Kualitas</p>
            </div>
          </div>
        </div>

        {/* Deskripsi Produk */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Deskripsi Produk</h3>
          <p className="text-sm text-gray-700 whitespace-pre-line">
            {product.description}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SellerProductDetailPage;
