import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/user/Footer';
import Navbar from '../../components/user/Navbar';
import zanuSad from '../../assets/zanu-sad.png'; // Ganti dengan path ke gambar ZANU yang sedih

const MustLoginPage = () => {
  return (
    <div className="font-sans">
      <Navbar isLoggedIn={false} userName="" cartItems={[]} />

      {/* Main content area with controlled spacing */}
      <main className="flex justify-center items-center py-20 px-4">
        <div className="text-center">
          <img
            src={zanuSad}
            alt="Zanu Sad"
            className="mx-auto w-40 h-auto mb-6"
          />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            OPS!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Anda harus Masuk/Daftar untuk mengakses halaman ini.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              to="/login"
              className="py-3 px-8 rounded-full bg-ecotani-green text-white font-semibold transition-colors hover:bg-green-700"
            >
              Masuk
            </Link>
            <Link
              to="/register"
              className="py-3 px-8 rounded-full border-2 border-ecotani-green text-ecotani-green font-semibold transition-colors hover:bg-ecotani-green hover:text-white"
            >
              Daftar
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MustLoginPage;
