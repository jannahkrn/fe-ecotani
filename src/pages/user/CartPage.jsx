import React from "react";
import { Link } from "react-router-dom";
import botolImg from "../../assets/botol.jpg";
import logoImg from "../../assets/logo.png";
import zanuSadImg from "../../assets/zanu-sad.png";
import Footer from "../../components/user/Footer";

const CartPage = ({ cartItems, updateQuantity }) => {
  // Hitung subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Hapus item dengan set quantity ke 0
  const removeItem = (productId) => {
    updateQuantity(productId, 0);
  };

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      {/* Kontainer utama */}
      <div className="container mx-auto px-12 py-8 flex-grow">
        {/* Header / Title */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex items-center gap-4 mb-8">
          <img src={logoImg} alt="Ecotani Logo" className="h-8" />
          <div className="w-[1px] h-8 bg-gray-300 mx-2"></div>
          <h1 className="text-2xl font-bold text-[#43703a]">
            Keranjang Belanja
          </h1>
        </div>

        {/* Kondisi kalau keranjang kosong */}
        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <img
              src={zanuSadImg}
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
              className="mt-4 inline-block bg-[#43703a] text-white py-3 px-8 rounded-full font-semibold hover:bg-[#365e32] transition-colors"
            >
              Mulai Belanja
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Daftar produk */}
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

                {/* Detail produk */}
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
                      Rp{item.price.toLocaleString("id-ID")}/100 gram
                    </p>
                  </div>

                  {/* Kontrol jumlah */}
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600">Jumlah:</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                      className="w-8 h-8 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
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

                {/* Hapus & total harga */}
                <div className="flex-none flex flex-col justify-between items-end h-[136px]">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 text-sm hover:underline font-semibold"
                  >
                    Hapus
                  </button>
                  <p className="text-xl font-bold text-[#43703a]">
                    Rp{(item.price * item.quantity).toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
            ))}

            {/* Subtotal + Checkout */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-fit">
              <div className="flex justify-between items-center mb-4 text-lg">
                <span className="text-gray-600 font-semibold">Subtotal</span>
                <span className="font-bold text-[#43703a] text-xl">
                  Rp{subtotal.toLocaleString("id-ID")}
                </span>
              </div>

              <Link
                to="/checkout"
                className="block py-3 bg-[#43703a] text-white text-center font-semibold rounded-sm transition-colors hover:bg-[#365e32]"
              >
                Lanjut ke Pembayaran
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CartPage;
