import React, { useState } from 'react';
import Navbar from '../../components/user/Navbar';
import Footer from '../../components/user/Footer';
import ChatAI from '../../components/user/ChatAi';

const HomePage = ({ isLoggedIn, userName, cartItems }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeFaqTab, setActiveFaqTab] = useState('Pertanyaan yang Sering Diajukan');
  const [activeCitizenTab, setActiveCitizenTab] = useState('Gambaran Umum');
  const [showConfirmation, setShowConfirmation] = useState(false);

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

  const handleSaveData = () => {
    // Di sini Anda bisa menambahkan logika untuk menyimpan data ke database.
    // Untuk saat ini, kita hanya akan menampilkan pesan konfirmasi.
    setShowConfirmation(true);
  };

  const renderCitizenScienceContent = () => {
    switch (activeCitizenTab) {
      case 'Gambaran Umum':
        return (
          <div>
            <h3 className="text-xl font-bold mb-2">Gambaran Umum Proyek Citizen Science</h3>
            <p className="text-gray-700 leading-relaxed">
              Proyek Citizen Science Ecotani mengajak Anda untuk menjadi bagian dari solusi lingkungan. Dengan berpartisipasi, Anda akan membantu mengumpulkan data penting tentang jenis dan jumlah limbah yang ada di komunitas Anda. Data ini sangat berharga bagi para peneliti dan ahli lingkungan untuk memahami tren polusi, mengevaluasi dampak program daur ulang, dan merumuskan kebijakan yang lebih efektif.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Partisipasi Anda, sekecil apa pun, akan memberikan dampak besar. Anda bisa menginput data sampah dari rumah, mengamati lingkungan sekitar, atau membantu memverifikasi data yang dikumpulkan oleh pengguna lain. Setiap data yang Anda berikan akan berkontribusi pada bank data ilmiah yang lebih besar dan membuka jalan bagi penemuan baru dalam ilmu lingkungan.
            </p>
          </div>
        );
      case 'Input Data Sampah':
        if (showConfirmation) {
          return (
            <div className="p-4 flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24 text-ecotani-green">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
              </svg>
              <h3 className="text-3xl font-bold mt-4 text-ecotani-green">Data Sampah Berhasil Dikirim</h3>
              <p className="text-gray-700 mt-2">Data Anda akan membantu prediksi volume sampah.</p>
            </div>
          );
        }
        return (
          <div className="p-4">
            <h3 className="text-xl font-bold mb-4">Input Data Volume Sampah</h3>
            <div className="bg-green-100 border border-green-300 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">Data yang Akan Dikumpulkan</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>Nama limbah</li>
                <li>Lokasi pengamatan: Jakarta Pusat, Menteng, Gambir, Tanah Abang, dan lain-lain</li>
                <li>Berat sampah dalam kilogram</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="wasteName">Nama Limbah</label>
                <input
                  type="text"
                  id="wasteName"
                  placeholder="Nama Limbah"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ecotani-green"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="location">Lokasi Pengamatan</label>
                <input
                  type="text"
                  id="location"
                  placeholder="Lokasi Pengamatan"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ecotani-green"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="weight">Berat Sampah (kg)</label>
              <input
                type="number"
                id="weight"
                placeholder="Berat Sampah (kg)"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ecotani-green"
              />
            </div>
            <div className="text-right">
              <button 
                onClick={handleSaveData}
                className="bg-ecotani-green text-white py-2 px-6 rounded-full font-semibold transition-colors hover:bg-green-700"
              >
                Simpan
              </button>
            </div>
          </div>
        );
      case 'Lihat Prediksi':
        return (
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex flex-col text-left">
                <h3 className="text-2xl font-bold text-gray-800">Prediksi Volume Sampah</h3>
                <p className="text-gray-600 text-sm">Prediksi volume sampah area Jabodetabekjur</p>
                <p className="text-gray-400 text-xs">1.245 data points</p>
              </div>
              <span className="bg-red-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                MENINGKAT
              </span>
            </div>

            <div className="flex justify-around items-center mt-8">
              <div className="text-center">
                <h4 className="text-5xl font-bold text-gray-800">314.5 kg</h4>
                <p className="text-gray-600 mt-1">Minggu ini</p>
              </div>
              <div className="h-20 w-px bg-gray-300"></div>
              <div className="text-center">
                <h4 className="text-5xl font-bold text-ecotani-green">345.7 kg</h4>
                <p className="text-gray-600 mt-1">Prediksi Minggu Depan</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderFaqContent = () => {
    switch (activeFaqTab) {
      case 'Panduan':
        return (
          <div>
            <h3 className="text-xl font-bold mb-2">Panduan</h3>
            <p className="text-sm text-gray-500 mb-5">
              Pelajari cara menggunakan platform Ecotani dengan panduan langkah-demi-langkah kami.
            </p>
          </div>
        );
      case 'Pertanyaan yang Sering Diajukan':
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
      case 'Kontak Kami':
        return (
          <div>
            <h3 className="text-xl font-bold mb-2">Kontak Kami</h3>
            <p className="text-sm text-gray-500 mb-5">
              Jika Anda memiliki pertanyaan lebih lanjut, tim dukungan kami siap membantu.
            </p>
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

        <div className="container mx-auto px-4 py-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Citizen Science</h2>
                <p className="text-gray-600">
                  Berpartisipasi dalam proyek-proyek penelitian lingkungan.
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-5">
              {['Gambaran Umum', 'Input Data Sampah', 'Lihat Prediksi'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveCitizenTab(tab);
                    setShowConfirmation(false);
                  }}
                  className={`px-5 pb-2 text-base font-semibold transition-colors ${
                    activeCitizenTab === tab
                      ? 'text-ecotani-green border-b-2 border-ecotani-green'
                      : 'text-gray-500 hover:text-ecotani-green'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md mt-5 text-left">
              {renderCitizenScienceContent()}
            </div>
          </div>
        </div>
        
        <section className="text-center my-12">
          <h2 className="text-3xl font-bold">Pusat Bantuan Ecotani</h2>
          <div className="flex justify-center mt-5">
            {['Panduan', 'Pertanyaan yang Sering Diajukan', 'Kontak Kami'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFaqTab(tab)}
                className={`px-5 pb-2 text-base font-semibold transition-colors ${
                  activeFaqTab === tab
                    ? 'text-ecotani-green border-b-2 border-ecotani-green'
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
