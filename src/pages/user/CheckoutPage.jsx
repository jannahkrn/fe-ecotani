import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/user/Footer';
import logoImg from "../../assets/logo.png";
import botolImg from "../../assets/botol.jpg";

const CheckoutPage = ({ cartItems }) => {
  const navigate = useNavigate();
  const [shippingMethod, setShippingMethod] = useState('reguler');
  const [paymentMethod, setPaymentMethod] = useState('transfer');

  // Hitung subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Ongkos kirim berdasarkan metode
  const ongkir =
    shippingMethod === 'reguler'
      ? 15000
      : shippingMethod === 'express'
      ? 25000
      : shippingMethod === 'sameday'
      ? 35000
      : 0;

  const total = subtotal + ongkir;

  const handleCheckout = () => {
    if (paymentMethod === 'transfer') {
      navigate('/payment-upload');
    } else {
      navigate('/tracking', { state: { paymentMethod } });
    }
  };

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      {/* Kontainer utama */}
      <div className="container mx-auto px-12 py-8 flex-grow">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex items-center gap-4 mb-8">
          <img 
                      src={logoImg} 
                      alt="Ecotani Logo" 
                      className="h-8" 
                    />
          <div className="w-[1px] h-8 bg-gray-300 mx-2"></div>
          <h1 className="text-2xl font-bold text-[#43703a]">
            Checkout Produk
          </h1>
        </div>

        <div className="space-y-6">
          {/* Metode Pengiriman */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Metode Pengiriman</h2>
            <div
              className={`p-4 mb-3 rounded-lg cursor-pointer flex justify-between items-center ${
                shippingMethod === 'reguler'
                  ? 'bg-[#43703a]/10 border-2 border-[#43703a]'
                  : 'bg-gray-100 border'
              }`}
              onClick={() => setShippingMethod('reguler')}
            >
              <span>Reguler (3-5 hari)</span>
              <span className="font-bold">Rp15.000</span>
            </div>
            <div
              className={`p-4 mb-3 rounded-lg cursor-pointer flex justify-between items-center ${
                shippingMethod === 'express'
                  ? 'bg-[#43703a]/10 border-2 border-[#43703a]'
                  : 'bg-gray-100 border'
              }`}
              onClick={() => setShippingMethod('express')}
            >
              <span>Express (1-2 hari)</span>
              <span className="font-bold">Rp25.000</span>
            </div>
            <div
              className={`p-4 rounded-lg cursor-pointer flex justify-between items-center ${
                shippingMethod === 'sameday'
                  ? 'bg-[#43703a]/10 border-2 border-[#43703a]'
                  : 'bg-gray-100 border'
              }`}
              onClick={() => setShippingMethod('sameday')}
            >
              <span>Same Day</span>
              <span className="font-bold">Rp35.000</span>
            </div>
          </div>

          {/* Metode Pembayaran */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Metode Pembayaran</h2>
            <div
              className={`p-4 mb-3 rounded-lg cursor-pointer border ${
                paymentMethod === 'transfer'
                  ? 'bg-[#43703a]/10 border-2 border-[#43703a]'
                  : 'bg-gray-100 border'
              }`}
              onClick={() => setPaymentMethod('transfer')}
            >
              Transfer Bank
            </div>
            <div
              className={`p-4 rounded-lg cursor-pointer border ${
                paymentMethod === 'cod'
                  ? 'bg-[#43703a]/10 border-2 border-[#43703a]'
                  : 'bg-gray-100 border'
              }`}
              onClick={() => setPaymentMethod('cod')}
            >
              COD (Bayar di Tempat)
            </div>
          </div>

          {/* Pesanan Anda (copy dari Cart, minus tombol + - dan hapus) */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Pesanan Anda ({cartItems.length} item)
            </h2>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-start gap-6 relative"
              >
                {/* Gambar produk */}
                <div className="relative border-2 border-blue-500 rounded-lg p-1">
                  <img 
                                  src={botolImg} 
                                  alt="Botol Plastik" 
                                  className="w-32 h-32 object-cover rounded-md" 
                                />
                </div>

                <div className="flex-grow flex flex-col justify-between h-[136px]">
                  <div>
                    <span className="bg-[#43703a] text-white text-xs font-medium px-2 py-1 rounded-sm w-fit mb-2 inline-block">
                      Anorganik
                    </span>
                    <h2 className="text-xl font-bold text-[#43703a] mt-1">
                      {item.name}
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">
                      Penjual: Jannah K
                    </p>
                    <p className="text-lg font-semibold mt-1 text-[#43703a]">
                      Rp{item.price.toLocaleString('id-ID')}/100 gram
                    </p>
                  </div>

                  {/* Jumlah fix tanpa tombol */}
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600">Jumlah:</span>
                    <span className="font-semibold">{item.quantity}</span>
                  </div>
                </div>

                {/* Hanya total harga */}
                <div className="flex-none flex flex-col justify-end items-end h-[136px]">
                  <p className="text-xl font-bold text-[#43703a]">
                    Rp{(item.price * item.quantity).toLocaleString('id-ID')}
                  </p>
                </div>
              </div>
            ))}
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
            </div>
            <div className="flex justify-between items-center text-lg font-bold border-t border-gray-300 pt-4">
              <span>Total Pembayaran</span>
              <span className="text-[#43703a]">
                Rp{total.toLocaleString('id-ID')}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full py-3 mt-6 rounded-full bg-[#43703a] text-white font-semibold hover:bg-[#365e32]"
            >
              Bayar Sekarang
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
