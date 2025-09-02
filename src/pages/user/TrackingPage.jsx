// src/pages/user/TrackingPage.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/user/Navbar';
import Footer from '../../components/user/Footer';

const TrackingPage = ({ isLoggedIn, userName, cartItems }) => {
    // Ambil data state dari halaman sebelumnya
    const location = useLocation();
    const paymentMethod = location.state?.paymentMethod || 'transfer'; // Default ke 'transfer' jika tidak ada data

    // Data dummy untuk pesanan
    const orderData = {
        nomorPesanan: 'ECT-2025-00001',
        tanggalPesanan: '31 Agustus 2025',
        metodePengiriman: 'Reguler - JNE',
        subtotal: 9000,
        ongkosKirim: 15000,
        totalPembayaran: 24000,
        item: {
            name: 'Botol Plastik',
            price: 'Rp3.000/100 gram',
            seller: 'Jannah Kurniawati',
            image: '/src/assets/detail-product.png',
            tag: 'Plastik'
        }
    };

    return (
        <div className="font-sans">
            <Navbar isLoggedIn={isLoggedIn} userName={userName} cartItems={cartItems} />
            <main className="container mx-auto px-12 py-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Lacak Pesanan</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Kolom Kiri: Riwayat Tracking */}
                    <div className="md:col-span-2">
                        {/* Status Saat Ini */}
                        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                            <h2 className="text-xl font-bold mb-2">Dalam Perjalanan</h2>
                            <p className="text-sm text-gray-600 mb-4">Estimasi tiba: 05 September 2025</p>
                            <p className="font-semibold text-gray-800">Nomor Resi JNE</p>
                            <p className="text-ecotani-green font-bold text-lg">JNE 123456789</p>
                        </div>
                        
                        {/* Riwayat Tracking - Logika Kondisional */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-4">Riwayat Tracking</h2>
                            <ul className="relative border-l border-gray-300 ml-4">
                                {/* Pesanan Diajukan - Hanya untuk Transfer */}
                                {paymentMethod === 'transfer' && (
                                    <li className="mb-4 ml-6 relative">
                                        <div className="absolute w-4 h-4 bg-gray-400 rounded-full -left-2 top-0 transform -translate-x-1/2"></div>
                                        <div className="p-2 -ml-2">
                                            <p className="font-semibold text-gray-800">Pesanan Diajukan <span className="text-sm text-gray-500 font-normal">31 Agustus 2025</span></p>
                                            <p className="text-sm text-gray-600">Menunggu pembayaran dikonfirmasi.</p>
                                        </div>
                                    </li>
                                )}
                                {/* Pesanan Dikonfirmasi - Selalu Tampil (kecuali status paling awal) */}
                                <li className="mb-4 ml-6 relative">
                                    <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-2 top-0 transform -translate-x-1/2"></div>
                                    <div className="p-2 -ml-2">
                                        <p className="font-semibold text-gray-800">Pesanan Dikonfirmasi <span className="text-sm text-gray-500 font-normal">31 Agustus 2025</span></p>
                                        <p className="text-sm text-gray-600">Pesanan dikonfirmasi penjual dan mulai dikemas. Klaten, Jawa Tengah</p>
                                    </div>
                                </li>
                                {/* ... Langkah-langkah tracking lainnya */}
                            </ul>
                        </div>
                    </div>

                    {/* Kolom Kanan: Detail Pesanan */}
                    <div className="md:col-span-1">
                        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                            <h2 className="text-xl font-bold mb-4">Detail Pesanan</h2>
                            <div className="space-y-2 text-gray-700">
                                <div className="flex justify-between"><span>Nomor Pesanan</span><span className="font-semibold">{orderData.nomorPesanan}</span></div>
                                <div className="flex justify-between"><span>Tanggal Pesanan</span><span className="font-semibold">{orderData.tanggalPesanan}</span></div>
                                <div className="flex justify-between"><span>Metode Pengiriman</span><span className="font-semibold">{orderData.metodePengiriman}</span></div>
                            </div>
                            <div className="border-t border-gray-200 mt-4 pt-4 space-y-2 text-gray-700">
                                <div className="flex justify-between"><span>Subtotal</span><span>Rp{orderData.subtotal.toLocaleString('id-ID')}</span></div>
                                <div className="flex justify-between"><span>Ongkos Kirim</span><span>Rp{orderData.ongkosKirim.toLocaleString('id-ID')}</span></div>
                                <div className="flex justify-between"><span>Biaya Admin</span><span>Kosek</span></div>
                            </div>
                            <div className="flex justify-between text-lg font-bold border-t border-gray-300 mt-4 pt-4">
                                <span>Total Pembayaran</span>
                                <span className="text-ecotani-green">Rp{orderData.totalPembayaran.toLocaleString('id-ID')}</span>
                            </div>
                        </div>

                        {/* Item Pesanan */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-4">Item Pesanan</h2>
                            <div className="flex items-center gap-4">
                                <img src={orderData.item.image} alt={orderData.item.name} className="w-20 h-20 object-cover rounded-lg" />
                                <div className="flex-grow">
                                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">{orderData.item.tag}</span>
                                    <h3 className="font-semibold mt-1">{orderData.item.name}</h3>
                                    <p className="text-sm text-gray-600">Penjual: {orderData.item.seller}</p>
                                    <p className="text-sm text-gray-600">{orderData.item.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TrackingPage;