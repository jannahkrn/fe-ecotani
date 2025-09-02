import React, { useState } from 'react';
import Navbar from '../../components/user/Navbar';
import Footer from '../../components/user/Footer';
import ChatAI from '../../components/user/ChatAi';
import CitizenScience from '../../components/user/CitizenScience';
import HelpCenter from '../../components/user/HelpCenter';
import ProductCard from '../../components/user/ProductCard';

const HomePage = ({ isLoggedIn, userName, cartItems }) => {
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
    },
    {
      id: 2,
      name: 'Kertas HVS',
      price: 'Rp 2.000 / Kg',
      image: 'https://placehold.co/600x400/E5E7EB/4B5563?text=Kertas+HVS',
    },
    { 
      id: 3,
      name: 'Kardus',
      price: 'Rp 1.000 / Kg',
      image: 'https://placehold.co/600x400/E5E7EB/4B5563?text=Kardus',
    },
    {
      id: 4,
      name: 'Botol Kaca',
      price: 'Rp 3.000 / Kg',
      image: 'https://placehold.co/600x400/E5E7EB/4B5563?text=Botol+Kaca',
    },
    { 
      id: 5,
      name: 'Kaleng Bekas',
      price: 'Rp 4.500 / Kg',
      image: 'https://placehold.co/600x400/E5E7EB/4B5563?text=Kaleng+Bekas',
    },
    { 
      id: 6,
      name: 'Tutup Botol',
      price: 'Rp 2.500 / Kg',
      image: 'https://placehold.co/600x400/E5E7EB/4B5563?text=Tutup+Botol',
    },
  ];

  // Definisikan fungsi logout di sini. Fungsi ini akan dipanggil dari Navbar.
  const handleLogout = () => {
    // Di sini, Anda akan menambahkan logika untuk mengubah status login
    // di komponen induk (misalnya, di file App.jsx),
    // seperti mengarahkan pengguna ke halaman login atau membersihkan token sesi.
    console.log("Pengguna keluar.");
  };

  return (
    <div className="overflow-x-hidden relative font-sans bg-gray-100 min-h-screen flex flex-col">
      {/* Meneruskan fungsi handleLogout sebagai prop ke komponen Navbar */}
      <Navbar isLoggedIn={isLoggedIn} userName={userName} cartItems={cartItems} onLogout={handleLogout} />

      <div
        className="fixed bottom-5 right-5 z-50 cursor-pointer transition-transform duration-300 hover:scale-110"
        onClick={toggleChat}
      >
        <img src="/src/assets/zanu.png" alt="Zanu Mascot" className="w-20 h-auto" />
      </div>

      {isChatOpen && <ChatAI onClose={toggleChat} />}

      <main className="px-12 flex-grow">
        <section className="bg-[url('/src/assets/hero.png')] bg-cover bg-center h-[400px] flex items-center justify-start pl-12 rounded-2xl mt-5">
          <div className="bg-white bg-opacity-80 p-8 rounded-lg max-w-lg">
            <h1 className="text-ecotani-green text-4xl font-bold mt-0">Selamat Datang di Ecotani</h1>
            <p className="text-gray-700 mt-2">Platform untuk mengubah limbah menjadi pendapatan dan menciptakan lingkungan yang lebih hijau. Bersama-sama, kita bisa membuat perubahan.</p>
            <button className="bg-ecotani-green text-white py-3 px-8 rounded-full font-semibold mt-4 transition-colors hover:bg-green-700">Jelajahi Sekarang</button>
          </div>
        </section>

        <section className="flex justify-around bg-ecotani-green text-white py-8 -mx-12 my-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold m-0">10,000+</h2>
            <p className="text-sm">Pengguna Aktif</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold m-0">50,000</h2>
            <p className="text-sm">Kg Sampah Terkumpul</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold m-0">25</h2>
            <p className="text-sm">Bank Sampah Bergabung</p>
          </div>
        </section>

        <section className="text-center my-12">
          <h2 className="text-ecotani-green text-3xl font-bold">Mengapa Memilih Ecotani?</h2>
          <p className="text-gray-600 mt-2">Platform terintegrasi yang inovatif bagi para pahlawan lingkungan dan komunitas.</p>
          <div className="grid grid-cols-2 gap-5 mt-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-ecotani-green mb-2">Daur Ulang Mudah</h3>
              <p className="text-sm text-gray-600">Fitur inovatif dan platform yang ramah pengguna, memudahkan Anda untuk melakukan daur ulang.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-ecotani-green mb-2">Ramah Lingkungan</h3>
              <p className="text-sm text-gray-600">Mendukung gerakan hijau dan membantu mengurangi jejak karbon melalui daur ulang.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-ecotani-green mb-2">Komunitas Aktif</h3>
              <p className="text-sm text-gray-600">Bergabung dengan komunitas yang punya minat sama dalam menjaga lingkungan.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-ecotani-green mb-2">Beyond Green</h3>
              <p className="text-sm text-gray-600">Mendukung riset ilmiah dan edukasi lingkungan sebagai bagian dari misi kami.</p>
            </div>
          </div>
        </section>

        <section className="text-center mt-12">
          <h2 className="text-3xl font-bold">Produk Limbah Unggulan</h2>
          <div className="grid grid-cols-3 gap-5 mt-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <CitizenScience />
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <HelpCenter />
        </div>

        <section className="bg-ecotani-green text-white text-center py-12 rounded-2xl -mx-12 my-12">
          <h2 className="text-3xl font-bold">Bergabunglah dengan Komunitas Ecotani</h2>
          <p className="text-lg mt-2">Platform untuk mengubah limbah menjadi pendapatan dan menciptakan lingkungan yang lebih hijau dan ekonomi yang lebih berkelanjutan.</p>
          <button className="bg-white text-ecotani-green py-3 px-8 rounded-full font-semibold mt-6 transition-colors hover:bg-gray-200">Bergabung Sekarang</button>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
