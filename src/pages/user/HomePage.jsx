import React, { useState } from 'react';
import Navbar from '../../components/user/Navbar';
import Footer from '../../components/user/Footer';
import ChatAI from '../../components/user/ChatAi';
import CitizenScience from '../../components/user/CitizenScience';

const HomePage = ({ isLoggedIn, userName, cartItems }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeFaqTab, setActiveFaqTab] = useState('FAQ');

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const products = [
    { name: 'Botol Plastik', price: 'Rp 5.000 / Kg' },
    { name: 'Kertas HVS', price: 'Rp 2.000 / Kg' },
    { name: 'Kardus', price: 'Rp 1.000 / Kg' },
    { name: 'Botol Kaca', price: 'Rp 3.000 / Kg' },
    { name: 'Kaleng Bekas', price: 'Rp 4.500 / Kg' },
    { name: 'Tutup Botol', price: 'Rp 2.500 / Kg' },
  ];

  const renderFaqContent = () => {
    switch (activeFaqTab) {
      case 'FAQ':
        return (
          <div>
            <h3 className="text-xl font-bold mb-2">Pertanyaan yang Sering Diajukan</h3>
            <p className="text-sm text-gray-500 mb-5">
              Kami telah mengumpulkan beberapa pertanyaan yang sering diajukan oleh pengguna kami. Jika Anda tidak menemukan jawaban yang Anda cari, jangan ragu untuk menghubungi tim dukungan kami.
            </p>
            <div className="mb-4">
              <h4 className="font-semibold text-ecotani-green mb-1">Bagaimana cara menjual limbah di Ecotani?</h4>
              <p className="text-gray-700">
                Anda cukup mendaftar sebagai pengguna, lalu unggah foto dan deskripsi limbah yang ingin Anda jual. Setelah diverifikasi, Anda bisa mendapatkan penawaran dari kolektor atau bank sampah terdekat.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-ecotani-green mb-1">Apa saja jenis limbah yang bisa dijual?</h4>
              <p className="text-gray-700">
                Kami menerima berbagai jenis limbah, seperti botol plastik, kertas, kardus, kaleng, botol kaca, dan lain-lain. Pastikan limbah sudah bersih dan terpisah sesuai jenisnya.
              </p>
            </div>
          </div>
        );
      case 'Panduan':
        return (
          <div>
            <h3 className="text-xl font-bold mb-2">Panduan dan Tutorial</h3>
            <p className="text-sm text-gray-500 mb-5">
              Pelajari cara menggunakan Ecotani dengan panduan lengkap kami
            </p>
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-gray-800">Masuk dan Daftar serta Mengatur Profile</h4>
                  <span className="text-sm text-gray-500">10 menit</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">Tips membuat akun dan mengoptimalkan profile</p>
                <button className="bg-ecotani-green text-white py-2 px-6 rounded-full font-semibold transition-colors hover:bg-green-700">Baca</button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-gray-800">Panduan Lengkap Menjual Produk</h4>
                  <span className="text-sm text-gray-500">10 menit</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">Tutorial step-by-step untuk menjual limbah di Ecotani</p>
                <button className="bg-ecotani-green text-white py-2 px-6 rounded-full font-semibold transition-colors hover:bg-green-700">Baca</button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-gray-800">Tips Membeli Limbah Berkualitas</h4>
                  <span className="text-sm text-gray-500">10 menit</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">Cara memilih dan membeli limbah dengan kualitas terbaik</p>
                <button className="bg-ecotani-green text-white py-2 px-6 rounded-full font-semibold transition-colors hover:bg-green-700">Baca</button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-gray-800">Cara Bergabung Citizen Science</h4>
                  <span className="text-sm text-gray-500">10 menit</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">Panduan berpartisipasi dalam proyek penelitian lingkungan</p>
                <button className="bg-ecotani-green text-white py-2 px-6 rounded-full font-semibold transition-colors hover:bg-green-700">Baca</button>
              </div>
            </div>
          </div>
        );
      case 'Kontak Support':
        return (
          <div>
            <h3 className="text-xl font-bold mb-2">Hubungi Tim Support</h3>
            <p className="text-sm text-gray-500 mb-5">
              Pilih metode yang paling nyaman untuk mendapatkan bantuan
            </p>
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white p-6 rounded-lg shadow-md border text-center">
                <div className="flex justify-center items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ecotani-green" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2.5 4A2.5 2.5 0 015 1.5h10A2.5 2.5 0 0117.5 4v12a2.5 2.5 0 01-2.5 2.5H5A2.5 2.5 0 012.5 16V4zm2.5 12h10V4H5v12zM5 4.5A.5.5 0 015.5 4h9a.5.5 0 01.5.5V16h-10V4.5z" clipRule="evenodd" />
                    <path d="M5 8.5h10v1H5v-1zM5 10.5h10v1H5v-1zM5 12.5h10v1H5v-1z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800">Email Support</h4>
                <p className="text-sm text-gray-600">Kirim email untuk pertanyaan detail.</p>
                <p className="text-sm text-gray-500 mt-2">Senin - Jum'at</p>
                <p className="text-sm font-semibold text-ecotani-green">Response Time: &lt;24 jam</p>
                <button className="w-full py-2 px-6 rounded-full bg-ecotani-green text-white font-semibold transition-colors hover:bg-green-700 mt-4">Kirim Email</button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border text-center">
                <div className="flex justify-center items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ecotani-green" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3.5C2 2.671 2.671 2 3.5 2h13C17.329 2 18 2.671 18 3.5v13c0 .829-.671 1.5-1.5 1.5h-13C2.671 18 2 17.329 2 16.5v-13zM10 15c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5z" />
                    <path fillRule="evenodd" d="M10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800">Telepon</h4>
                <p className="text-sm text-gray-600">Hubungi hotline customer service</p>
                <p className="text-sm text-gray-500 mt-2">08:00 - 17:00</p>
                <p className="text-sm font-semibold text-ecotani-green">Response Time: Langsung</p>
                <button className="w-full py-2 px-6 rounded-full bg-ecotani-green text-white font-semibold transition-colors hover:bg-green-700 mt-4">Hubungi Sekarang</button>
              </div>
            </div>
          </div>
        );
      case 'Buat Tiket':
        return (
          <div className="p-4">
            <h3 className="text-xl font-bold mb-4">Buat Tiket Support</h3>
            <p className="text-sm text-gray-500 mb-6">
              Jelaskan masalah anda secara detail dan tim kami akan segera membantu
            </p>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="fullName">Nama Lengkap</label>
              <input type="text" id="fullName" placeholder="Jannah Kurniawati" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ecotani-green" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="janjun@example.com" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ecotani-green" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="subject">Subjek</label>
              <input type="text" id="subject" placeholder="Jelaskan masalah secara singkat" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ecotani-green" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="description">Deskripsi Lengkap</label>
              <textarea id="description" rows="4" placeholder="Jelaskan masalah secara detail, termasuk langkah-langkah yang telah Anda coba." className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ecotani-green"></textarea>
            </div>
            <div className="text-right">
              <button className="bg-ecotani-green text-white py-2 px-6 rounded-full font-semibold transition-colors hover:bg-green-700">Kirim Tiket</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="overflow-x-hidden relative font-sans bg-gray-100 min-h-screen flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} userName={userName} cartItems={cartItems} />

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
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg p-5 shadow-md">
                <div className="bg-gray-200 h-52 rounded-lg mb-4">
                  {/* Ganti dengan gambar produk asli */}
                </div>
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-ecotani-green font-semibold mb-4">{product.price}</p>
                <button className="w-full py-3 px-5 rounded-full bg-ecotani-green text-white font-semibold transition-colors hover:bg-green-700">Beli Sekarang</button>
              </div>
            ))}
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <CitizenScience />
        </div>
        
        <section className="text-center my-12">
          <h2 className="text-3xl font-bold">Pusat Bantuan Ecotani</h2>
          <div className="flex justify-center mt-5">
            {['FAQ', 'Panduan', 'Kontak Support', 'Buat Tiket'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFaqTab(tab)}
                className={`px-5 py-2 rounded-full font-semibold transition-colors ${
                  activeFaqTab === tab
                    ? 'bg-ecotani-dark-green text-white'
                    : 'text-gray-500 hover:text-ecotani-green'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md mt-5 text-left">
            {renderFaqContent()}
          </div>
        </section>

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
