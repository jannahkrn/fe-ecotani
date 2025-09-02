import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Tambahkan useNavigate

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Simulasi login berhasil. Anggap saja validasi sudah sukses.
    // Panggil fungsi onLogin dari App.jsx
    onLogin('Alif');
    // Arahkan ke halaman utama
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans">
      <div className="text-center mb-8">
        <div className="flex justify-center items-center mb-2">
          <img src="/src/assets/logo.png" alt="Ecotani Logo" className="h-10" />
        </div>
        <p className="text-sm text-gray-600">Platform Jual Beli Limbah</p>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Selamat Datang Kembali!</h1>
        <p className="text-gray-600 max-w-sm">Masuk ke akun Anda dan lanjutkan kontribusi untuk lingkungan yang lebih bersih dan berkelanjutan.</p>
      </div>

      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Masuk ke Akun</h2>
        <p className="text-center text-gray-500 mb-6">Masukkan email dan password Anda untuk melanjutkan</p>
        
        {/* Tambahkan onSubmit ke form */}
        <form className="space-y-6" onSubmit={handleLoginSubmit}> 
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="janjun@example.com"
              className="mt-1 block w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-ecotani-green"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Masukkan password"
              className="mt-1 block w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-ecotani-green"
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-3 bg-ecotani-green text-white font-bold rounded-full transition-colors hover:bg-green-700"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Belum punya akun? <Link to="/register" className="font-semibold text-ecotani-green hover:underline">Daftar Sekarang</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;