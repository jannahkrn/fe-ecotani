// src/components/user/PreferensiModal.jsx
import React, { useState } from "react";

const PreferensiModal = ({ onClose, onSave }) => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const wasteTypes = [
    "Plastik",
    "Kertas",
    "Logam",
    "Kaca",
    "Elektronik",
    "Tekstil",
    "Organik",
    "Baterai",
  ];

  const handleSelect = (type) => {
    setSelectedInterests((prevSelected) =>
      prevSelected.includes(type)
        ? prevSelected.filter((item) => item !== type)
        : [...prevSelected, type]
    );
  };

  const handleSave = () => {
    onSave(selectedInterests);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-lg w-full text-center shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Preferensi Anda
        </h2>
        <p className="text-gray-600 mb-6">Rekomendasi produk untuk Anda</p>
        <div className="mb-8">
          <p className="font-semibold text-gray-700 mb-4">
            Jenis Limbah yang Anda Minati
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Pilih kategori limbah yang ingin Anda jual atau beli
          </p>
          <div className="grid grid-cols-2 gap-4">
            {wasteTypes.map((type) => (
              <button
                key={type}
                onClick={() => handleSelect(type)}
                className={`py-3 px-6 rounded-xl border-2 font-medium transition-all duration-200 ${
                  selectedInterests.includes(type)
                    ? "bg-[#43703A] border-[#43703A] text-white"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={handleSave}
          className="bg-[#43703A] text-white font-bold py-3 px-12 rounded-full hover:bg-green-800 transition"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default PreferensiModal;