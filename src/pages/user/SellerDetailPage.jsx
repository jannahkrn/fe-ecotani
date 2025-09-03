import React from 'react';
import Footer from '../../components/user/Footer';
import ProductCard from '../../components/user/ProductCard';

// Data dummy untuk penjual
const sellerData = {
  name: 'Jannah Kurniawati',
  location: 'Klaten, Jawa Tengah',
  rating: 4.8,
  reviewCount: 203,
  soldCount: 33,
  responseTime: '< 1 jam',
  responseRate: '98%',
  description: 'Produsen kompos organik terpercaya dengan pengalaman lebih dari 10 tahun. Kami berkomitmen menyediakan produk berkualitas tinggi untuk mendukung pertanian berkelanjutan.',
  products: [
    {
      id: 1, // Pastikan ID ada dan unik
      name: 'Botol Plastik',
      price: 'Rp3.000/g',
      image: '/src/assets/product-placeholder.png', 
      rating: 5.0,
      sales: '10+',
      seller: 'Jannah Kurniawati',
      location: 'Klaten, Jawa Tengah'
    },
    {
      id: 2, // Pastikan ID ada dan unik
      name: 'Botol Kaca',
      price: 'Rp5.000/g',
      image: '/src/assets/product-placeholder.png',
      rating: 5.0,
      sales: '10+',
      seller: 'Jannah Kurniawati',
      location: 'Klaten, Jawa Tengah'
    },
  ],
};

const SellerDetailPage = ({ isLoggedIn, userName, cartItems }) => {
  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
      <main className="container mx-auto px-12 py-8 flex-grow">
        {/* ... (bagian profil penjual) */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex-shrink-0">
              <img src="/src/assets/seller-photo-placeholder.png" alt={sellerData.name} className="w-full h-full rounded-full object-cover" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{sellerData.name}</h1>
              <p className="text-gray-500 text-sm mt-1">{sellerData.location}</p>
              <div className="flex gap-2 mt-4">
                <button className="py-2 px-6 rounded-full border border-ecotani-green text-ecotani-green font-semibold text-sm hover:bg-ecotani-green hover:text-white transition-colors">
                  Kirim Pesan
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 border-b border-gray-200 pb-6">
            <div className="flex items-center gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-800">{sellerData.rating}</p>
                <p className="text-sm text-gray-500 mt-1">{sellerData.reviewCount} Ulasan</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-800">{sellerData.soldCount}</p>
                <p className="text-sm text-gray-500 mt-1">Penjualan</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-800">{sellerData.responseTime}</p>
                <p className="text-sm text-gray-500 mt-1">Waktu Respon</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-800">{sellerData.responseRate}</p>
                <p className="text-sm text-gray-500 mt-1">Tingkat Response</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Tentang</h2>
            <p className="text-gray-700 text-sm">{sellerData.description}</p>
          </div>
        </div>

        {/* Bagian Produk Toko */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Produk Toko</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {sellerData.products.map(product => (
              <ProductCard
                key={product.id}
                product={product} // Mengirimkan seluruh objek produk
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SellerDetailPage;