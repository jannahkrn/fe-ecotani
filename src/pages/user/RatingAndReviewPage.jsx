// src/pages/user/RatingAndReviewPage.jsx
import React, { useState, useContext } from 'react';
import Footer from '../../components/user/Footer';
import AuthContext from '../../context/AuthContext';
import { FaStar, FaRegStar } from 'react-icons/fa';

const RatingAndReviewPage = () => {
    const { isLoggedIn, userName } = useContext(AuthContext);
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [photoPreview, setPhotoPreview] = useState(null);

    // Dummy product data (samakan dengan TrackingPage)
    const product = {
        name: "Botol Plastik",
        category: "Anorganik",
        seller: "Jannah Kurniawati",
        price: "Rp3.000",
        unit: "100 gram",
        total: "Rp9.000",
        quantity: 3,
        image: "/src/assets/detail-product.png"
    };

    const handleRatingClick = (selectedRating) => {
        setRating(selectedRating);
    };

    const handleReviewChange = (e) => {
        setReviewText(e.target.value);
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhotoPreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPhotoPreview(null);
        }
    };

    const handleSubmitReview = () => {
        console.log("Mengirim Ulasan:", { rating, reviewText, photo: photoPreview });
        alert("Ulasan Anda berhasil dikirim!");
    };

    return (
        <div className="font-sans bg-white min-h-screen flex flex-col">
            <div className="container mx-auto px-12 py-8 flex-grow">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex items-center gap-4 mb-8">
                    <img 
                        src="src/assets/logo.png"
                        alt="Ecotani Logo" 
                        className="h-8" 
                    />
                    <div className="w-[1px] h-8 bg-gray-300 mx-2"></div>
                    <h1 className="text-2xl font-bold text-[#43703a]">
                        Ulasan dan Rating Produk
                    </h1>
                </div>

                {/* Informasi */}
                <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Bagikan Pengalaman Anda</h2>
                    <p className="text-gray-600">
                        Rating dan ulasan Anda membantu pembeli lain membuat keputusan yang tepat dan membantu penjual meningkatkan kualitas produk mereka.
                    </p>
                </div>

                {/* Produk (SAMA dengan Tracking) */}
                <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Rating Produk</h2>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-lg" />
                            <div>
                                <p className="bg-[#43703a] text-white px-2 py-1 rounded-full text-xs font-medium inline-block mb-1">
                                    {product.category}
                                </p>
                                <h3 className="font-semibold text-gray-800">{product.name}</h3>
                                <p className="text-sm text-gray-600">Penjual: {product.seller}</p>
                                <p className="text-sm text-gray-600">{product.price}/{product.unit}</p>
                                <p className="text-sm text-gray-600">Jumlah: {product.quantity}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-semibold text-lg text-[#43703a]">{product.total}</p>
                        </div>
                    </div>
                </div>

                {/* Rating & Review */}
                <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Rating Keseluruhan</h2>
                    <div className="flex items-start gap-4">
                        {/* Star Rating */}
                        <div className="flex items-center gap-1 text-yellow-400 text-2xl">
                            {[...Array(5)].map((_, index) => (
                                <span
                                    key={index}
                                    onClick={() => handleRatingClick(index + 1)}
                                    className="cursor-pointer"
                                >
                                    {index < rating ? <FaStar /> : <FaRegStar />}
                                </span>
                            ))}
                        </div>
                        {/* Textarea Ulasan */}
                        <div className="flex-1">
                            <textarea
                                className="w-full h-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#43703a]"
                                placeholder="Ceritakan pengalaman Anda dengan produk ini. Bagaimana kualitasnya? Apakah sesuai dengan Deskripsi?"
                                value={reviewText}
                                onChange={handleReviewChange}
                            ></textarea>
                        </div>
                    </div>
                </div>

                {/* Foto */}
                <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Tambahkan Foto (Opsional)</h2>
                    <div className="flex items-center gap-4">
                        {photoPreview ? (
                            <img src={photoPreview} alt="Review Preview" className="w-24 h-24 object-cover rounded-lg" />
                        ) : (
                            <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                                <span className="text-4xl text-gray-400">📷</span>
                            </div>
                        )}
                        <label htmlFor="upload-photo" className="cursor-pointer">
                            <span className="bg-gray-200 text-gray-800 py-2 px-6 rounded-full font-semibold hover:bg-gray-300 transition-colors">
                                Tambah
                            </span>
                            <input 
                                type="file" 
                                id="upload-photo" 
                                className="hidden"
                                accept="image/*"
                                onChange={handlePhotoChange}
                            />
                        </label>
                    </div>
                </div>

                {/* Button Kirim */}
                <div className="flex justify-end mt-8">
                    <button
                        onClick={handleSubmitReview}
                        className="bg-[#43703a] text-white py-2 px-6 rounded-full font-semibold hover:bg-[#345a2e] transition-colors"
                    >
                        Kirim Review
                    </button>
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default RatingAndReviewPage;
