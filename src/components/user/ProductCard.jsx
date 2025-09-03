// ProductCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation(); // mencegah klik card ikut trigger navigate
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

  const handleBuyNow = () => {
    navigate(`/products/${encodeURIComponent(product.name)}`);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 cursor-pointer"
      onClick={handleBuyNow} // klik card → ke detail
    >
      <div className="w-full h-40 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center mb-4">
        <img src={product.image} alt={product.name} className="h-full w-auto object-cover" />
      </div>
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-ecotani-green font-bold text-lg">{product.price}</p>
      <div className="flex items-center text-sm text-gray-500 mt-1">
        {product.rating && (
          <>
            <span className="text-yellow-400">★</span>
            <span className="ml-1 mr-2">{product.rating}</span>
          </>
        )}
        {product.sales && <span>{product.sales}+ terjual</span>}
      </div>
      {product.seller && <p className="text-sm text-gray-500 mt-1">Penjual: {product.seller}</p>}
      {product.location && <p className="text-sm text-gray-500">Lokasi: {product.location}</p>}

      <div className="w-full flex gap-2 mt-3">
        {addToCart && (
          <button
            onClick={handleAddToCart}
            className="flex-1 py-2 rounded-full border border-ecotani-green text-ecotani-green text-sm font-semibold hover:bg-ecotani-green hover:text-white transition-colors"
          >
            Tambah Keranjang
          </button>
        )}
        <button
          onClick={handleBuyNow}
          className="flex-1 py-2 rounded-full bg-ecotani-green text-white text-sm font-semibold hover:bg-green-700 transition-colors"
        >
          Beli Sekarang
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
