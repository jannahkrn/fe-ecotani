import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// Tambahkan userName sebagai prop
const Navbar = ({ isLoggedIn, userName }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchQuery}`);
  };

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
          <li><Link to="/" className="text-gray-800 font-medium hover:text-ecotani-green transition-colors">Beranda</Link></li>
          <li><a href="#" className="text-gray-800 font-medium hover:text-ecotani-green transition-colors">Edukasi</a></li>
          <li><a href="#" className="text-gray-800 font-medium hover:text-ecotani-green transition-colors">Komunitas</a></li>
          <li><a href="#" className="text-gray-800 font-medium hover:text-ecotani-green transition-colors">Bantuan</a></li>
        </ul>

        <div className="flex items-center gap-5">
          {/* Search Bar */}
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                placeholder="Cari..."
                className="py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-ecotani-green"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</button>
            </div>
          </form>

          <div className="flex gap-4 text-xl">
            <span className="cursor-pointer">🛒</span>
            <span className="cursor-pointer">💬</span>
          </div>
          
          {isLoggedIn ? (
            <Link to="/profile" className="font-semibold text-ecotani-green hover:underline">
              <p>Hai, {userName}</p>
            </Link>
          ) : (
            <div className="flex gap-3">
              <Link to="/login" className="py-2 px-5 rounded-full border-2 border-ecotani-green text-ecotani-green font-semibold transition-colors hover:bg-ecotani-green hover:text-white">Masuk</Link>
              <Link to="/register" className="py-2 px-5 rounded-full bg-ecotani-green text-white font-semibold transition-colors hover:bg-green-700">Daftar</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;