import React from 'react';
import { useSearchParams } from 'react-router-dom'; // Import useSearchParams
import Navbar from '../../components/user/Navbar';
import Footer from '../../components/user/Footer';
import ProductCard from '../../components/user/ProductCard';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  const products = [
    // Data produk yang sudah kamu miliki
    {
      image: '/src/assets/product-placeholder.png',
      name: 'Botol Plastik',
      price: 'Rp3.000/g',
      seller: 'Jannah K',
      location: 'Klaten, Jawa Tengah',
      rating: 5.0,
      sales: 10,
    },
    {
      image: '/src/assets/product-placeholder.png',
      name: 'Botol Plastik',
      price: 'Rp3.000/g',
      seller: 'Jannah K',
      location: 'Klaten, Jawa Tengah',
      rating: 5.0,
      sales: 10,
    },
    // Tambahkan produk lain di sini
  ];

  return (
    <div className="font-sans">
      <Navbar />
      <main className="container mx-auto px-12 mt-8">
        <h1 className="text-2xl font-bold mb-6">Hasil Pencarian untuk "{query}"</h1>
        <div className="flex gap-8">
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
            <div className="grid grid-cols-3 gap-8">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  seller={product.seller}
                  location={product.location}
                  rating={product.rating}
                  sales={product.sales}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchPage;