import React, { useState } from 'react';
import Navbar from '../../components/user/Navbar';
import Footer from '../../components/user/Footer';
import ChatAI from '../../components/user/ChatAi'; // Import komponen ChatAI

const HomePage = () => {
  // Untuk mengubah tampilan navbar menjadi "Hai, Alif", ubah nilai isLoggedIn menjadi true
  const isLoggedIn = false; 
  // State untuk mengontrol visibilitas chat AI
  const [isChatOpen, setIsChatOpen] = useState(false);

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

  return (
    <div className="overflow-x-hidden relative font-sans">
      <Navbar isLoggedIn={isLoggedIn} />
      
      {/* Zanu Mascot */}
      <div
        className="fixed bottom-5 right-5 z-50 cursor-pointer transition-transform duration-300 hover:scale-110"
        onClick={toggleChat} // Tambahkan onClick handler di sini
      >
        <img src="/src/assets/zanu.png" alt="Zanu Mascot" className="w-20 h-auto" />
      </div>

      {/* Tampilkan ChatAI jika isChatOpen bernilai true */}
      {isChatOpen && <ChatAI onClose={toggleChat} />}

      <main className="px-12">
        {/* Hero Section */}
        <section className="bg-[url('/src/assets/hero.png')] bg-cover bg-center h-[400px] flex items-center justify-start pl-12 rounded-2xl mt-5">
          <div className="bg-white bg-opacity-80 p-8 rounded-lg max-w-lg">
            <h1 className="text-ecotani-green text-4xl font-bold mt-0">Selamat Datang di Ecotani</h1>
            <p className="text-gray-700 mt-2">Platform untuk mengubah limbah menjadi pendapatan dan menciptakan lingkungan yang lebih hijau. Bersama-sama, kita bisa membuat perubahan.</p>
            <button className="bg-ecotani-green text-white py-3 px-8 rounded-full font-semibold mt-4 transition-colors hover:bg-green-700">Jelajahi Sekarang</button>
          </div>
        </section>

        {/* Stats Section 1 */}
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

        {/* Why Choose Ecotani Section */}
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

        {/* Product Section */}
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

        {/* Environmental Research Section */}
        <section className="grid grid-cols-[1fr,1.5fr] gap-10 items-center my-20">
          <div className="bg-ecotani-green text-white p-8 rounded-lg text-center">
            <h2 className="text-4xl font-bold m-0">15</h2>
            <p className="text-sm">Proyek Aktif</p>
            <h2 className="text-4xl font-bold m-0 mt-4">3,200+</h2>
            <p className="text-sm">Peneliti Warga</p>
            <h2 className="text-4xl font-bold m-0 mt-4">120</h2>
            <p className="text-sm">Publikasi Ilmiah</p>
            <h2 className="text-4xl font-bold m-0 mt-4">50,000+</h2>
            <p className="text-sm">Data Terkumpul</p>
          </div>
          <div className="p-4">
            <h2 className="text-3xl font-bold text-ecotani-green">Berkontribusi Untuk Penelitian Lingkungan</h2>
            <p className="text-gray-700 mt-2">Bergabunglah dengan komunitas peneliti warga untuk mengumpulkan data lingkungan, belajar tentang isu ekologi, dan berkontribusi pada penelitian ilmiah yang berdampak.</p>
            <h3 className="text-xl font-bold text-ecotani-green mt-4">Apa Itu Citizen Science?</h3>
            <p className="text-gray-700 mt-2">Citizen science adalah pendekatan penelitian ilmiah yang melibatkan partisipasi masyarakat secara sukarela dalam pengumpulan data, analisis, dan interpretasi data. Dengan memanfaatkan teknologi, setiap individu bisa berkontribusi pada pemahaman isu lingkungan lokal dan global.</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="text-center my-12">
          <h2 className="text-3xl font-bold">Pusat Bantuan Ecotani</h2>
          <div className="flex justify-center mt-5">
            <button className="px-5 pb-2 text-base font-semibold text-ecotani-green border-b-2 border-ecotani-green">Panduan</button>
            <button className="px-5 pb-2 text-base font-semibold text-gray-500 hover:text-ecotani-green">Pertanyaan yang Sering Diajukan</button>
            <button className="px-5 pb-2 text-base font-semibold text-gray-500 hover:text-ecotani-green">Kontak Kami</button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md mt-5 text-left">
            <h3 className="text-xl font-bold mb-2">Pertanyaan yang Sering Diajukan</h3>
            <p className="text-sm text-gray-500 mb-5">Kami telah mengumpulkan beberapa pertanyaan yang sering diajukan oleh pengguna kami. Jika Anda tidak menemukan jawaban yang Anda cari, jangan ragu untuk menghubungi tim dukungan kami.</p>
            <div className="mb-4">
              <h4 className="font-semibold text-ecotani-green mb-1">Bagaimana cara menjual limbah di Ecotani?</h4>
              <p className="text-gray-700">Anda cukup mendaftar sebagai pengguna, lalu unggah foto dan deskripsi limbah yang ingin Anda jual. Setelah diverifikasi, Anda bisa mendapatkan penawaran dari kolektor atau bank sampah terdekat.</p>
            </div>
            <div>
              <h4 className="font-semibold text-ecotani-green mb-1">Apa saja jenis limbah yang bisa dijual?</h4>
              <p className="text-gray-700">Kami menerima berbagai jenis limbah, seperti botol plastik, kertas, kardus, kaleng, botol kaca, dan lain-lain. Pastikan limbah sudah bersih dan terpisah sesuai jenisnya.</p>
            </div>
          </div>
        </section>

        {/* Join Community Section */}
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