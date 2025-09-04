import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../components/user/Footer';
import AuthContext from '../../context/AuthContext';

const TrackingPage = () => {
  const { isLoggedIn, userName } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const { paymentMethod } = location.state || { paymentMethod: 'transfer' };

  const [isOrderReceived, setIsOrderReceived] = useState(false);
  const [message, setMessage] = useState('');

  const handleOrderReceived = () => {
    setIsOrderReceived(true);
    setMessage("Terima kasih telah mengonfirmasi pesanan! Silakan berikan ulasan Anda.");
  };

  const handleReviewClick = () => {
    navigate('/review');
  };

  const trackingHistory = [
    {
      status: "Pesanan Diajukan",
      date: "31 Agustus 2025",
      location: "Klaten, Jawa Tengah"
    },
    {
      status: "Pesanan Dikonfirmasi",
      date: "31 Agustus 2025",
      location: "Pesanan dikonfirmasi penjual dan mulai dikemas. Klaten, Jawa Tengah"
    },
    {
      status: "Pesanan Dikirim",
      date: "01 September 2025",
      location: "Pesanan telah diserahkan ke kurir JNE. Klaten, Jawa Tengah"
    },
    {
      status: "Dalam Perjalanan",
      date: "03 September 2025",
      location: "Paket sedang dalam perjalanan menuju alamat tujuan. Jakarta, Jakarta Pusat"
    },
    {
      status: "Pesanan Diterima",
      date: "05 September 2025",
      location: "Pesanan telah diterima oleh pembeli. Bogor, Jawa Barat"
    }
  ];

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <div className="container mx-auto px-12 py-8 flex-grow">
        {message && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{message}</span>
          </div>
        )}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex items-center gap-4 mb-8">
          <img 
            src="src/assets/logo.png"
            alt="Ecotani Logo" 
            className="h-8" 
          />
          <div className="w-[1px] h-8 bg-gray-300 mx-2"></div>
          <h1 className="text-2xl font-bold text-[#43703a]">
            Lacak Pesanan
          </h1>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Kolom Kiri */}
          <div className="col-span-2 space-y-8">
            {/* Status Pesanan */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Status Pesanan</h2>
              {paymentMethod === 'transfer' ? (
                <>
                  <p className="text-gray-600 mb-2">Pesanan Anda sedang menunggu konfirmasi pembayaran dari penjual.</p>
                  <p className="text-gray-600 font-semibold mt-4">Nomor Pesanan</p>
                  <p className="text-[#43703a] text-lg font-bold">ECT-2025-00001</p>
                </>
              ) : (
                <>
                  <p className="text-gray-600 mb-2">Estimasi tiba: 05 September 2025</p>
                  <p className="text-gray-600 font-semibold">Nomor Resi JNE</p>
                  <p className="text-[#43703a] text-lg font-bold">JNE 123456789</p>
                </>
              )}
            </div>
            
            {/* Riwayat Tracking */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Riwayat Tracking</h2>
              <div className="relative pl-6 space-y-6">
                {trackingHistory.map((track, index) => {
                  const isInitialStatus = track.status === "Pesanan Diajukan";
                  const bulletColorClass = 
                    paymentMethod === 'transfer' && isInitialStatus
                      ? 'bg-[#43703a]'
                      : paymentMethod === 'transfer' && !isInitialStatus
                        ? 'bg-gray-400'
                        : 'bg-[#43703a]';

                  const isLastItem = index === trackingHistory.length - 1;
                  
                  return (
                    <div key={index} className="relative pb-6 last:pb-0">
                      {!isLastItem && (
                        <div className="absolute left-2.5 top-4 bottom-0 w-0.5 bg-gray-200"></div>
                      )}
                      <div className="absolute left-0 top-0 w-5 h-5 rounded-full border-2 border-white z-10 flex items-center justify-center">
                        <div className={`w-3 h-3 rounded-full ${bulletColorClass}`}></div>
                      </div>

                      <div className="ml-6 flex justify-between items-start w-full">
                        <div>
                          <h3 className="font-semibold text-gray-800">{track.status}</h3>
                          <p className="text-sm text-gray-500">{track.date}</p>
                          <p className="text-sm text-gray-600">{track.location}</p>
                        </div>
                        {paymentMethod === 'cod' && isLastItem && (
                          isOrderReceived ? (
                            <p className="text-[#43703a] font-semibold text-right whitespace-nowrap mt-10">Pesanan Diterima!</p>
                          ) : (
                            <button
                              onClick={handleOrderReceived}
                              className="bg-[#43703a] text-white py-2 px-6 rounded-full font-semibold hover:bg-[#345a2e] transition-colors whitespace-nowrap"
                            >
                              Pesanan Diterima
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Kolom Kanan */}
          <div className="col-span-1 space-y-8">
            {/* Alamat Pengiriman */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Alamat Pengiriman</h2>
              <h3 className="font-semibold text-gray-800">Alif Dzaka | +62 123 456 789</h3>
              <p className="text-gray-600">Jalan Bogor No. 123, RT 01 RW 12, Jawa Barat, 12345</p>
            </div>

            {/* Butuh Bantuan */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Butuh Bantuan?</h2>
              <p className="text-gray-600">
                Jika ada masalah dengan pesanan Anda, silakan hubungi customer service kami. Zanu selalu ada disekitar Anda.
              </p>
            </div>
            
            {/* Detail Pesanan */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Detail Pesanan</h2>
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <p className="font-semibold">Nomor Pesanan</p>
                <p>ECT-2025-00001</p>
                <p className="font-semibold">Tanggal Pesanan</p>
                <p>31 Agustus 2025</p>
                <p className="font-semibold">Metode Pengiriman</p>
                <p>Reguler - JNE</p>
                <p className="font-semibold">Subtotal</p>
                <p>Rp9.000</p>
                <p className="font-semibold">Ongkos Kirim</p>
                <p>Rp15.000</p>
                <p className="font-semibold">Biaya Admin</p>
                <p>Kosek</p>
                <p className="font-semibold">Total Pembayaran</p>
                <p>Kosek</p>
              </div>
            </div>
          </div>
        </div>

        {/* Item Pesanan */}
        <div className="bg-white p-8 rounded-lg shadow-md mt-8">
          <h2 className="text-xl font-bold mb-4">Item Pesanan</h2>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-start gap-6 relative">
            {/* Gambar produk */}
            <div className="relative border-2 border-blue-500 rounded-lg p-1">
              <img 
                src="/src/assets/detail-product.png" 
                alt="Botol Plastik" 
                className="w-32 h-32 object-cover rounded-md" 
              />
            </div>

            {/* Detail produk */}
            <div className="flex-grow flex flex-col justify-between h-[136px]">
              <div>
                <span className="bg-[#43703a] text-white text-xs font-medium px-2 py-1 rounded-sm w-fit mb-2 inline-block">
                  Anorganik
                </span>
                <h2 className="text-xl font-bold text-[#43703a] mt-1">Botol Plastik</h2>
                <p className="text-gray-500 text-sm mt-1">Penjual: Jannah Kurniawati</p>
                <p className="text-lg font-semibold mt-1 text-[#43703a]">Rp3.000/100 gram</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-gray-600">Jumlah:</span>
                <span className="font-semibold">3</span>
              </div>
            </div>

            {/* Harga total + tombol ulasan/chat */}
            <div className="flex-none flex flex-col justify-end items-end h-[136px]">
              <p className="text-xl font-bold text-[#43703a]">Rp9.000</p>

              {paymentMethod === 'cod' && isOrderReceived && (
                <div className="flex gap-3 mt-3">
                  <button
                    onClick={handleReviewClick}
                    className="bg-gray-200 text-gray-800 py-2 px-6 rounded-full font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Beri Ulasan
                  </button>
                  <button className="bg-[#43703a] text-white py-2 px-6 rounded-full font-semibold hover:bg-[#345a2e] transition-colors">
                    Chat Penjual
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TrackingPage;
