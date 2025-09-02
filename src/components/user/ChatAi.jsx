import React from 'react';

const ChatAI = ({ onClose }) => {
  return (
    <div className="fixed bottom-24 right-5 z-50 w-80 bg-white rounded-lg shadow-xl overflow-hidden font-sans">
      {/* Chat Header */}
      <div className="bg-white p-4 border-b border-gray-200 flex items-center">
        <div className="flex-shrink-0">
          <img src="/src/assets/zanu.png" alt="Zanu" className="w-10 h-10" />
        </div>
        <div className="ml-3">
          <h5 className="text-lg font-bold text-gray-800">Zanu</h5>
          <p className="text-sm text-gray-500">Asisten AI untuk Ecotani • Aktif 24/7</p>
        </div>
        <button onClick={onClose} className="ml-auto text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      {/* Chat Body */}
      <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
        {/* Pesan dari AI */}
        <div className="flex items-start gap-2.5">
          <img src="/src/assets/zanu.png" alt="Zanu" className="w-8 h-8 rounded-full" />
          <div className="flex flex-col w-full max-w-[200px] leading-1.5 p-4 bg-gray-100 rounded-e-xl rounded-es-xl">
            <p className="text-sm font-normal text-gray-900">Halo! Saya Zanu, asisten AI untuk Ecotani. Saya siap membantu Anda dengan pertanyaan seputar jual beli limbah daur ulang. Ada yang bisa saya bantu?</p>
            <span className="text-xs text-gray-500 mt-2">09:01</span>
          </div>
        </div>
        <div className="flex justify-start gap-2.5">
          <button className="py-2 px-3 text-sm font-medium text-white bg-ecotani-green rounded-xl">Cara Menjual Limbah</button>
          <button className="py-2 px-3 text-sm font-medium text-white bg-ecotani-green rounded-xl">Kategori Limbah</button>
          <button className="py-2 px-3 text-sm font-medium text-white bg-ecotani-green rounded-xl">Apa itu Limbah?</button>
        </div>
        {/* Pesan dari User */}
        <div className="flex items-start justify-end gap-2.5">
          <div className="flex flex-col w-full max-w-[200px] leading-1.5 p-4 bg-gray-200 rounded-s-xl rounded-ee-xl">
            <p className="text-sm font-normal text-gray-900">Apa itu Limbah?</p>
            <span className="text-xs text-gray-500 mt-2 text-right">09:01</span>
          </div>
        </div>
        {/* Pesan dari AI */}
        <div className="flex items-start gap-2.5">
          <img src="/src/assets/zanu.png" alt="Zanu" className="w-8 h-8 rounded-full" />
          <div className="flex flex-col w-full max-w-[200px] leading-1.5 p-4 bg-gray-100 rounded-e-xl rounded-es-xl">
            <p className="text-sm font-normal text-gray-900">Limbah adalah sisa atau buangan dari suatu kegiatan manusia maupun proses alam yang sudah tidak terpakai lagi dan dianggap tidak memiliki nilai ekonomis. Limbah bisa berasal dari rumah tangga, industri, pertanian, maupun aktivitas lainnya. Ada lagi yang bisa saya bantu?</p>
            <span className="text-xs text-gray-500 mt-2">09:01</span>
          </div>
        </div>
      </div>
      {/* Chat Input */}
      <div className="flex items-center p-4 border-t border-gray-200">
        <input
          type="text"
          placeholder="Tulis pesan..."
          className="flex-grow py-2 px-4 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-ecotani-green"
        />
        <button className="ml-3 text-ecotani-green hover:text-green-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatAI;