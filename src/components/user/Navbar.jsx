import React from 'react';

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="w-full font-sans">
      {/* Top Bar */}
      <div className="bg-ecotani-green text-white py-2 px-12 flex justify-between items-center text-sm">
        <p>Hubungi Kami: 0812-345-678 | ecotani@gmail.com</p>
        <div className="flex gap-2">
          {/* Kamu bisa tambahkan ikon media sosial di sini */}
        </div>
      </div>
      {/* Main Nav */}
      <div className="bg-white flex justify-between items-center py-4 px-12 shadow-md">
        <div className="navbar-logo">
          <img src="/src/assets/logo.png" alt="Ecotani Logo" className="h-10" />
        </div>
        <ul className="flex gap-8 m-0 p-0 list-none">
          <li><a href="#home" className="text-gray-800 font-medium hover:text-ecotani-green transition-colors">Beranda</a></li>
          <li><a href="#edukasi" className="text-gray-800 font-medium hover:text-ecotani-green transition-colors">Edukasi</a></li>
          <li><a href="#komunitas" className="text-gray-800 font-medium hover:text-ecotani-green transition-colors">Komunitas</a></li>
        </ul>
        <div className="flex items-center gap-5">
          <div className="flex gap-4 text-xl">
            <span className="cursor-pointer">🔍</span>
            <span className="cursor-pointer">🛒</span>
          </div>
          {isLoggedIn ? (
            <div className="font-semibold text-ecotani-green">
              <p>Hai, Alif</p>
            </div>
          ) : (
            <div className="flex gap-3">
              <button className="py-2 px-5 rounded-full border-2 border-ecotani-green text-ecotani-green font-semibold transition-colors hover:bg-ecotani-green hover:text-white">Masuk</button>
              <button className="py-2 px-5 rounded-full bg-ecotani-green text-white font-semibold transition-colors hover:bg-green-700">Daftar</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;