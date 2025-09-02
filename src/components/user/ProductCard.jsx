import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ image, name, price, seller, location, rating, sales }) => {
  return (
    <Link to={`/products/${name}`} className="block"> {/* Bungkus seluruh kartu dengan Link */}
      <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105">
        <div className="w-full h-40 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center mb-4">
          <img src={image} alt={name} className="h-full w-auto object-cover" />
        </div>
        <div className="text-left w-full mb-4">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-ecotani-green font-bold text-lg">{price}</p>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <span className="text-yellow-400">★</span>
            <span className="ml-1 mr-2">{rating}</span>
            <span>{sales}+ terjual</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Penjual: {seller}</p>
          <p className="text-sm text-gray-500">Lokasi: {location}</p>
        </div>
        <div className="w-full flex gap-2">
          <button className="flex-1 py-2 rounded-full border border-ecotani-green text-ecotani-green text-sm font-semibold hover:bg-ecotani-green hover:text-white transition-colors">
            Tambah Keranjang
          </button>
          <button className="flex-1 py-2 rounded-full bg-ecotani-green text-white text-sm font-semibold hover:bg-green-700 transition-colors">
            Beli Sekarang
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;