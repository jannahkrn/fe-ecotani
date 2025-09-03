import React, { useState } from 'react';
import { Mail, PhoneCall } from 'lucide-react';

const HelpCenter = () => {
  const [activeFaqTab, setActiveFaqTab] = useState('FAQ');

  const renderFaqContent = () => {
    switch (activeFaqTab) {
      case 'FAQ':
        return (
          <div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Pertanyaan yang Sering Diajukan</h3>
              <p className="text-sm text-gray-500 mb-5">
                Kami telah mengumpulkan beberapa pertanyaan yang sering diajukan oleh pengguna kami. Jika Anda tidak menemukan jawaban yang Anda cari, jangan ragu untuk menghubungi tim dukungan kami.
              </p>
            </div>
            
            <div className="p-4 border border-gray-300 rounded-lg text-left">
              <div>
                <h4 className="font-semibold text-ecotani-green mb-1">Apa itu Ecotani dan bagaimana acara kerjanya?</h4>
                <p className="text-gray-700">
                  Ecotani adalah platform digital yang menghubungkan penjual dan pembeli limbah untuk daur ulang. Kami memfasilitasi transaksi jual beli berbagai jenis limbah seperti plastik, kertas, logam, dan kaca dengan sistem yang aman dan terpercaya.
                </p>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-ecotani-green mb-1">Jenis limbah apa saja yang dijual di Ecotani?</h4>
                <p className="text-gray-700">
                 Anda dapat menjual berbagai jenis limbah daur ulang seperti plastik (PET, HDPE, PP), kertas (kardus, koran, HVS), logam (aluminium, besi, tembaga), dan kaca. Pastikan limbah dalam kondisi bersih dan siap daur ulang.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-ecotani-green mb-1">Apa kualitas limbah terjamin?</h4>
                <p className="text-gray-700">
                  Setiap penjual memiliki rating dan review dari pembeli sebelumnya. Kami juga menyediakan panduan standar kualitas untuk setiap jenis limbah. Jika ada masalah kualitas, Anda dapat mengajukan komplain.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-ecotani-green mb-1">Metode pembayaran apa saja yang tersedia?</h4>
                <p className="text-gray-700">
                  Kami menerima transfer bank dan pembayaran COD untuk area tertentu. Semua pembayaran diproses melalui sistem escrow untuk keamanan.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-ecotani-green mb-1">Bagaimana cara memesan limbah di Ecotani?</h4>
                <p className="text-gray-700">
                  Cari produk yang diinginkan, pilih kuantitas, lakukan negosiasi harga jika diperlukan, kemudian klik "Beli Sekarang". Pilih metode pembayaran dan pengiriman yang sesuai.
                </p>
              </div>
            </div>
          </div>
        );
      case 'Panduan':
        return (
          <div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Panduan dan Tutorial</h3>
              <p className="text-sm text-gray-500 mb-5">
                Pelajari cara menggunakan Ecotani dengan panduan lengkap kami
              </p>
            </div>
            <div className="p-4 border border-gray-300 rounded-lg">
              <div className="grid grid-cols-2 gap-5">
                <div className="p-6 rounded-lg shadow-md bg-transparent">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-gray-800">Masuk dan Daftar serta Mengatur Profile</h4>
                    <span className="text-sm text-gray-500">10 menit</span>
                  </div>
                  <p className="text-left mb-2 text-gray-600 mb-4">Tips membuat akun dan mengoptimalkan profile</p>
                  <div className="text-right">
                    <button className="text-white bg-[#43703A] py-2 px-6 rounded font-semibold transition-colors">Baca</button>
                  </div>
                </div>
                <div className="p-6 rounded-lg shadow-md bg-transparent">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-gray-800">Panduan Lengkap Menjual Produk</h4>
                    <span className="text-sm text-gray-500">10 menit</span>
                  </div>
                  <p className="text-left mb-2 text-gray-600 mb-4">Tutorial step-by-step untuk menjual limbah di Ecotani</p>
                  <div className="text-right">
                    <button className="text-white bg-[#43703A] py-2 px-6 rounded font-semibold transition-colors">Baca</button>
                  </div>
                </div>
                <div className="p-6 rounded-lg shadow-md bg-transparent">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-gray-800">Tips Membeli Limbah Berkualitas</h4>
                    <span className="text-sm text-gray-500">10 menit</span>
                  </div>
                  <p className="text-left mb-2 text-gray-600 mb-4">Cara memilih dan membeli limbah dengan kualitas terbaik</p>
                  <div className="text-right">
                    <button className="text-white bg-[#43703A] py-2 px-6 rounded font-semibold transition-colors">Baca</button>
                  </div>
                </div>
                <div className="p-6 rounded-lg shadow-md bg-transparent">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-gray-800">Cara Bergabung Citizen Science</h4>
                    <span className="text-sm text-gray-500">10 menit</span>
                  </div>
                  <p className="text-left mb-2 text-gray-600 mb-4">Panduan berpartisipasi dalam proyek penelitian lingkungan</p>
                  <div className="text-right">
                    <button className="text-white bg-[#43703A] py-2 px-6 rounded font-semibold transition-colors">Baca</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Kontak Support':
        return (
          <div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Hubungi Tim Support</h3>
              <p className="text-sm text-gray-500 mb-5">
                Pilih metode yang paling nyaman untuk mendapatkan bantuan
              </p>
            </div>
            <div className="p-4 border border-gray-300 rounded-lg">
              <div className="grid grid-cols-2 gap-5">
                <div className="p-6 rounded-lg shadow-md bg-transparent text-center">
                  <div className="flex justify-center items-center mb-2">
                    <Mail className="h-8 w-8 text-ecotani-green" />
                  </div>
                  <h4 className="font-semibold text-gray-800">Email Support</h4>
                  <p className="text-sm text-gray-600">Kirim email untuk pertanyaan detail.</p>
                  <p className="text-sm text-gray-500 mt-2">Senin - Jum'at</p>
                  <p className="text-sm font-semibold text-ecotani-green">Response Time: &lt;24 jam</p>
                  <button className="w-full py-2 px-6 rounded-full bg-ecotani-green text-white font-semibold transition-colors hover:bg-green-700 mt-4">Kirim Email</button>
                </div>
                <div className="p-6 rounded-lg shadow-md bg-transparent text-center">
                  <div className="flex justify-center items-center mb-2">
                    <PhoneCall className="h-8 w-8 text-ecotani-green" />
                  </div>
                  <h4 className="font-semibold text-gray-800">Telepon</h4>
                  <p className="text-sm text-gray-600">Hubungi hotline customer service</p>
                  <p className="text-sm text-gray-500 mt-2">08:00 - 17:00</p>
                  <p className="text-sm font-semibold text-ecotani-green">Response Time: Langsung</p>
                  <button className="w-full py-2 px-6 rounded-full bg-ecotani-green text-white font-semibold transition-colors hover:bg-green-700 mt-4">Hubungi Sekarang</button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Buat Tiket':
        return (
          <div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Buat Tiket Support</h3>
              <p className="text-sm text-gray-500 mb-6">
                Jelaskan masalah anda secara detail dan tim kami akan segera membantu
              </p>
            </div>
            <div className="p-4 border border-gray-300 rounded-lg text-left">
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
                <button className="bg-[#43703A] text-white py-2 px-6 rounded-sm font-semibold ">Kirim Tiket</button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="text-center bg-transparent">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Pusat Bantuan <span className="text-[#43703A]">Ecotani</span>
      </h2>
      <p className="text-gray-600 mt-2">Dapatkan jawaban untuk pertanyaan Anda, tutorial, dan dukungan dari tim kami.</p>
      <div className="flex justify-center gap-20 mt-5">
        {['FAQ', 'Panduan', 'Kontak Support', 'Buat Tiket'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveFaqTab(tab)}
            className={`text-base font-semibold transition-all duration-300
              ${
                activeFaqTab === tab
                  ? 'bg-[#47241C] text-white py-2 px-20 rounded-full shadow-md'
                  : 'text-[#47241C]'
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-8 mt-5 bg-transparent">
        {renderFaqContent()}
      </div>
    </div>
  );
};

export default HelpCenter;