// HomePage.jsx
import React, { useState } from 'react';
import Footer from '../../components/user/Footer';
import ChatAI from '../../components/user/ChatAi';
import CitizenScience from '../../components/user/CitizenScience';
import HelpCenter from '../../components/user/HelpCenter';
import ProductCard from '../../components/user/ProductCard';

const HomePage = ({ cartItems, addToCart }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const products = [
    { 
      id: 1,
      name: 'Botol Plastik',
      price: 'Rp 5.000 / Kg',
      image: 'https://placehold.co/600x400/E5E7EB/4B5563?text=Botol+Plastik',
      rating: 4.5,
      sales: 33,
      seller: 'Jannah Kurniawati',
      location: 'Klaten, Jawa Tengah',
    },
    {
      id: 2,
      name: 'Kertas HVS',
      price: 'Rp 2.000 / Kg',
      image: 'https://placehold.co/600x400/E5E7EB/4B5563?text=Kertas+HVS',
      rating: 4.3,
      sales: 20,
      seller: 'Dzaka Alif',
      location: 'Solo, Jawa Tengah',
    },
    { 
      id: 3,
      name: 'Kardus',
      price: 'Rp 1.000 / Kg',
      image: 'https://placehold.co/600x400/E5E7EB/4B5563?text=Kardus',
      rating: 4.2,
      sales: 18,
      seller: 'Rina Permata',
      location: 'Yogyakarta',
    },
    // tambahkan produk lain sesuai kebutuhan
  ];

  return (
    <div className="overflow-x-hidden relative font-sans bg-gray-100 min-h-screen flex flex-col">
      
      <div
        className="fixed bottom-5 right-5 z-50 cursor-pointer transition-transform duration-300 hover:scale-110"
        onClick={toggleChat}
      >
        <img src="/src/assets/zanu.png" alt="Zanu Mascot" className="w-20 h-auto" />
      </div>

      {isChatOpen && <ChatAI onClose={toggleChat} />}

      <main className="px-12 flex-grow">
        {/* Bagian hero */}
        <section className="bg-[url('/src/assets/hero.png')] bg-cover bg-center h-[400px] flex items-center justify-start pl-12 rounded-2xl mt-5">
          <div className="bg-white bg-opacity-80 p-8 rounded-lg max-w-lg">
            <h1 className="text-ecotani-green text-4xl font-bold mt-0">Selamat Datang di Ecotani</h1>
            <p className="text-gray-700 mt-2">
              Platform untuk mengubah limbah menjadi pendapatan dan menciptakan lingkungan yang lebih hijau. Bersama-sama, kita bisa membuat perubahan.
            </p>
            <button className="bg-ecotani-green text-white py-3 px-8 rounded-full font-semibold mt-4 transition-colors hover:bg-green-700">
              Jelajahi Sekarang
            </button>
          </div>
        </section>

        {/* Produk Unggulan */}
        <section className="text-center mt-12">
          <h2 className="text-3xl font-bold">Produk Limbah Unggulan</h2>
          <div className="grid grid-cols-3 gap-5 mt-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </section>

        {/* Citizen Science & Help Center */}
        <div className="container mx-auto px-4 py-8">
          <CitizenScience />
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <HelpCenter />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
