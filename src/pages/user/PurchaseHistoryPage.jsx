// src/pages/user/PurchaseHistoryPage.jsx

import React, { useState, useContext } from 'react';
import Footer from '../../components/user/Footer';
import AuthContext from '../../context/AuthContext';
import { FaUserCircle } from 'react-icons/fa';
import PurchaseItem from '../../components/user/PurchaseItem'; // Import komponen baru

const PurchaseHistoryPage = ({ cartItems }) => {
    const { isLoggedIn, userName } = useContext(AuthContext);
    const [activeTab, setActiveTab] = useState('purchase-history');

    // Dummy data untuk Riwayat Pembelian
    const purchaseHistory = [
        {
            id: 1,
            productName: "Botol Plastik",
            productCategory: "Plastik",
            productImage: "/src/assets/detail-product.png",
            sellerName: "Jannah K",
            price: 9000,
            paymentMethod: "Transfer",
            transactionStatus: "Selesai",
            status: "completed-rated",
            sellerRating: 4.5,
            productRating: 4.7
        },
        {
            id: 2,
            productName: "Botol Plastik",
            productCategory: "Plastik",
            productImage: "/src/assets/detail-product.png",
            sellerName: "Jannah K",
            price: 9000,
            paymentMethod: "Transfer",
            transactionStatus: "Diajukan",
            status: "awaiting-verification"
        },
        {
            id: 3,
            productName: "Botol Plastik",
            productCategory: "Plastik",
            productImage: "/src/assets/detail-product.png",
            sellerName: "Jannah K",
            price: 9000,
            paymentMethod: "COD",
            transactionStatus: "Selesai",
            status: "completed"
        },
        {
            id: 4,
            productName: "Botol Plastik",
            productCategory: "Plastik",
            productImage: "/src/assets/detail-product.png",
            sellerName: "Jannah K",
            price: 9000,
            paymentMethod: "Transfer",
            transactionStatus: "Selesai",
            status: "completed"
        }
    ];

    // Dummy data untuk profile (diambil dari ProfilePage sebelumnya)
    const userProfile = {
        name: "Alif Dzaka Nurhakim",
        email: "alifdzaka@email.com",
        location: "Bogor, Jawa Barat",
        sales: 156,
        purchases: 89,
        sellerRating: 4.8,
        buyerRating: 4.9,
    };

    return (
        <div className="font-sans bg-gray-100 min-h-screen">

            <main className="container mx-auto px-12 py-8">
                <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                    <div className="flex items-center gap-6 mb-8">
                        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                            <FaUserCircle className="text-7xl text-gray-400" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">{userProfile.name}</h1>
                            <p className="text-gray-600">{userProfile.email}</p>
                            <p className="text-gray-500">{userProfile.location}</p>
                        </div>
                    </div>
                    
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

                <div className="bg-white p-8 rounded-lg shadow-md">
                    <div className="flex border-b border-gray-200 mb-6">
                        <button
                            onClick={() => setActiveTab('profile')}
                            className={`py-2 px-4 -mb-px font-semibold focus:outline-none transition-colors duration-200 ${
                                activeTab === 'profile' ? 'text-gray-500 hover:text-gray-700' : 'text-gray-500 hover:text-gray-700'
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
                                activeTab === 'seller-profile' ? 'text-gray-500 hover:text-gray-700' : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            Profil Penjual
                        </button>
                        <button
                            onClick={() => setActiveTab('sales-history')}
                            className={`py-2 px-4 -mb-px font-semibold focus:outline-none transition-colors duration-200 ${
                                activeTab === 'sales-history' ? 'text-gray-500 hover:text-gray-700' : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            Riwayat Penjualan
                        </button>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-gray-800">Riwayat Pembelian</h2>
                        {purchaseHistory.map((item) => (
                            <PurchaseItem key={item.id} order={item} />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PurchaseHistoryPage;