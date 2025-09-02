import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/user/Navbar';
import Footer from '../../components/user/Footer';

const SellerProductDetailPage = ({ cartItems }) => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
            const products = JSON.parse(storedProducts);
            const foundProduct = products.find(p => p.id === parseInt(productId));
            setProduct(foundProduct);
        }
    }, [productId]);

    if (!product) {
        return (
            <div className="font-sans bg-gray-100 min-h-screen flex flex-col">
                <Navbar cartItems={cartItems} />
                <main className="container mx-auto px-12 py-8 flex-grow">
                    <p className="text-center text-xl text-gray-700">Produk tidak ditemukan.</p>
                </main>
                <Footer />
            </div>
        );
    }
    const mainImage = product.images.length > 0 ? product.images[0] : "https://placehold.co/500x500/E5E7EB/4B5563?text=Product+Image";
    const thumbnailImages = product.images.length > 1 ? product.images.slice(1) : [];

    return (
        <div className="font-sans bg-gray-100 min-h-screen flex flex-col">
            <Navbar cartItems={cartItems} />
            <main className="container mx-auto px-12 py-8 flex-grow">
                <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold text-gray-800">Detail Produk</h1>
                        <div className="flex gap-2">
                            <button 
                                onClick={() => navigate('/profile')} 
                                className="bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-full hover:bg-gray-400 transition-colors"
                            >
                                Kembali ke Toko
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Gambar Produk */}
                        <div className="flex flex-col items-center">
                            <img src={mainImage} alt={product.productTitle} className="w-full h-auto object-cover rounded-lg mb-4 shadow-sm" />
                            {thumbnailImages.length > 0 && (
                                <div className="flex gap-2 justify-center">
                                    {thumbnailImages.map((image, index) => (
                                        <img key={index} src={image} alt={`Thumbnail ${index + 1}`} className="w-24 h-24 object-cover rounded-lg shadow-sm" />
                                    ))}
                                </div>
                            )}
                        </div>
                        {/* Detail Produk */}
                        <div className="flex flex-col space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm font-medium">{product.category}</span>
                                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm font-medium">{product.condition}</span>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-800">{product.productTitle}</h2>
                            <p className="text-lg text-gray-600">Lokasi: {product.location}</p>
                            <div className="flex items-center gap-2 text-ecotani-green font-semibold">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.683 21.01a1.53 1.53 0 01-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z" clipRule="evenodd" />
                                </svg>
                                <span>5.0</span>
                                <span className="text-gray-500 font-normal text-sm">(3 ulasan)</span>
                            </div>
                            <p className="text-4xl font-bold text-ecotani-green mt-4">Rp{parseInt(product.price).toLocaleString('id-ID')} / {product.weight} gram</p>
                        </div>
                    </div>
                    {/* Deskripsi Produk */}
                    <div className="bg-gray-50 p-6 rounded-lg mt-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Deskripsi Produk</h3>
                        <p className="text-gray-700 leading-relaxed">{product.description}</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SellerProductDetailPage;
