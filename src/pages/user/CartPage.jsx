// src/pages/user/CartPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/user/Navbar';
import Footer from '../../components/user/Footer';

// Tambahkan isLoggedIn dan userName di props yang diterima
const CartPage = ({ cartItems, updateQuantity, isLoggedIn, userName }) => {
  // Fungsi untuk menghitung total harga
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Fungsi untuk menghapus item
  const removeItem = (productId) => {
    updateQuantity(productId, 0);
  };

  return (
    <div className="font-sans">
      {/* Teruskan props isLoggedIn dan userName ke Navbar */}
      <Navbar cartItems={cartItems} isLoggedIn={isLoggedIn} userName={userName} />

      <main className="container mx-auto px-12 py-8 min-h-screen">
        <h1 className="text-3xl font-bold text-center text-ecotani-green my-8">
          Keranjang Belanja
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <img
              src={cartIcon}
              alt="Keranjang Kosong"
              className="mx-auto w-40 h-auto mb-6"
            />
            <h2 className="text-2xl font-semibold text-gray-700">
              Keranjang Anda Masih Kosong
            </h2>
            <p className="text-gray-500 mt-2">
              Yuk, cari produk limbah daur ulang pilihanmu!
            </p>
            <Link
              to="/"
              className="mt-4 inline-block bg-ecotani-green text-white py-3 px-8 rounded-full font-semibold hover:bg-green-700 transition-colors"
            >
              Mulai Belanja
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-8">
            {/* Kolom Kiri: Daftar Produk */}
            <div className="col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-6 rounded-lg shadow-md flex items-center gap-6"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-grow">
                    <h2 className="text-xl font-bold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-ecotani-green font-semibold mt-1">
                      Rp{item.price.toLocaleString('id-ID')}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-8 h-8 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="font-semibold">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-800">
                      Rp{(item.price * item.quantity).toLocaleString('id-ID')}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 mt-2 text-sm hover:underline"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Kolom Kanan: Ringkasan Belanja */}
            <div className="col-span-1 bg-gray-100 p-6 rounded-lg shadow-md h-fit">
              <h2 className="text-2xl font-bold mb-4">Ringkasan Belanja</h2>
              <div className="flex justify-between items-center mb-4 text-lg">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-bold text-ecotani-green">
                  Rp{subtotal.toLocaleString('id-ID')}
                </span>
              </div>
              <div className="flex justify-between items-center mb-6 text-sm text-gray-500">
                <span>Total Item</span>
                <span>{cartItems.length}</span>
              </div>
              <button className="w-full bg-ecotani-green text-white py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">
                Lanjut ke Pembayaran
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CartPage;