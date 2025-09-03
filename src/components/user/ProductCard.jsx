// ProductCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, addToCart }) => {
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (addToCart) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.priceValue || product.price,
        quantity: 1,
        image: product.image,
      });
    }
  };

  const handleBuyNow = (e) => {
    e.stopPropagation();
    navigate(`/products/${encodeURIComponent(product.name)}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col border">
      {/* Gambar Produk */}
      <div
        className="w-full h-48 bg-gray-100 flex items-center justify-center cursor-pointer"
        onClick={handleBuyNow}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-gray-400">No Image</span>
        )}
      </div>

      {/* Detail Produk */}
      <div className="p-4 flex flex-col flex-1">
        {/* Nama + Rating */}
        <div
          className="flex justify-between items-start cursor-pointer"
          onClick={handleBuyNow}
        >
          <h3 className="font-semibold text-lg text-black">
            {product.name}
          </h3>
          <div className="text-right text-sm">
            {product.rating && (
              <div className="flex items-center text-[#43703A] font-medium">
                <span className="mr-1">★</span>
                {product.rating}
              </div>
            )}
            {product.sales && (
              <p className="text-black font-semibold">
                {product.sales}+ terjual
              </p>
            )}
          </div>
        </div>

        {/* Harga */}
        <p className="text-[#43703A] font-bold text-lg mt-1">
          {product.price}
        </p>

        {/* Penjual & Lokasi */}
        {product.seller && (
          <p className="text-sm text-gray-500 mt-2">
            Penjual: <span className="font-medium">{product.seller}</span>
          </p>
        )}
        {product.location && (
          <p className="text-sm text-gray-500">Lokasi: {product.location}</p>
        )}

        {/* Tombol Aksi */}
        <div className="flex gap-2 mt-4">
          {addToCart && (
            <button
              onClick={handleAddToCart}
              className="flex-1 py-2 rounded-sm bg-[#43703A] text-white text-sm font-semibold hover:bg-green-800 transition"
            >
              Tambah Keranjang
            </button>
          )}
          <button
            onClick={handleBuyNow}
            className="flex-1 py-2 rounded-sm bg-[#47241C] text-white text-sm font-semibold hover:bg-[#2e1611] transition"
          >
            Beli Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
