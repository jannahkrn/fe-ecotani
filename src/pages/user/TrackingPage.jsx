// src/pages/user/TrackingPage.jsx

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
    const [message, setMessage] = useState(''); // Tambahkan state untuk message

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
                            {/* Perubahan di sini: Pindahkan garis vertikal ke div yang lebih spesifik */}
                            <div className="relative pl-6 space-y-6"> {/* Tambahkan padding kiri di sini */}
                                {trackingHistory.map((track, index) => {
                                    const isInitialStatus = track.status === "Pesanan Diajukan";
                                    const bulletColorClass = 
                                        paymentMethod === 'transfer' && isInitialStatus
                                            ? 'bg-[#43703a]' // Warna hijau Ecotani
                                            : paymentMethod === 'transfer' && !isInitialStatus
                                                ? 'bg-gray-400'
                                                : 'bg-[#43703a]'; // Warna hijau Ecotani

                                    const isLastItem = index === trackingHistory.length - 1;
                                    
                                    return (
                                        <div key={index} className="relative pb-6 last:pb-0"> {/* Tambahkan padding bawah untuk jarak antar item, hilangkan di item terakhir */}
                                            {/* Garis vertikal antara bulat, kecuali yang terakhir */}
                                            {!isLastItem && (
                                                <div className="absolute left-2.5 top-4 bottom-0 w-0.5 bg-gray-200"></div>
                                            )}
                                            {/* Bulat tracking */}
                                            <div className="absolute left-0 top-0 w-5 h-5 rounded-full border-2 border-white z-10 flex items-center justify-center">
                                                <div className={`w-3 h-3 rounded-full ${bulletColorClass}`}></div> {/* Bulat dalam yang lebih kecil */}
                                            </div>

                                            <div className="ml-6 flex justify-between items-start w-full"> {/* Geser konten ke kanan agar tidak bertabrakan dengan bulat */}
                                                <div>
                                                    <h3 className="font-semibold text-gray-800">{track.status}</h3>
                                                    <p className="text-sm text-gray-500">{track.date}</p>
                                                    <p className="text-sm text-gray-600">{track.location}</p>
                                                </div>
                                                {paymentMethod === 'cod' && isLastItem && (
                                                    isOrderReceived ? (
                                                        <p className="text-green-600 font-semibold text-right whitespace-nowrap">Pesanan Diterima!</p>
                                                    ) : (
                                                        <button
                                                            onClick={handleOrderReceived}
                                                            className="bg-[#43703a] text-white py-2 px-6 rounded-full font-semibold hover:bg-green-700 transition-colors whitespace-nowrap"
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
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <img src="/src/assets/detail-product.png" alt="Botol Plastik" className="w-20 h-20 object-cover rounded-lg" />
                            <div>
                                <p className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium inline-block mb-1">Plastik</p>
                                <h3 className="font-semibold">Botol Plastik</h3>
                                <p className="text-sm text-gray-600">Penjual: Jannah Kurniawati</p>
                                <p className="text-sm text-gray-600">Rp3.000/100 gram</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-semibold text-lg text-[#43703a]">Rp9.000</p>

                            {/* Tombol Beri Ulasan dan Chat Penjual muncul di sini */}
                            {paymentMethod === 'cod' && isOrderReceived && (
                                <div className="flex gap-2 mt-2">
                                    <button
                                        onClick={handleReviewClick}
                                        className="flex-1 bg-gray-200 text-gray-800 py-2 px-6 rounded-full font-semibold hover:bg-gray-300 transition-colors"
                                    >
                                        Beri Ulasan
                                    </button>
                                    <button className="flex-1 bg-[#43703a] text-white py-2 px-6 rounded-full font-semibold hover:bg-green-700 transition-colors">
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