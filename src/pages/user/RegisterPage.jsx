import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png"; // ✅ Import logo

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Di sini kamu bisa tambahkan logika untuk mengirim data ke API backend
    // Setelah proses registrasi berhasil, arahkan pengguna ke halaman login
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white font-sans p-4 md:p-10">
      <div className="flex flex-col items-center justify-center w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-2">
            {/* ✅ Ganti src jadi pakai import */}
            <img src={logo} alt="Ecotani Logo" className="h-10" />
          </div>
          <p className="text-sm text-gray-600">Platform Jual Beli Limbah</p>
        </div>

        {/* Teks Pengantar yang dipindahkan */}
        <div className="text-left mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">
            Bergabunglah dengan Komunitas Peduli Lingkungan
          </h1>
          <p className="text-gray-600 text-lg">
            Daftar sekarang dan mulai berkontribusi untuk ekonomi sirkular yang berkelanjutan.
          </p>
        </div>
        
        {/* Form Registrasi */}
        <div className="bg-white p-5 rounded border border-gray-300 w-full">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Informasi Personal</h2>
          <p className="text-center text-gray-500 mb-6">Isi data diri yang tertera dibawah ini.</p>
          
          <form className="grid grid-cols-1 gap-y-6" onSubmit={handleRegisterSubmit}>
            <div>
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
            <div>
              <label className="block text-sm font-medium text-gray-700">Alamat</label>
              <input
                type="text"
                placeholder="Jl. Contoh 123"
                className="mt-1 block w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-ecotani-green"
              />
            </div>

            {/* ✅ Dropdown Provinsi */}
            <div>
  <label className="block text-sm font-medium text-gray-700">Provinsi</label>
  <select
    className="mt-1 block w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-ecotani-green"
  >
    <option value="">Pilih Provinsi</option>
    {/* Sumatera */}
    <option value="Aceh">Aceh</option>
    <option value="Sumatera Utara">Sumatera Utara</option>
    <option value="Sumatera Barat">Sumatera Barat</option>
    <option value="Riau">Riau</option>
    <option value="Kepulauan Riau">Kepulauan Riau</option>
    <option value="Jambi">Jambi</option>
    <option value="Sumatera Selatan">Sumatera Selatan</option>
    <option value="Bangka Belitung">Bangka Belitung</option>
    <option value="Bengkulu">Bengkulu</option>
    <option value="Lampung">Lampung</option>

    {/* Jawa */}
    <option value="DKI Jakarta">DKI Jakarta</option>
    <option value="Jawa Barat">Jawa Barat</option>
    <option value="Banten">Banten</option>
    <option value="Jawa Tengah">Jawa Tengah</option>
    <option value="DI Yogyakarta">DI Yogyakarta</option>
    <option value="Jawa Timur">Jawa Timur</option>

    {/* Bali & Nusa Tenggara */}
    <option value="Bali">Bali</option>
    <option value="Nusa Tenggara Barat">Nusa Tenggara Barat</option>
    <option value="Nusa Tenggara Timur">Nusa Tenggara Timur</option>

    {/* Kalimantan */}
    <option value="Kalimantan Barat">Kalimantan Barat</option>
    <option value="Kalimantan Tengah">Kalimantan Tengah</option>
    <option value="Kalimantan Selatan">Kalimantan Selatan</option>
    <option value="Kalimantan Timur">Kalimantan Timur</option>
    <option value="Kalimantan Utara">Kalimantan Utara</option>

    {/* Sulawesi */}
    <option value="Sulawesi Utara">Sulawesi Utara</option>
    <option value="Gorontalo">Gorontalo</option>
    <option value="Sulawesi Tengah">Sulawesi Tengah</option>
    <option value="Sulawesi Barat">Sulawesi Barat</option>
    <option value="Sulawesi Selatan">Sulawesi Selatan</option>
    <option value="Sulawesi Tenggara">Sulawesi Tenggara</option>

    {/* Maluku & Papua */}
    <option value="Maluku">Maluku</option>
    <option value="Maluku Utara">Maluku Utara</option>
    <option value="Papua">Papua</option>
    <option value="Papua Tengah">Papua Tengah</option>
    <option value="Papua Pegunungan">Papua Pegunungan</option>
    <option value="Papua Selatan">Papua Selatan</option>
    <option value="Papua Barat">Papua Barat</option>
    <option value="Papua Barat Daya">Papua Barat Daya</option>
  </select>
</div>


            <div className="text-xs text-gray-600 mt-4">
              <p>
                Dengan ini saya menyatakan telah membaca, memahami, dan menyetujui Syarat dan Ketentuan serta Kebijakan Privasi Ecotani. Saya juga menyatakan bersedia menerima informasi mengenai produk, layanan, maupun promosi yang disampaikan oleh Ecotani.
              </p>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 bg-[#43703A] text-white font-bold rounded-full transition-colors hover:bg-[#365a2e]"
              >
                Daftar Sekarang
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
