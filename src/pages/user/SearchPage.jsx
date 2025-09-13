// SearchPage.jsx
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Footer from '../../components/user/Footer';
import ProductCard from '../../components/user/ProductCard';
import botolImg from "../../assets/botol.jpg";

const SearchPage = ({ addToCart }) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [searchResults, setSearchResults] = useState([]);

  const allProducts = [
    {
      id: 1,
      image: botolImg,
      name: 'Botol Plastik',
      price: 'Rp3.000/g',
      priceValue: 3000,
      seller: 'Jannah K',
      location: 'Klaten, Jawa Tengah',
      rating: 5.0,
      sales: 10,
    },
  ];

  useEffect(() => {
    const filtered = allProducts.filter(
      (p) => query && p.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  }, [query]);

  return (
    <div className="font-sans">
      <main className="container mx-auto px-12 mt-8 flex gap-8">
        {/* Sidebar Filter */}
        <div className="w-1/4">
          <h2 className="text-xl font-bold mb-4">FILTER</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-800 mb-2">Kategori</h3>
            <div className="space-y-1 text-sm text-gray-700">
              <label className="block"><input type="checkbox" className="mr-2" /> Organik</label>
              <label className="block"><input type="checkbox" className="mr-2" /> Anorganik</label>
              <label className="block"><input type="checkbox" className="mr-2" /> B3</label>
              <label className="block"><input type="checkbox" className="mr-2" /> Kayu/serbuk gergaji</label>
            </div>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">Kondisi Limbah</h3>
            <div className="space-y-1 text-sm text-gray-700">
              <label className="block"><input type="checkbox" className="mr-2" /> Basah</label>
              <label className="block"><input type="checkbox" className="mr-2" /> Kering</label>
            </div>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">Lokasi</h3>
            <div className="space-y-1 text-sm text-gray-700">
              <label className="block"><input type="checkbox" className="mr-2" /> Maluku</label>
              <label className="block"><input type="checkbox" className="mr-2" /> Jawa</label>
              <label className="block"><input type="checkbox" className="mr-2" /> Sumatera</label>
              <label className="block"><input type="checkbox" className="mr-2" /> Kalimantan</label>
              <label className="block"><input type="checkbox" className="mr-2" /> Sulawesi</label>
              <label className="block"><input type="checkbox" className="mr-2" /> Bali & Nusa Tenggara</label>
              <label className="block"><input type="checkbox" className="mr-2" /> Papua</label>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-grow">
          <h1 className="text-2xl font-bold mb-6">Hasil Pencarian untuk "{query}"</h1>
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-3 gap-8">
              {searchResults.map((product) => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Tidak ada produk yang cocok dengan pencarian Anda.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchPage;
