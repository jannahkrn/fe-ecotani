import React, { useState, useContext } from 'react';
import Footer from '../../components/user/Footer';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { UploadCloud } from 'lucide-react';

const PaymentUploadPage = () => {
    const navigate = useNavigate();
    const { isLoggedIn, userName } = useContext(AuthContext);
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [isUploaded, setIsUploaded] = useState(false); // State baru untuk mengontrol tampilan

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        } else {
            setSelectedFile(null);
            setPreviewUrl('');
        }
    };

    const handleUpload = () => {
        // Logika untuk mengirim file ke server bisa ditambahkan di sini.

        // Setelah berhasil diunggah, perbarui state isUploaded
        setIsUploaded(true);
    };

    const handleTrackOrderClick = () => {
        // Arahkan ke halaman tracking dan kirim state untuk metode pembayaran 'transfer'
        navigate('/tracking', { state: { paymentMethod: 'transfer' } });
    };

    return (
        <div className="font-sans bg-white min-h-screen flex flex-col">
            <div className="container mx-auto px-12 py-8 flex-grow">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex items-center gap-4 mb-8">
                    <img 
                        src="src/assets/logo.png"
                        alt="Ecotani Logo" 
                        className="h-8" 
                    />
                    <div className="w-[1px] h-8 bg-gray-300 mx-2"></div>
                    <h1 className="text-2xl font-bold text-[#43703a]">
                        Upload Bukti Pembayaran
                    </h1>
                </div>

                {/* Tampilkan konfirmasi jika isUploaded true */}
                {isUploaded ? (
                    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
                        <img 
                            src="/src/assets/Transfer Berhasil- Sudah Login.png" 
                            alt="Transfer Berhasil" 
                            className="max-w-full h-auto" 
                        />
                        <button
                            onClick={handleTrackOrderClick}
                            className="w-full py-3 mt-6 rounded-full bg-[#43703A] text-white font-semibold"
                        >
                            Lacak Pesanan
                        </button>
                    </div>
                ) : (
                    <>
                        {/* Tampilkan form upload jika belum diunggah */}
                        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Informasi Pembayaran</h2>
                            <p className="text-gray-600 mb-6">
                                Silakan transfer sesuai dengan nominal yang tertera. Transfer harus dilakukan dalam 24 jam untuk menghindari pembatalan otomatis.
                            </p>
                            <div className="grid grid-cols-2 gap-4 text-gray-700">
                                <div>
                                    <p className="font-semibold">Bank Tujuan</p>
                                    <p className="font-semibold">Nomor Rekening</p>
                                    <p className="font-semibold">Atas Nama</p>
                                    <p className="font-semibold">Jumlah Transfer</p>
                                </div>
                                <div>
                                    <p>BCA</p>
                                    <p>12345678900</p>
                                    <p>Jannah K</p>
                                    <p>Kosek</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Form Bukti Transfer</h2>
                            <p className="text-gray-600 mb-6">
                                Unggah foto bukti transfer dari mobile banking atau struk ATM.
                            </p>
                            
                            <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-gray-300 rounded-lg">
                                {previewUrl ? (
                                    <img src={previewUrl} alt="Preview Bukti Transfer" className="max-w-full max-h-64 object-contain mb-4" />
                                ) : (
                                    <>
                                        <UploadCloud className="w-16 h-16 mb-4 text-gray-400" />
                                        <p className="text-lg font-semibold text-gray-700">Unggah Bukti Transfer</p>
                                        <p className="text-sm text-gray-500 mt-1 mb-4">
                                            Klik tombol di bawah untuk mengunggah foto bukti transfer.
                                        </p>
                                    </>
                                )}
                                <input
                                    id="file-upload"
                                    type="file"
                                    className="hidden"
                                    onChange={handleFileChange}
                                    accept="image/*"
                                />
                                <label
                                    htmlFor="file-upload"
                                    className="bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded-full cursor-pointer hover:bg-gray-300 transition-colors"
                                >
                                    {selectedFile ? 'Pilih File Lain' : 'Unggah File'}
                                </label>
                            </div>

                            {selectedFile && (
                                <button
                                    onClick={handleUpload}
                                    className="w-full py-3 mt-6 rounded-full bg-[#43703A] text-white font-semibold"
                                >
                                    Kirim Bukti Pembayaran
                                </button>
                            )}
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Ringkasan Pesanan</h2>
                            <div className="grid grid-cols-2 gap-4 text-gray-700">
                                <div>
                                    <p className="font-semibold">Nomor Pesanan</p>
                                    <p className="font-semibold">Metode Pembayaran</p>
                                    <p className="font-semibold">Status</p>
                                    <p className="font-semibold">Total Pembayaran</p>
                                </div>
                                <div>
                                    <p>ECT-2025-00001</p>
                                    <p>Transfer Bank</p>
                                    <p>Menunggu Pembayaran</p>
                                    <p>Kosek</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            
            <Footer />
        </div>
    );
};

export default PaymentUploadPage;