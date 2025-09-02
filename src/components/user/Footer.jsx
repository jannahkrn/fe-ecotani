import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-12 mt-12 font-sans">
      <div className="container mx-auto">
        <div className="flex justify-between flex-wrap pb-8 mb-4">
          <div className="flex-1 min-w-[200px] mr-5 mb-5">
            <h4 className="text-ecotani-green text-2xl font-bold mb-4">Ecotani</h4>
            <p className="text-sm text-gray-700">Platform jual beli limbah yang mendukung ekonomi sirkular dan lingkungan berkelanjutan.</p>
          </div>
          <div className="flex-1 min-w-[150px] mr-5 mb-5">
            <h4 className="text-ecotani-green text-lg font-semibold mb-4">Tautan Cepat</h4>
            <ul className="list-none p-0 m-0 text-sm">
              <li className="mb-2"><a href="#" className="text-gray-700 hover:text-ecotani-green">Home</a></li>
              <li className="mb-2"><a href="#" className="text-gray-700 hover:text-ecotani-green">About</a></li>
              <li className="mb-2"><a href="#" className="text-gray-700 hover:text-ecotani-green">Citizen Science</a></li>
              <li className="mb-2"><a href="#" className="text-gray-700 hover:text-ecotani-green">Help</a></li>
            </ul>
          </div>
          <div className="flex-1 min-w-[150px] mr-5 mb-5">
            <h4 className="text-ecotani-green text-lg font-semibold mb-4">Layanan Kami</h4>
            <ul className="list-none p-0 m-0 text-sm">
              <li className="mb-2"><a href="#" className="text-gray-700 hover:text-ecotani-green">Jual Limbah</a></li>
              <li className="mb-2"><a href="#" className="text-gray-700 hover:text-ecotani-green">Beli Bahan Daur Ulang</a></li>
              <li className="mb-2"><a href="#" className="text-gray-700 hover:text-ecotani-green">Konsultasi Lingkungan</a></li>
              <li className="mb-2"><a href="#" className="text-gray-700 hover:text-ecotani-green">Edukasi Lingkungan</a></li>
            </ul>
          </div>
          <div className="flex-1 min-w-[200px] mb-5">
            <h4 className="text-ecotani-green text-lg font-semibold mb-4">Kontak</h4>
            <div className="flex items-center mb-2">
              <span className="text-ecotani-green mr-2">✉️</span>
              <p className="text-sm text-gray-700">ecotani@gmail.com</p>
            </div>
            <div className="flex items-center mb-2">
              <span className="text-ecotani-green mr-2">📞</span>
              <p className="text-sm text-gray-700">+62 856-9231-7178</p>
            </div>
            <div className="flex items-start">
              <span className="text-ecotani-green mr-2">📍</span>
              <p className="text-sm text-gray-700">Bogor, Jawa Barat, Indonesia</p>
            </div>
          </div>
        </div>
        <div className="text-center pt-5 text-sm border-t border-gray-300">
          <p>© 2025 Ecotani. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;