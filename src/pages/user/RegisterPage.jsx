import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Di sini kamu bisa tambahkan logika untuk mengirim data ke API backend
    // Setelah proses registrasi berhasil, arahkan pengguna ke halaman login
    navigate('/login');
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
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Bergabunglah dengan Komunitas Peduli Lingkungan</h1>
        <p className="text-gray-600 max-w-lg">Daftar sekarang dan mulai berkontribusi untuk ekonomi sirkular yang berkelanjutan.</p>
      </div>

      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Informasi Personal</h2>
        <p className="text-center text-gray-500 mb-6">Isi data diri yang tertera dibawah ini.</p>
        
        <form className="grid grid-cols-2 gap-x-10 gap-y-6" onSubmit={handleRegisterSubmit}>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
            <input
              type="text"
              placeholder="Nama Lengkap Anda"
              className="mt-1 block w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-ecotani-green"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="janjun@example.com"
              className="mt-1 block w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-ecotani-green"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">No Telepon</label>
            <input
              type="tel"
              placeholder="+62 123 456 789"
              className="mt-1 block w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-ecotani-green"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Minimal 8 karakter"
              className="mt-1 block w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-ecotani-green"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Konfirmasi Password</label>
            <input
              type="password"
              placeholder="Ulangi password"
              className="mt-1 block w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-ecotani-green"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Alamat</label>
            <input
              type="text"
              placeholder="Jl. Contoh 123"
              className="mt-1 block w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-ecotani-green"
            />
          </div>
          <div className="col-span-2 text-xs text-gray-600 mt-4">
            <p>Dengan ini saya menyatakan telah membaca, memahami, dan menyetujui Syarat dan Ketentuan serta Kebijakan Privasi Ecotani. Saya juga menyatakan bersedia menerima informasi mengenai produk, layanan, maupun promosi yang disampaikan oleh Ecotani.</p>
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full py-3 bg-ecotani-green text-white font-bold rounded-full transition-colors hover:bg-green-700"
            >
              Daftar Sekarang
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;