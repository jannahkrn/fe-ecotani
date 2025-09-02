// src/pages/user/CheckoutPage.jsx

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/user/Navbar';
import Footer from '../../components/user/Footer';
import AuthContext from '../../context/AuthContext'; // Import AuthContext

const CheckoutPage = ({ cartItems }) => {
    // Ambil data login dari context
    const { isLoggedIn, userName } = useContext(AuthContext);

    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('transfer');

    // Data dummy untuk ringkasan pesanan
    const subtotal = 9000;
    const ongkir = 15000;
    const total = subtotal + ongkir;

    const handleCheckout = () => {
        if (paymentMethod === 'transfer') {
            navigate('/payment-upload');
        } else {
            // Logika untuk metode pembayaran selain transfer
            navigate('/tracking', { state: { paymentMethod } });
        }
    };

    return (
        <div className="font-sans">
            <Navbar isLoggedIn={isLoggedIn} userName={userName} cartItems={cartItems} />
            <main className="container mx-auto px-12 py-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Checkout Produk</h1>

                {/* Bagian Alamat Pengiriman */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h2 className="text-xl font-bold mb-4">Alamat Pengiriman</h2>
                    <div className="space-y-4">
                        <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
                            <div>
                                <h3 className="font-semibold">Alif Dzaka | +62 123 456 789</h3>
                                <p className="text-sm text-gray-600">Jalan Bogor No. 123, RT 01 RW 12, Jawa Barat, 12345</p>
                            </div>
                            <button className="text-ecotani-green text-sm font-semibold hover:text-green-700">Ubah Alamat</button>
                        </div>
                    </div>
                </div>

                {/* Bagian Metode Pengiriman */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h2 className="text-xl font-bold mb-4">Metode Pengiriman</h2>
                    <div className="space-y-4">
                        <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
                            <p className="font-semibold">Reguler</p>
                            <p className="text-gray-600">Rp15.000</p>
                        </div>
                    </div>
                </div>

                {/* Bagian Metode Pembayaran */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h2 className="text-xl font-bold mb-4">Metode Pembayaran</h2>
                    <div className="space-y-4">
                        <div 
                            className={`p-4 rounded-lg cursor-pointer ${paymentMethod === 'transfer' ? 'bg-ecotani-green/10 border-2 border-ecotani-green' : 'bg-gray-100'}`}
                            onClick={() => setPaymentMethod('transfer')}
                        >
                            <div className="flex items-center">
                                <input type="radio" checked={paymentMethod === 'transfer'} readOnly className="radio radio-success mr-2" />
                                <span className="font-semibold">Transfer Bank</span>
                            </div>
                            <p className="text-sm text-gray-600 ml-6 mt-1">Pembeli melakukan pembayaran melalui transfer bank (admin ditanggung pembeli).</p>
                        </div>
                        <div 
                            className={`p-4 rounded-lg cursor-pointer ${paymentMethod === 'cod' ? 'bg-ecotani-green/10 border-2 border-ecotani-green' : 'bg-gray-100'}`}
                            onClick={() => setPaymentMethod('cod')}
                        >
                            <div className="flex items-center">
                                <input type="radio" checked={paymentMethod === 'cod'} readOnly className="radio radio-success mr-2" />
                                <span className="font-semibold">COD (Cash on Delivery)</span>
                            </div>
                            <p className="text-sm text-gray-600 ml-6 mt-1">Pembeli melakukan pembayaran secara langsung kepada kurir saat pesanan diterima di alamat tujuan.</p>
                        </div>
                    </div>
                </div>

                {/* Bagian Catatan Pesanan */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h2 className="text-xl font-bold mb-4">Catatan Pesanan (Opsional)</h2>
                    <textarea 
                        className="w-full h-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ecotani-green"
                        placeholder="Tambahkan catatan untuk penjual tentang pesanan Anda."
                    ></textarea>
                </div>

                {/* Bagian Pesanan Anda */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h2 className="text-xl font-bold mb-4">Pesanan Anda (1 item)</h2>
                    <div className="flex items-center gap-4 border-b border-gray-200 pb-4 mb-4">
                        <img src="/src/assets/detail-product.png" alt="Botol Plastik" className="w-20 h-20 object-cover rounded-lg" />
                        <div className="flex-grow">
                            <p className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium inline-block mb-1">Plastik</p>
                            <h3 className="font-semibold">Botol Plastik</h3>
                            <p className="text-sm text-gray-600">Penjual: Jannah Kurniawati</p>
                            <p className="text-sm text-gray-600">Rp3.000/100 gram</p>
                        </div>
                        <p className="font-semibold text-lg text-ecotani-green">Rp9.000</p>
                    </div>
                </div>

                {/* Ringkasan Pembayaran */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4">Ringkasan Pembayaran</h2>
                    <div className="text-gray-600 space-y-2 mb-4">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>Rp{subtotal.toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Ongkos Kirim</span>
                            <span>Rp{ongkir.toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Biaya Admin</span>
                            <span>{/* Masukkan biaya admin jika ada */}</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center text-lg font-bold border-t border-gray-300 pt-4">
                        <span>Total Pembayaran</span>
                        <span className="text-ecotani-green">Rp{total.toLocaleString('id-ID')}</span>
                    </div>
                    <button 
                        onClick={handleCheckout}
                        className="w-full py-3 mt-6 rounded-full bg-ecotani-green text-white font-semibold hover:bg-green-700 transition-colors"
                    >
                        Checkout
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CheckoutPage;