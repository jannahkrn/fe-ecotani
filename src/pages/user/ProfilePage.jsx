import React, { useState, useEffect } from 'react';
import Footer from '../../components/user/Footer';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';

const ProfilePage = ({ cartItems }) => {
    const [activeTab, setActiveTab] = useState('profile');
    const [hasStore, setHasStore] = useState(true);
    const [isCreatingStore, setIsCreatingStore] = useState(false);
    const [isAddingProduct, setIsAddingProduct] = useState(false);
    const [storeData, setStoreData] = useState({
        storeName: 'Alif Store',
        operationalHours: '09:00 - 21:00 WIB',
        storeDescription: 'Toko online terpercaya menjual gadget, aksesoris teknologi, dan fashion dengan kualitas terbaik. Melayani pengiriman ke seluruh Indonesia.',
        paymentMethod: 'Transfer BCA',
        accountNumber: '1234567890',
    });

    const [products, setProducts] = useState([]);
    const [productData, setProductData] = useState({
        productTitle: '',
        condition: '',
        category: '',
        weight: '',
        price: '',
        location: '',
        description: '',
    });
    const [uploadedImages, setUploadedImages] = useState([]);

    // Load products dari localStorage saat render pertama
    useEffect(() => {
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        }
    }, []);

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

    // Dummy data untuk riwayat pembelian
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
        setHasStore(true);
        setIsCreatingStore(false);
    };

    const handleDeleteStore = () => {
        if (window.confirm("Apakah Anda yakin ingin menghapus toko beserta semua produk?")) {
            setHasStore(false);
            setProducts([]);
            setStoreData({
                storeName: '',
                operationalHours: '',
                storeDescription: '',
                paymentMethod: '',
                accountNumber: ''
            });
            localStorage.removeItem('products');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (isCreatingStore) {
            setStoreData(prev => ({ ...prev, [name]: value }));
        } else if (isAddingProduct) {
            setProductData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleAddProductClick = () => setIsAddingProduct(true);

    const handleSaveProduct = () => {
        const newProduct = {
            id: Date.now(),
            productTitle: productData.productTitle,
            condition: productData.condition,
            category: productData.category,
            weight: productData.weight,
            price: productData.price,
            location: productData.location,
            description: productData.description,
            images: uploadedImages,
            seller: storeData.storeName,
        };

        const updatedProducts = [...products, newProduct];
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));

        setProductData({
            productTitle: '',
            condition: '',
            category: '',
            weight: '',
            price: '',
            location: '',
            description: '',
        });
        setUploadedImages([]);
        setIsAddingProduct(false);
    };

    const handleDeleteProduct = (id) => {
        if (window.confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
            const updatedProducts = products.filter(p => p.id !== id);
            setProducts(updatedProducts);
            localStorage.setItem('products', JSON.stringify(updatedProducts));
        }
    };

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        if (uploadedImages.length + files.length > 5) {
            console.log("Maksimal 5 foto dapat diunggah.");
            return;
        }
        const newImageUrls = files.map(file => URL.createObjectURL(file));
        setUploadedImages(prev => [...prev, ...newImageUrls]);
    };
    const handleRemoveImage = (index) => {
        setUploadedImages(prev => prev.filter((_, i) => i !== index));
    };

    const renderSellerProfileContent = () => {
        if (isCreatingStore) {
            return (
                <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
                    <h2 className="text-xl font-bold text-gray-800">Tambah Toko</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-600 mb-2">Nama Toko</label>
                            <input type="text" name="storeName" value={storeData.storeName}
                                onChange={handleInputChange} placeholder="Nama Toko"
                                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ecotani-green" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-600 mb-2">Jam Operasional</label>
                            <input type="text" name="operationalHours" value={storeData.operationalHours}
                                onChange={handleInputChange} placeholder="09:00 - 21:00 WIB"
                                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ecotani-green" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-600 mb-2">Metode Pembayaran</label>
                            <input type="text" name="paymentMethod" value={storeData.paymentMethod}
                                onChange={handleInputChange} placeholder="Transfer BCA, BRI, OVO, DANA"
                                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ecotani-green" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-600 mb-2">Nomor Rekening / No. E-Wallet</label>
                            <input type="text" name="accountNumber" value={storeData.accountNumber}
                                onChange={handleInputChange} placeholder="1234567890"
                                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ecotani-green" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold text-gray-600 mb-2">Deskripsi Toko</label>
                        <textarea name="storeDescription" value={storeData.storeDescription}
                            onChange={handleInputChange} rows="4" placeholder="Deskripsi Toko"
                            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ecotani-green" />
                    </div>
                    <div className="flex justify-end">
                        <button onClick={handleSaveStore}
                            className="bg-[#43703A] text-white font-bold py-1 px-4 rounded shadow-lg hover:bg-[#345a2e]">
                            Simpan
                        </button>
                    </div>
                </div>
            );
        }

        if (isAddingProduct) {
            return (
                <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Tambah Produk</h2>
                    <p className="text-sm text-gray-500 mb-4">Berat minimal limbah yang dapat dijual adalah 100 gram (0,1 kg).</p>

                    <h3 className="text-lg font-semibold text-gray-700">Informasi Limbah</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-600 mb-2">Judul Limbah</label>
                            <input
                                type="text"
                                name="productTitle"
                                value={productData.productTitle}
                                onChange={handleInputChange}
                                placeholder="Judul Limbah. Contoh: Kulit jagung"
                                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ecotani-green"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-600 mb-2">Kondisi</label>
                            <input
                                type="text"
                                name="condition"
                                value={productData.condition}
                                onChange={handleInputChange}
                                placeholder="Basah atau Kering"
                                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ecotani-green"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-600 mb-2">Kategori</label>
                            <input
                                type="text"
                                name="category"
                                value={productData.category}
                                onChange={handleInputChange}
                                placeholder="Bisa bermacam-macam, seperti anorganik, organik, kayu, atau tekstil."
                                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ecotani-green"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-600 mb-2">Berat (gram)</label>
                            <input
                                type="text"
                                name="weight"
                                value={productData.weight}
                                onChange={handleInputChange}
                                placeholder="100 gram"
                                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ecotani-green"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-600 mb-2">Lokasi</label>
                            <input
                                type="text"
                                name="location"
                                value={productData.location}
                                onChange={handleInputChange}
                                placeholder="Contoh: Klaten, Jawa Tengah"
                                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ecotani-green"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-600 mb-2">Harga per gram (Rp)</label>
                            <input
                                type="text"
                                name="price"
                                value={productData.price}
                                onChange={handleInputChange}
                                placeholder="2000"
                                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ecotani-green"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col mt-4">
                        <label className="text-sm font-semibold text-gray-600 mb-2">Deskripsi</label>
                        <textarea
                            name="description"
                            value={productData.description}
                            onChange={handleInputChange}
                            placeholder="Deskripsikan kondisi dan detail limbah anda."
                            rows="4"
                            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ecotani-green"
                        />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-700 mt-6">Foto Limbah (Maksimal 5 foto)</h3>
                    <div className="bg-gray-100 p-8 rounded-lg text-center border-2 border-dashed border-gray-300 relative">
                        {uploadedImages.length > 0 ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
                                {uploadedImages.map((image, index) => (
                                    <div key={index} className="relative group">
                                        <img src={image} alt={`Pratinjau ${index + 1}`} className="w-full h-24 object-cover rounded-lg" />
                                        <button
                                            onClick={() => handleRemoveImage(index)}
                                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex justify-center items-center">
                                <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L15 16m-2-4l4.586-4.586a2 2 0 012.828 0L20 12m-6 4h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                        )}
                        <p className="mt-2 text-gray-600 font-semibold">Upload Foto Limbah</p>
                        <p className="text-sm text-gray-500">Klik tombol di bawah untuk upload foto limbah transfer</p>
                        <input
                            type="file"
                            id="imageUpload"
                            hidden
                            multiple
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                        <button
                            onClick={() => document.getElementById('imageUpload').click()}
                            className="mt-4 bg-ecotani-green text-white font-semibold py-2 px-6 rounded-full hover:bg-green-700 transition-colors"
                        >
                            Upload File
                        </button>
                    </div>

                    <div className="flex justify-end mt-8">
                        <button
                            onClick={handleSaveProduct}
                            className="bg-[#43703A] text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-[#345a2e] transition-colors"
                        >
                            Tambahkan Limbah
                        </button>
                    </div>
                </div>
            );
        }

        if (hasStore) {
            return (
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold text-gray-800">Informasi Toko</h2>
                            <button onClick={handleDeleteStore}
                                className="flex items-center gap-2 bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-red-700">
                                <Trash2 className="w-5 h-5" /> Hapus Toko
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                            <div className="flex flex-col">
                                <p className="font-semibold text-gray-600">Nama Toko</p>
                                <p className="text-gray-800">{storeData.storeName}</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-semibold text-gray-600">Jam Operasional</p>
                                <p className="text-gray-800">{storeData.operationalHours}</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-semibold text-gray-600">Metode Pembayaran</p>
                                <p className="text-gray-800">{storeData.paymentMethod}</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-semibold text-gray-600">Nomor Rekening / No. E-Wallet</p>
                                <p className="text-gray-800">{storeData.accountNumber}</p>
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
                            <button
                                onClick={handleAddProductClick}
                                className="bg-[#43703A] text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-[#345a2e] transition-colors"
                            >
                                Tambah Produk
                            </button>
                        </div>
                        {products.length > 0 ? (
                            products.map(product => (
                                <div key={product.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                    <div className="flex items-center gap-4">
                                        <img src={product.images && product.images[0] ? product.images[0] : "/src/assets/detail-product.png"} alt={product.productTitle} className="w-20 h-20 object-cover rounded-md" />
                                        <div>
                                            <p className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium inline-block mb-1">{product.category}</p>
                                            <p className="font-semibold text-gray-800">{product.productTitle}</p>
                                            <p className="text-sm text-gray-600">Penjual: {product.seller}</p>
                                            <p className="text-sm text-gray-600">Stok Tersedia</p>
                                            <p className="font-bold text-sm text-ecotani-green">Rp{parseInt(product.price).toLocaleString('id-ID')} / {product.weight} gram</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Link to={`/seller/products/${product.id}`} className="bg-[#43703A] text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-[#345a2e] transition-colors">
                                            Detail Produk
                                        </Link>
                                        <button
                                            onClick={() => handleDeleteProduct(product.id)}
                                            className="flex items-center gap-1 bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-red-700 transition-colors"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                            Hapus
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-xl font-bold text-gray-800 mb-2">Produk Masih Kosong!</p>
                                <p className="text-gray-600">
                                    Klik Tambah Produk Untuk Menjual Limbah.
                                </p>
                            </div>
                        )}
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
                    className="bg-[#43703A] text-white font-bold py-3 px-8 rounded shadow-lg hover:bg-[#345a2e] transition-colors"
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
                                                <Link to="/review" className="bg-[#43703A] text-white font-bold py-1 px-5 rounded shadow-lg hover:bg-[#345a2e] transition-colors">
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
                return <p>Riwayat Penjualan</p>;
            default:
                return null;
        }
    };

    return (
  <div className="font-sans bg-gray-100 min-h-screen flex flex-col">
    <main className="container mx-auto px-12 py-8 flex-grow">
      
      {/* ✅ Tambahan header Profile */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex items-center gap-4 mb-8">
        <img 
          src="src/assets/logo.png"
          alt="Ecotani Logo" 
          className="h-8" 
        />
        <div className="w-[1px] h-8 bg-gray-300 mx-2"></div>
        <h1 className="text-2xl font-bold text-[#43703a]">Profile</h1>
      </div>

      {/* ✅ Header Profil User */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-8 flex items-center">
        <div className="w-28 h-28 bg-gray-200 rounded-full flex items-center justify-center mr-6">
          <FaUserCircle className="text-7xl text-gray-400" />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-[#43703A]">{userProfile.name}</h1>
          <p className="text-gray-600">{userProfile.email}</p>
          <p className="text-gray-500 mb-4">{userProfile.location}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#43703A] text-white p-4 rounded-lg text-center">
              <p className="text-2xl font-bold">{userProfile.sales}</p>
              <p className="text-sm">Penjualan</p>
            </div>
            <div className="bg-[#43703A] text-white p-4 rounded-lg text-center">
              <p className="text-2xl font-bold">{userProfile.purchases}</p>
              <p className="text-sm">Pembelian</p>
            </div>
            <div className="bg-[#43703A] text-white p-4 rounded-lg text-center">
              <p className="text-2xl font-bold">{userProfile.sellerRating}</p>
              <p className="text-sm">Rating Penjual</p>
            </div>
            <div className="bg-[#43703A] text-white p-4 rounded-lg text-center">
              <p className="text-2xl font-bold">{userProfile.buyerRating}</p>
              <p className="text-sm">Rating Pembeli</p>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Tab navigasi */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab('profile')}
            className={`py-2 px-4 -mb-px font-semibold focus:outline-none transition-colors duration-200 ${
              activeTab === 'profile'
                ? 'border-b-2 border-ecotani-green text-ecotani-green'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Profil Pribadi
          </button>
          <button
            onClick={() => setActiveTab('purchase-history')}
            className={`py-2 px-4 -mb-px font-semibold focus:outline-none transition-colors duration-200 ${
              activeTab === 'purchase-history'
                ? 'border-b-2 border-ecotani-green text-ecotani-green'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Riwayat Pembelian
          </button>
          <button
            onClick={() => setActiveTab('seller-profile')}
            className={`py-2 px-4 -mb-px font-semibold focus:outline-none transition-colors duration-200 ${
              activeTab === 'seller-profile'
                ? 'border-b-2 border-ecotani-green text-ecotani-green'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Profil Penjual
          </button>
          <button
            onClick={() => setActiveTab('sales-history')}
            className={`py-2 px-4 -mb-px font-semibold focus:outline-none transition-colors duration-200 ${
              activeTab === 'sales-history'
                ? 'border-b-2 border-ecotani-green text-ecotani-green'
                : 'text-gray-500 hover:text-gray-700'
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
