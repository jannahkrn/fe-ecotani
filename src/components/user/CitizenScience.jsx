import React, { useState } from 'react';

const CitizenScience = () => {
  const [activeCitizenTab, setActiveCitizenTab] = useState('Gambaran Umum');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    wasteName: '',
    location: '',
    depo: '',
    weight: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSaveData = () => {
    setShowConfirmation(true);
    setFormData({
      wasteName: '',
      location: '',
      depo: '',
      weight: '',
    });
  };

  const renderCitizenScienceContent = () => {
    switch (activeCitizenTab) {
      case 'Gambaran Umum':
        return (
          <div className="p-4 border border-gray-300 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Apa Itu Citizen Science?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Citizen Science atau Sains Warga adalah praktik penelitian ilmiah yang melibatkan partisipasi masyarakat umum dalam pengumpulan, analisis, dan interpretasi data. Di Ecotani, kami mengajak Anda untuk berkontribusi dalam penelitian lingkungan yang berdampak pada kebijakan dan kesadaran masyarakat tentang isu-isu ekologi.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
              <li>Pengumpulan data lingkungan secara kolaboratif</li>
              <li>Edukasi dan peningkatan literasi sains</li>
              <li>Kontribusi pada penelitian akademik</li>
              <li>Pembangunan komunitas peduli lingkungan</li>
            </ul>

            <h3 className="text-xl font-bold mb-4">Cara Berpartisipasi</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800">1. Daftar dan Input Limbah</h4>
                <p className="text-gray-600">Buat akun dan input limbah untuk menambahkan data limbah Tanjung Pinang.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">2. Input Limbah</h4>
                <p className="text-gray-600">Anda bisa menambahkan jenis sampah apapun.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">3. Kumpulkan Data</h4>
                <p className="text-gray-600">Lakukan pengamatan dan kirim data melalui input limbah.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">4. Dapatkan Prediksi</h4>
                <p className="text-gray-600">Anda bisa melihat prediksi sehari-hari sampah di Tanjung Pinang, lalu input data limbah dan lihat prediksi.</p>
              </div>
            </div>
          </div>
        );
      case 'Input Data Sampah':
        if (showConfirmation) {
          return (
            <div className="p-4 border border-gray-300 rounded-lg flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24 text-ecotani-green">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
              </svg>
              <h3 className="text-3xl font-bold mt-4 text-ecotani-green">Data Sampah Berhasil Dikirim</h3>
              <p className="text-gray-700 mt-2">Data Anda akan membantu prediksi volume sampah.</p>
            </div>
          );
        }
        return (
          <div className="p-4 border border-gray-300 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Input Data Volume Sampah</h3>
            <div className="bg-green-100 border border-green-300 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">Data yang Akan Dikumpulkan</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>Kategori limbah</li>
                <li>Lokasi pengamatan: Kepulauan Riau, Kota Tanjung Pinang</li>
                <li>Depo sampah (TPS)</li>
                <li>Berat sampah dalam rentang kilogram</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="wasteName">
                  Kategori Limbah
                </label>
                <select
                  id="wasteName"
                  value={formData.wasteName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ecotani-green"
                >
                  <option value="">-- Pilih Kategori Limbah --</option>
                  <option value="Organik">Organik</option>
                  <option value="Anorganik">Anorganik</option>
                  <option value="B3">B3 (Bahan Berbahaya & Beracun)</option>
                  <option value="Elektronik">Elektronik</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="location">
                  Lokasi Pengamatan
                </label>
                <select
                  id="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ecotani-green"
                >
                  <option value="">-- Pilih Lokasi --</option>
                  <option value="Tanjung Pinang">Kepulauan Riau, Kota Tanjung Pinang</option>
                </select>
              </div>
            </div>

            {/* Depo TPS */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="depo">
                Depo Sampah (TPS)
              </label>
              <select
                id="depo"
                value={formData.depo}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ecotani-green"
              >
                <option value="">-- Pilih Depo Sampah --</option>
                <option value="TPS Depan SMAN 5">TPS Depan SMAN 5</option>
                <option value="TPS JL. H Agus Salim">TPS JL. H Agus Salim</option>
                <option value="TPS Jl. H. Agus Salim">TPS Jl. H. Agus Salim</option>
                <option value="TPS Jl. Sulaiman Abdullah">TPS Jl. Sulaiman Abdullah</option>
                <option value="TPS JL. Kesehatan">TPS JL. Kesehatan</option>
                <option value="TPS JL. Yos Sudarso">TPS JL. Yos Sudarso</option>
                <option value="TPS Jl. Kamboja">TPS Jl. Kamboja</option>
                <option value="TPS JL.Diponegoro">TPS JL.Diponegoro</option>
                <option value="TPS JL. Gudang Minyak">TPS JL. Gudang Minyak</option>
                <option value="TPS JL. Yos Sudarso">TPS JL. Yos Sudarso</option>
                <option value="TPS Jl. Rawasari">TPS Jl. Rawasari</option>
                <option value="TPS JL. WR Supratman">TPS JL. WR Supratman</option>
                <option value="TPS JL. Bintan Center">TPS JL. Bintan Center</option>
                <option value="TPS Jl. Abadi">TPS Jl. Abadi</option>
                <option value="TPS Taman persihatian">TPS Taman persihatian</option>
                <option value="TPS Kantor Walikota">TPS Kantor Walikota</option>
                <option value="TPS Jl. Brigjen Katamso">TPS Jl. Brigjen Katamso</option>
                <option value="TPS Pembakaran Mayat">TPS Pembakaran Mayat</option>
                <option value="TPS Depan SMPN 6">TPS Depan SMPN 6</option>
                <option value="TPS Jembatan Batu 8 Atas">TPS Jembatan Batu 8 Atas</option>
                <option value="TPS Jl. Seijang">TPS Jl. Seijang</option>
              </select>
            </div>

            {/* Berat sampah */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="weight">
                Berat Sampah (kg)
              </label>
              <select
                id="weight"
                value={formData.weight}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ecotani-green"
              >
                <option value="">-- Pilih Berat Sampah --</option>
                <option value="0-1">0 kg - 1 kg</option>
                <option value="1-2">1 kg - 2 kg</option>
                <option value="2-3">2 kg - 3 kg</option>
                <option value="3-4">3 kg - 4 kg</option>
                <option value="4-5">4 kg - 5 kg</option>
                <option value=">5">Lebih dari 5 kg</option>
              </select>
            </div>
            <div className="text-right">
              <button
                onClick={handleSaveData}
                className="bg-[#43703A] text-white py-2 px-6 rounded-full font-semibold transition-colors hover:bg-green-700"
              >
                Simpan
              </button>
            </div>
          </div>
        );
      case 'Lihat Prediksi':
        return (
          <div className="p-4 border border-gray-300 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <div className="flex flex-col text-left">
                <h3 className="text-2xl font-bold text-gray-800">Prediksi Volume Sampah</h3>
                <p className="text-gray-600 text-sm">Prediksi volume sampah area Tanjung Pinang</p>
                <p className="text-gray-400 text-xs">1.245 data points</p>
              </div>
              <span className="bg-red-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                MENINGKAT
              </span>
            </div>

            <div className="flex justify-around items-center mt-8">
              <div className="text-center">
                <h4 className="text-5xl font-bold text-gray-800">314.5 kg</h4>
                <p className="text-gray-600 mt-1">Minggu ini</p>
              </div>
              <div className="h-20 w-px bg-gray-300"></div>
              <div className="text-center">
                <h4 className="text-5xl font-bold text-ecotani-green">345.7 kg</h4>
                <p className="text-gray-600 mt-1">Prediksi Minggu Depan</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Header Utama */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Berkontribusi Untuk <span className="text-[#43703A]">Penelitian Lingkungan</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Bergabunglah dengan komunitas peneliti warga untuk mengumpulkan
          data lingkungan, belajar tentang isu ekologi, dan berkontribusi
          pada penelitian ilmiah yang berdampak.
        </p>
      </div>

      {/* Tombol Aksi */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveCitizenTab('Input Data Sampah')}
          className="bg-[#43703A] text-white font-bold py-3 px-8 rounded shadow-lg hover:bg-[#345a2e] transition-colors"
        >
          Mulai Berpartisipasi
        </button>
        <button
          onClick={() => setActiveCitizenTab('Gambaran Umum')}
          className="bg-[#47241C] text-white font-bold py-3 px-8 rounded shadow-lg hover:bg-[#592013] transition-colors"
        >
          Pelajari Lebih Lanjut
        </button>
      </div>

      {/* Statistik */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-center">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-bold text-[#43703A]">15</h3>
          <p className="text-gray-600">Proyek Aktif</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-bold text-[#43703A]">3,200+</h3>
          <p className="text-gray-600">Peneliti Warga</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-bold text-[#43703A]">120</h3>
          <p className="text-gray-600">Lokasi Penelitian</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-bold text-[#43703A]">50,000+</h3>
          <p className="text-gray-600">Data Terkumpul</p>
        </div>
      </div>
      
      {/* Navigasi tab */}
      <div className="flex justify-center gap-20 mb-4">
        {['Gambaran Umum', 'Input Data Sampah', 'Lihat Prediksi'].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveCitizenTab(tab);
              setShowConfirmation(false);
            }}
            className={`text-base font-semibold transition-all duration-300
              ${
                activeCitizenTab === tab
                  ? 'bg-[#47241C] text-white py-2 px-20 rounded-full shadow-md'
                  : 'text-[#47241C]'
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>
      
      {/* Konten sesuai tab yang aktif */}
      <div>
        {renderCitizenScienceContent()}
      </div>
    </div>
  );
};

export default CitizenScience;
