// src/pages/user/CheckoutPage.jsx

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/user/Footer';
import AuthContext from '../../context/AuthContext'; // Import AuthContext

const CheckoutPage = ({ cartItems }) => {
    // Ambil data login dari context
    const { isLoggedIn, userName } = useContext(AuthContext);

    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('transfer');
    const [shippingMethod, setShippingMethod] = useState('reguler'); // State baru untuk metode pengiriman

    // Data dummy untuk ringkasan pesanan
    const subtotal = 9000;
    const ongkir = shippingMethod === 'reguler' ? 15000 : 
                   shippingMethod === 'express' ? 25000 : 
                   shippingMethod === 'sameday' ? 35000 : 0; // Ongkir dinamis
    const total = subtotal + ongkir;

    const handleCheckout = () => {
        if (paymentMethod === 'transfer') {
            navigate('/payment-upload');
        } else {
            // Logika untuk metode pembayaran selain transfer
            navigate('/tracking', { state: { paymentMethod, shippingMethod } }); // Tambahkan shippingMethod
        }
    };

    return (
        <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
            {/* Kontainer utama untuk konten halaman */}
            <div className="container mx-auto px-12 py-8 flex-grow">
                
                {/* Card judul halaman */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex items-center gap-4 mb-8">
                    <img 
                        src="/src/assets/logo.png"
                        alt="Ecotani Logo" 
                        className="h-8" 
                    />
                    <div className="w-[1px] h-8 bg-gray-300 mx-2"></div>
                    <h1 className="text-2xl font-bold text-[#43703a]">
                        Checkout Produk
                    </h1>
                </div>
                
                <div className="space-y-6"> {/* Menggunakan space-y-6 untuk jarak antar card */}
                    {/* Bagian Alamat Pengiriman */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-4">Alamat Pengiriman</h2>
                        <div className="space-y-4">
                            <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
                                <div>
                                    <h3 className="font-semibold">Alif Dzaka | +62 123 456 789</h3>
                                    <p className="text-sm text-gray-600">Jalan Bogor No. 123, RT 01 RW 12, Jawa Barat, 12345</p>
                                </div>
                                <button className="text-[#43703a] text-sm font-semibold hover:text-[#365e32]">Ubah Alamat</button>
                            </div>
                        </div>
                    </div>

                    {/* Bagian Metode Pengiriman - Disesuaikan dengan desain baru */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-4">Metode Pengiriman</h2>
                        <div className="space-y-3"> {/* Menggunakan space-y-3 untuk jarak antar opsi pengiriman */}
                            {/* Opsi Reguler */}
                            <div 
                                className={`p-4 rounded-lg cursor-pointer flex justify-between items-center transition-colors 
                                            ${shippingMethod === 'reguler' ? 'bg-[#43703a]/10 border-2 border-[#43703a]' : 'bg-gray-100 border border-gray-200'}`}
                                onClick={() => setShippingMethod('reguler')}
                            >
                                <div className="flex items-center">
                                    <input 
                                        type="radio" 
                                        name="shipping" 
                                        checked={shippingMethod === 'reguler'} 
                                        readOnly 
                                        className="w-5 h-5 accent-[#43703a] mr-3" // Menggunakan accent untuk warna radio button
                                    />
                                    <div>
                                        <p className="font-semibold text-gray-800">Reguler</p>
                                        <p className="text-sm text-gray-600">3-5 hari kerja</p>
                                    </div>
                                </div>
                                <span className="font-bold text-gray-800">Rp15.000</span>
                            </div>

                            {/* Opsi Express */}
                            <div 
                                className={`p-4 rounded-lg cursor-pointer flex justify-between items-center transition-colors 
                                            ${shippingMethod === 'express' ? 'bg-[#43703a]/10 border-2 border-[#43703a]' : 'bg-gray-100 border border-gray-200'}`}
                                onClick={() => setShippingMethod('express')}
                            >
                                <div className="flex items-center">
                                    <input 
                                        type="radio" 
                                        name="shipping" 
                                        checked={shippingMethod === 'express'} 
                                        readOnly 
                                        className="w-5 h-5 accent-[#43703a] mr-3"
                                    />
                                    <div>
                                        <p className="font-semibold text-gray-800">Express</p>
                                        <p className="text-sm text-gray-600">1-2 hari kerja</p>
                                    </div>
                                </div>
                                <span className="font-bold text-gray-800">Rp25.000</span>
                            </div>

                            {/* Opsi Same Day */}
                            <div 
                                className={`p-4 rounded-lg cursor-pointer flex justify-between items-center transition-colors 
                                            ${shippingMethod === 'sameday' ? 'bg-[#43703a]/10 border-2 border-[#43703a]' : 'bg-gray-100 border border-gray-200'}`}
                                onClick={() => setShippingMethod('sameday')}
                            >
                                <div className="flex items-center">
                                    <input 
                                        type="radio" 
                                        name="shipping" 
                                        checked={shippingMethod === 'sameday'} 
                                        readOnly 
                                        className="w-5 h-5 accent-[#43703a] mr-3"
                                    />
                                    <div>
                                        <p className="font-semibold text-gray-800">Same Day</p>
                                        <p className="text-sm text-gray-600">Hari ini juga</p>
                                    </div>
                                </div>
                                <span className="font-bold text-gray-800">Rp35.000</span>
                            </div>
                        </div>
                    </div>

                    {/* Bagian Metode Pembayaran */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-4">Metode Pembayaran</h2>
                        <div className="space-y-4">
                            <div 
                                className={`p-4 rounded-lg cursor-pointer transition-colors ${paymentMethod === 'transfer' ? 'bg-[#43703a]/10 border-2 border-[#43703a]' : 'bg-gray-100'}`}
                                onClick={() => setPaymentMethod('transfer')}
                            >
                                <div className="flex items-center">
                                    <input type="radio" checked={paymentMethod === 'transfer'} readOnly className="radio radio-success mr-2" />
                                    <span className="font-semibold">Transfer Bank</span>
                                </div>
                                <p className="text-sm text-gray-600 ml-6 mt-1">Pembeli melakukan pembayaran melalui transfer bank (admin ditanggung pembeli).</p>
                            </div>
                            <div 
                                className={`p-4 rounded-lg cursor-pointer transition-colors ${paymentMethod === 'cod' ? 'bg-[#43703a]/10 border-2 border-[#43703a]' : 'bg-gray-100'}`}
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
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-4">Catatan Pesanan (Opsional)</h2>
                        <textarea 
                            className="w-full h-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#43703a]"
                            placeholder="Tambahkan catatan untuk penjual tentang pesanan Anda."
                        ></textarea>
                    </div>

                    {/* Bagian Pesanan Anda */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-4">Pesanan Anda (1 item)</h2>
                        <div className="flex items-center gap-4 border-b border-gray-200 pb-4 mb-4">
                            <img src="/src/assets/detail-product.png" alt="Botol Plastik" className="w-20 h-20 object-cover rounded-lg" />
                            <div className="flex-grow">
                                <p className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium inline-block mb-1">Plastik</p>
                                <h3 className="font-semibold">Botol Plastik</h3>
                                <p className="text-sm text-gray-600">Penjual: Jannah Kurniawati</p>
                                <p className="text-sm text-gray-600">Rp3.000/100 gram</p>
                            </div>
                            <p className="font-semibold text-lg text-[#43703a]">Rp9.000</p>
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
                            <span className="text-[#43703a]">Rp{total.toLocaleString('id-ID')}</span>
                        </div>
                        <button 
                            onClick={handleCheckout}
                            className="w-full py-3 mt-6 rounded-full bg-[#43703a] text-white font-semibold hover:bg-[#365e32] transition-colors"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default CheckoutPage;