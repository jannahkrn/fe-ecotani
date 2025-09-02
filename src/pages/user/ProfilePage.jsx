// src/pages/user/ProfilePage.jsx

import React, { useState, useContext } from 'react';
import Navbar from '../../components/user/Navbar';
import Footer from '../../components/user/Footer';
import AuthContext from '../../context/AuthContext';
import { FaUserCircle } from 'react-icons/fa';

// Terima prop cartItems di sini
const ProfilePage = ({ cartItems }) => {
    const { isLoggedIn, userName } = useContext(AuthContext);
    const [activeTab, setActiveTab] = useState('profile');

    // Dummy data untuk profile
    const userProfile = {
        name: "Alif Dzaka Nurhakim",
        email: "alifdzaka@email.com",
        location: "Bogor, Jawa Barat",
        sales: 156,
        purchases: 89,
        sellerRating: 4.8,
        buyerRating: 4.9,
        phone: "+62 767 888 999",
        gender: "Laki-Laki",
        addresses: [
            {
                name: "Alif Dzaka Nurhakim",
                phone: "+62 767 888 999",
                address: "Jalan Bogor No. 123, RT 01 RW 12, Jawa Barat, 12345"
            },
            {
                name: "Alif Dzaka Nurhakim",
                phone: "+62 767 888 999",
                address: "Asrama Putra Gedung J, Telkom University"
            }
        ]
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'profile':
                return (
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                            <div>
                                <h3 className="font-semibold text-gray-700">Nama Lengkap</h3>
                                <p className="text-gray-900">{userProfile.name}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-700">Email</h3>
                                <p className="text-gray-900">{userProfile.email}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-700">Nomor Telepon</h3>
                                <p className="text-gray-900">{userProfile.phone}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-700">Jenis Kelamin</h3>
                                <p className="text-gray-900">{userProfile.gender}</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold text-gray-700 text-lg">Alamat Pengiriman</h3>
                                <button className="text-ecotani-green font-semibold hover:underline">+ Tambah Alamat</button>
                            </div>
                            <div className="space-y-4">
                                {userProfile.addresses.map((addr, index) => (
                                    <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                                        <p className="font-semibold">{addr.name} | {addr.phone}</p>
                                        <p className="text-gray-600">{addr.address}</p>
                                        <div className="text-right">
                                            <button className="text-ecotani-green font-semibold hover:underline">Ubah Alamat</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 'purchase-history':
                return <p>Ini adalah halaman Riwayat Pembelian.</p>;
            case 'seller-profile':
                return <p>Ini adalah halaman Profil Penjual.</p>;
            case 'sales-history':
                return <p>Ini adalah halaman Riwayat Penjualan.</p>;
            default:
                return null;
        }
    };

    return (
        <div className="font-sans bg-gray-100 min-h-screen">
            {/* Teruskan prop cartItems ke Navbar */}
            <Navbar isLoggedIn={isLoggedIn} userName={userName} cartItems={cartItems} />

            <main className="container mx-auto px-12 py-8">
                <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                    <div className="flex items-center gap-6 mb-8">
                        {/* Profile Picture Placeholder */}
                        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                            <FaUserCircle className="text-7xl text-gray-400" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">{userProfile.name}</h1>
                            <p className="text-gray-600">{userProfile.email}</p>
                            <p className="text-gray-500">{userProfile.location}</p>
                        </div>
                    </div>
                    
                    {/* Summary Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-ecotani-green text-white p-4 rounded-lg text-center">
                            <p className="text-3xl font-bold">{userProfile.sales}</p>
                            <p>Penjualan</p>
                        </div>
                        <div className="bg-ecotani-green text-white p-4 rounded-lg text-center">
                            <p className="text-3xl font-bold">{userProfile.purchases}</p>
                            <p>Pembelian</p>
                        </div>
                        <div className="bg-ecotani-green text-white p-4 rounded-lg text-center">
                            <p className="text-3xl font-bold">{userProfile.sellerRating}</p>
                            <p>Rating Penjual</p>
                        </div>
                        <div className="bg-ecotani-green text-white p-4 rounded-lg text-center">
                            <p className="text-3xl font-bold">{userProfile.buyerRating}</p>
                            <p>Rating Pembeli</p>
                        </div>
                    </div>
                </div>

                {/* Tabs dan Konten */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <div className="flex border-b border-gray-200 mb-6">
                        <button
                            onClick={() => setActiveTab('profile')}
                            className={`py-2 px-4 -mb-px font-semibold focus:outline-none transition-colors duration-200 ${
                                activeTab === 'profile' ? 'border-b-2 border-ecotani-green text-ecotani-green' : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            Profil Pribadi
                        </button>
                        <button
                            onClick={() => setActiveTab('purchase-history')}
                            className={`py-2 px-4 -mb-px font-semibold focus:outline-none transition-colors duration-200 ${
                                activeTab === 'purchase-history' ? 'border-b-2 border-ecotani-green text-ecotani-green' : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            Riwayat Pembelian
                        </button>
                        <button
                            onClick={() => setActiveTab('seller-profile')}
                            className={`py-2 px-4 -mb-px font-semibold focus:outline-none transition-colors duration-200 ${
                                activeTab === 'seller-profile' ? 'border-b-2 border-ecotani-green text-ecotani-green' : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            Profil Penjual
                        </button>
                        <button
                            onClick={() => setActiveTab('sales-history')}
                            className={`py-2 px-4 -mb-px font-semibold focus:outline-none transition-colors duration-200 ${
                                activeTab === 'sales-history' ? 'border-b-2 border-ecotani-green text-ecotani-green' : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            Riwayat Penjualan
                        </button>
                    </div>
                    {renderContent()}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProfilePage;