import React, { useState } from 'react';

const CitizenScience = () => {
  const [activeCitizenTab, setActiveCitizenTab] = useState('Gambaran Umum');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    wasteName: '',
    location: '',
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
      weight: '',
    });
  };

  const renderCitizenScienceContent = () => {
    switch (activeCitizenTab) {
      case 'Gambaran Umum':
        return (
          <div>
            <h3 className="text-xl font-bold mb-2">Gambaran Umum Proyek Citizen Science</h3>
            <p className="text-gray-700 leading-relaxed">
              Proyek Citizen Science Ecotani mengajak Anda untuk menjadi bagian dari solusi lingkungan. Dengan berpartisipasi, Anda akan membantu mengumpulkan data penting tentang jenis dan jumlah limbah yang ada di komunitas Anda. Data ini sangat berharga bagi para peneliti dan ahli lingkungan untuk memahami tren polusi, mengevaluasi dampak program daur ulang, dan merumuskan kebijakan yang lebih efektif.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Partisipasi Anda, sekecil apa pun, akan memberikan dampak besar. Anda bisa menginput data sampah dari rumah, mengamati lingkungan sekitar, atau membantu memverifikasi data yang dikumpulkan oleh pengguna lain. Setiap data yang Anda berikan akan berkontribusi pada bank data ilmiah yang lebih besar dan membuka jalan bagi penemuan baru dalam ilmu lingkungan.
            </p>
          </div>
        );
      case 'Input Data Sampah':
        if (showConfirmation) {
          return (
            <div className="p-4 flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24 text-ecotani-green">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
              </svg>
              <h3 className="text-3xl font-bold mt-4 text-ecotani-green">Data Sampah Berhasil Dikirim</h3>
              <p className="text-gray-700 mt-2">Data Anda akan membantu prediksi volume sampah.</p>
            </div>
          );
        }
        return (
          <div className="p-4">
            <h3 className="text-xl font-bold mb-4">Input Data Volume Sampah</h3>
            <div className="bg-green-100 border border-green-300 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">Data yang Akan Dikumpulkan</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>Nama limbah</li>
                <li>Lokasi pengamatan: Jakarta Pusat, Menteng, Gambir, Tanah Abang, dan lain-lain</li>
                <li>Berat sampah dalam kilogram</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="wasteName">Nama Limbah</label>
                <input
                  type="text"
                  id="wasteName"
                  placeholder="Nama Limbah"
                  value={formData.wasteName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ecotani-green"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="location">Lokasi Pengamatan</label>
                <input
                  type="text"
                  id="location"
                  placeholder="Lokasi Pengamatan"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ecotani-green"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="weight">Berat Sampah (kg)</label>
              <input
                type="number"
                id="weight"
                placeholder="Berat Sampah (kg)"
                value={formData.weight}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ecotani-green"
              />
            </div>
            <div className="text-right">
              <button 
                onClick={handleSaveData}
                className="bg-ecotani-green text-white py-2 px-6 rounded-full font-semibold transition-colors hover:bg-green-700"
              >
                Simpan
              </button>
            </div>
          </div>
        );
      case 'Lihat Prediksi':
        return (
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex flex-col text-left">
                <h3 className="text-2xl font-bold text-gray-800">Prediksi Volume Sampah</h3>
                <p className="text-gray-600 text-sm">Prediksi volume sampah area Jabodetabekjur</p>
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
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Citizen Science</h2>
          <p className="text-gray-600">
            Berpartisipasi dalam proyek-proyek penelitian lingkungan.
          </p>
        </div>
      </div>
      
      <div className="flex justify-center mt-5">
        {['Gambaran Umum', 'Input Data Sampah', 'Lihat Prediksi'].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveCitizenTab(tab);
              setShowConfirmation(false);
            }}
            className={`px-5 pb-2 text-base font-semibold transition-colors ${
              activeCitizenTab === tab
                ? 'text-ecotani-green border-b-2 border-ecotani-green'
                : 'text-gray-500 hover:text-ecotani-green'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-md mt-5 text-left">
        {renderCitizenScienceContent()}
      </div>
    </div>
  );
};

export default CitizenScience;
