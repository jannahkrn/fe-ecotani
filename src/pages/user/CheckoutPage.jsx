// src/pages/user/CheckoutPage.jsx

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/user/Footer';

// Data keranjang dummy
const mockCartItems = [
    {
        id: 1,
        name: 'Botol Plastik',
        price: 3000,
        quantity: 2,
        image: 'https://placehold.co/600x400/E5E7EB/24292e?text=Product+Image',
        category: 'Plastik',
        unit: 'kg'
    },
    {
        id: 2,
        name: 'Kertas HVS',
        price: 5000,
        quantity: 1,
        image: 'https://placehold.co/600x400/E5E7EB/24292e?text=Product+Image',
        category: 'Kertas',
        unit: 'kg'
    },
];

const CheckoutPage = ({ cartItems = mockCartItems }) => {
    const navigate = useNavigate();

    // Replaced AuthContext with a simple state for demonstration.
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [userName, setUserName] = useState('John Doe');

    const [paymentMethod, setPaymentMethod] = useState('transfer');
    const [shippingMethod, setShippingMethod] = useState('reguler');

    // New state for address management
    const [address, setAddress] = useState({
        name: 'Alif Dzaka',
        phone: '+62 123 456 789',
        fullAddress: 'Jalan Bogor No. 123, RT 01 RW 12, Jawa Barat, 12345'
    });
    // State to toggle the address edit form visibility
    const [isEditingAddress, setIsEditingAddress] = useState(false);
    // Temporary state to hold form input values
    const [newAddress, setNewAddress] = useState(address);
    const [message, setMessage] = useState('');

    // --- FUNGSI-FUNGSI YANG HILANG ---
    const handleEditClick = () => {
        setIsEditingAddress(true);
        // Set newAddress state to current address values when starting to edit
        setNewAddress(address);
    };

    const handleCancelEdit = () => {
        setIsEditingAddress(false);
    };

    const handleSaveAddress = () => {
        setAddress(newAddress);
        setIsEditingAddress(false);
        setMessage('Alamat berhasil diperbarui!');
        // Hapus pesan setelah 3 detik
        setTimeout(() => {
            setMessage('');
        }, 3000);
    };
    // --- AKHIR FUNGSI YANG HILANG ---

    // Menghitung subtotal secara dinamis dari item di keranjang
    const subtotal = cartItems && cartItems.length > 0
        ? cartItems.reduce(
              (total, item) => total + item.price * item.quantity,
              0
          )
        : 0;

    const ongkir = shippingMethod === 'reguler' ? 15000 : 
                    shippingMethod === 'express' ? 25000 : 
                    shippingMethod === 'sameday' ? 35000 : 0;
    
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
                        Checkout Produk
                    </h1>
                </div>
                
                <div className="space-y-6">
                    {/* Bagian Alamat Pengiriman */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-4">Alamat Pengiriman</h2>
                        <div className="space-y-4">
                            {isEditingAddress ? (
                                // Address Edit Form
                                <div className="p-4 rounded-lg bg-gray-100 space-y-4">
                                    <div className="flex flex-col">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-700">Nama Penerima</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={newAddress.name}
                                            onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                                            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#43703a]"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="phone" className="text-sm font-medium text-gray-700">Nomor Telepon</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            value={newAddress.phone}
                                            onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
                                            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#43703a]"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="fullAddress" className="text-sm font-medium text-gray-700">Alamat Lengkap</label>
                                        <textarea
                                            id="fullAddress"
                                            value={newAddress.fullAddress}
                                            onChange={(e) => setNewAddress({ ...newAddress, fullAddress: e.target.value })}
                                            rows="3"
                                            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#43703a]"
                                        ></textarea>
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <button 
                                            onClick={handleCancelEdit}
                                            className="px-4 py-2 text-sm font-semibold rounded-md border border-gray-300 text-gray-700 hover:bg-gray-200 transition-colors"
                                        >
                                            Batal
                                        </button>
                                        <button 
                                            onClick={handleSaveAddress}
                                            className="px-4 py-2 text-sm font-semibold rounded-md bg-[#43703a] text-white hover:bg-[#365e32] transition-colors"
                                        >
                                            Simpan
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                // Read-only Address Display
                                <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
                                    <div>
                                        <h3 className="font-semibold">{address.name} | {address.phone}</h3>
                                        <p className="text-sm text-gray-600">{address.fullAddress}</p>
                                    </div>
                                    <button 
                                        onClick={handleEditClick}
                                        className="bg-[#43703a] text-white text-sm font-semibold hover:bg-[#365e32] py-1 px-2 rounded"
                                    >
                                        Edit Alamat
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Bagian Metode Pengiriman */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-4">Metode Pengiriman</h2>
                        <div className="space-y-3">
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
                                        className="w-5 h-5 accent-[#43703a] mr-3"
                                    />
                                    <div>
                                        <p className="font-semibold text-gray-800">Reguler</p>
                                        <p className="text-sm text-gray-600">3-5 hari kerja</p>
                                    </div>
                                </div>
                                <span className="font-bold text-gray-800">Rp15.000</span>
                            </div>

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
                                    <input type="radio" checked={paymentMethod === 'transfer'} readOnly className="w-5 h-5 accent-[#43703a] mr-3" />
                                    <span className="font-semibold">Transfer Bank</span>
                                </div>
                                <p className="text-sm text-gray-600 ml-6 mt-1">Pembeli melakukan pembayaran melalui transfer bank (admin ditanggung pembeli).</p>
                            </div>
                            <div 
                                className={`p-4 rounded-lg cursor-pointer transition-colors ${paymentMethod === 'cod' ? 'bg-[#43703a]/10 border-2 border-[#43703a]' : 'bg-gray-100'}`}
                                onClick={() => setPaymentMethod('cod')}
                            >
                                <div className="flex items-center">
                                    <input type="radio" checked={paymentMethod === 'cod'} readOnly className="w-5 h-5 accent-[#43703a] mr-3" />
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

                    {/* Bagian Pesanan Anda - Sekarang dinamis */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-4">Pesanan Anda ({cartItems.length} item)</h2>
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center gap-4 border-b border-gray-200 pb-4 mb-4 last-of-type:border-b-0 last-of-type:mb-0 last-of-type:pb-0">
                                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                                <div className="flex-grow">
                                    <p className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium inline-block mb-1">
                                        {item.category}
                                    </p>
                                    <h3 className="font-semibold">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Jumlah: {item.quantity}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Rp{item.price.toLocaleString('id-ID')}/{item.unit}
                                    </p>
                                </div>
                                <p className="font-semibold text-lg text-[#43703a]">
                                    Rp{(item.price * item.quantity).toLocaleString('id-ID')}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Ringkasan Pembayaran */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-4">Ringkasan Pembayaran</h2>
                        <div className="text-gray-600 space-y-2 mb-4">
                            <div className="flex justify-between">
                                <span>Subtotal ({cartItems.length} item)</span>
                                <span>Rp{subtotal.toLocaleString('id-ID')}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Ongkos Kirim</span>
                                <span>Rp{ongkir.toLocaleString('id-ID')}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Biaya Admin</span>
                                <span>Rp0</span>
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