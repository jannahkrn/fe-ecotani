import React, { useState, useEffect } from 'react';
import Navbar from '../../components/user/Navbar';
import Footer from '../../components/user/Footer';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProfilePage = ({ cartItems }) => {
    const [activeTab, setActiveTab] = useState('profile');
    const [hasStore, setHasStore] = useState(false);
    const [isCreatingStore, setIsCreatingStore] = useState(false);
    const [storeData, setStoreData] = useState({
        storeName: '',
        operationalHours: '',
        storeDescription: ''
    });

    // Dummy data untuk profile
    const userProfile = {
        name: "Alif Dzaka Nurhakim",
        email: "alifdzaka@email.com",
        location: "Bogor, Jawa Barat",
        sales: 156,
        purchases: 89,
        sellerRating: 4.8,
        buyerRating: 4.9,
    };

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
        },
        {
            id: 5,
            productName: "Botol Plastik",
            productCategory: "Plastik",
            productImage: "/src/assets/detail-product.png",
            sellerName: "Jannah K",
            price: 9000,
            paymentMethod: "Transfer",
            transactionStatus: "Belum Bayar",
            status: "pending-payment"
        }
    ];

    const handleCreateStore = () => {
        setIsCreatingStore(true);
    };

    const handleSaveStore = () => {
        // Logika untuk menyimpan data toko, bisa ke database
        // Untuk saat ini, kita hanya akan mengubah state
        setHasStore(true);
        setIsCreatingStore(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStoreData(prevData => ({ ...prevData, [name]: value }));
    };

    const renderSellerProfileContent = () => {
        if (isCreatingStore) {
            return (
                <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
                    <h2 className="text-xl font-bold text-gray-800">Tambah Toko</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-600 mb-2">Nama Toko</label>
                            <input
                                type="text"
                                name="storeName"
                                value={storeData.storeName}
                                onChange={handleInputChange}
                                placeholder="Nama Toko"
                                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ecotani-green"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-600 mb-2">Jam Operasional</label>
                            <input
                                type="text"
                                name="operationalHours"
                                value={storeData.operationalHours}
                                onChange={handleInputChange}
                                placeholder="Jam Operasional Toko. Contoh: 09:00 - 21:00 WIB"
                                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ecotani-green"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold text-gray-600 mb-2">Deskripsi Toko</label>
                        <textarea
                            name="storeDescription"
                            value={storeData.storeDescription}
                            onChange={handleInputChange}
                            placeholder="Deskripsi Toko"
                            rows="4"
                            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ecotani-green"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            onClick={handleSaveStore}
                            className="bg-ecotani-green text-white font-semibold py-2 px-6 rounded-full hover:bg-green-700 transition-colors"
                        >
                            Simpan
                        </button>
                    </div>
                </div>
            );
        }

        if (hasStore) {
            // Tampilan saat toko sudah dibuat
            return (
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
                        <h2 className="text-xl font-bold text-gray-800">Informasi Toko</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                            <div className="flex flex-col">
                                <p className="font-semibold text-gray-600">Nama Toko</p>
                                <p className="text-gray-800">{storeData.storeName}</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-semibold text-gray-600">Jam Operasional</p>
                                <p className="text-gray-800">{storeData.operationalHours}</p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold text-gray-600">Deskripsi Toko</p>
                            <p className="text-gray-800">{storeData.storeDescription}</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold text-gray-800">Daftar Produk</h2>
                            <button className="bg-ecotani-green text-white font-semibold py-2 px-6 rounded-full hover:bg-green-700 transition-colors">
                                Tambah Produk
                            </button>
                        </div>
                        <div className="text-center py-12">
                            <p className="text-xl font-bold text-gray-800 mb-2">Produk Masih Kosong!</p>
                            <p className="text-gray-600">
                                Klik Tambah Produk Untuk Menjual Limbah.
                            </p>
                        </div>
                    </div>
                </div>
            );
        }
        
        // Tampilan saat belum ada toko
        return (
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md text-center">
                <p className="text-xl font-bold text-gray-800 mb-4">
                    OOPS! Anda belum mempunyai Toko.
                    <br />
                    Silahkan Membuat Toko terlebih dahulu.
                </p>
                <button
                    onClick={handleCreateStore}
                    className="bg-ecotani-green text-white font-semibold py-2 px-6 rounded-full hover:bg-green-700 transition-colors"
                >
                    Buat Toko
                </button>
            </div>
        );
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'profile':
                return (
                    <div>
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Informasi Dasar</h2>
                        {/* Konten profil pribadi */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold text-gray-600">Nama Lengkap</label>
                                <p className="text-gray-800">{userProfile.name}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold text-gray-600">Email</label>
                                <p className="text-gray-800">{userProfile.email}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold text-gray-600">Nomor Telepon</label>
                                <p className="text-gray-800">+62 822 888 999</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold text-gray-600">Jenis Kelamin</label>
                                <p className="text-gray-800">Laki-Laki</p>
                            </div>
                        </div>

                        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Alamat Pengiriman</h2>
                        {/* Dummy data untuk alamat */}
                        <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center mb-4">
                            <div>
                                <p className="font-semibold text-gray-800">Alif Dzaka Nurhakim | +62 822 888 999</p>
                                <p className="text-sm text-gray-600">Jalan Bogor No. 123, RT 01 RW 12, Jawa Barat, 12345</p>
                            </div>
                            <button className="text-ecotani-green text-sm font-semibold">Ubah Alamat</button>
                        </div>
                        <button className="text-ecotani-green text-sm font-semibold hover:underline">+ Tambah Alamat</button>
                    </div>
                );
            case 'purchase-history':
                return (
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-gray-800">Riwayat Pembelian</h2>
                        {purchaseHistory.map((order) => {
                            const renderStatus = () => {
                                switch (order.status) {
                                    case 'completed-rated':
                                        return (
                                            <div className="text-right">
                                                <p className="text-sm font-semibold text-gray-600">
                                                    Rating dari penjual: {order.sellerRating} / 5.0
                                                </p>
                                                <p className="text-sm font-semibold text-gray-600">
                                                    Rating untuk produk: {order.productRating} / 5.0
                                                </p>
                                            </div>
                                        );
                                    case 'completed':
                                        return (
                                            <div className="flex justify-end gap-2 mt-2">
                                                <Link to="/review" className="text-sm font-semibold text-white bg-ecotani-green px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
                                                    Rating Sekarang
                                                </Link>
                                            </div>
                                        );
                                    case 'pending-payment':
                                        return (
                                            <div className="flex justify-end gap-2 mt-2">
                                                <Link to="/payment-upload" className="text-sm font-semibold text-white bg-red-500 px-4 py-2 rounded-full hover:bg-red-600 transition-colors">
                                                    Bayar Sekarang
                                                </Link>
                                            </div>
                                        );
                                    case 'awaiting-verification':
                                        return (
                                            <div className="text-right">
                                                <p className="text-sm font-medium text-gray-500">
                                                    Bukti Transfer sedang Diverifikasi
                                                </p>
                                            </div>
                                        );
                                    default:
                                        return null;
                                }
                            };

                            return (
                                <div key={order.id} className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center mb-4">
                                    <div className="flex items-start gap-6 flex-grow">
                                        <img src={order.productImage} alt={order.productName} className="w-24 h-24 object-cover rounded-lg" />
                                        <div>
                                            <p className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium inline-block mb-1">
                                                {order.productCategory}
                                            </p>
                                            <h3 className="font-semibold text-lg">{order.productName}</h3>
                                            <p className="text-sm text-gray-600">Penjual: {order.sellerName}</p>
                                            <div className="flex items-center gap-2 mt-2">
                                                <span className="text-sm font-medium text-gray-500">{order.paymentMethod}</span>
                                                <span className={`text-sm font-medium px-2 py-1 rounded-full 
                                                    ${order.transactionStatus === 'Selesai' ? 'bg-green-100 text-green-700' :
                                                      order.transactionStatus === 'Diajukan' ? 'bg-yellow-100 text-yellow-700' :
                                                      order.transactionStatus === 'Belum Bayar' ? 'bg-red-100 text-red-700' :
                                                      'bg-gray-100 text-gray-700'}`}
                                                >
                                                    {order.transactionStatus}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col items-end justify-between self-stretch">
                                        <p className="font-bold text-lg text-ecotani-green">
                                            Rp{order.price.toLocaleString('id-ID')}
                                        </p>
                                        <div className="mt-4">
                                            <Link to={`/tracking?orderId=${order.id}`} className="text-sm text-ecotani-green font-semibold hover:underline">
                                                Detail Pesanan
                                            </Link>
                                        </div>
                                        {renderStatus()}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                );
            case 'seller-profile':
                return renderSellerProfileContent();
            case 'sales-history':
                return <p>Ini adalah halaman Riwayat Penjualan.</p>;
            default:
                return null;
        }
    };

    return (
        <div className="font-sans bg-gray-100 min-h-screen">
            <Navbar cartItems={cartItems} />

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

                    {renderTabContent()}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProfilePage;
