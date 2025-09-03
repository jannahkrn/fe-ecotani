import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { FaShoppingCart, FaUserCircle, FaComments, FaSignOutAlt } from "react-icons/fa";

const Navbar = ({ cartItems = [], hasNewChat = true }) => { 
  const { isLoggedIn, userName, handleLogout } = useContext(AuthContext); 
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };
  
  return (
    <nav className="bg-white shadow-md py-4 font-sans">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo dan Tautan Navigasi */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-2xl font-bold text-gray-800">ECOTANI</Link>
          <div className="hidden md:flex gap-4">
            <Link to="/" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Beranda</Link>
            <Link to="/about" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Tentang</Link>
            <Link to="/citizen-science" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Sains Warga</Link>
            <Link to="/help" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Bantuan</Link>
          </div>
        </div>

        {/* Formulir Pencarian dan Ikon */}
        <div className="flex items-center gap-4">
          <form onSubmit={handleSearchSubmit} className="flex-grow">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari..."
              className="px-4 py-2 border rounded-full w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </form>

          {/* Ikon */}
          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative text-gray-600 hover:text-green-600 transition-colors">
              <FaShoppingCart className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>

            <Link to="/chat" className="relative text-gray-600 hover:text-green-600 transition-colors">
              <FaComments className="h-6 w-6" />
              {hasNewChat && (
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full animate-ping-once"></span>
              )}
            </Link>

            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <Link to="/profile" className="text-gray-600 hover:text-green-600 transition-colors">
                  <FaUserCircle className="h-6 w-6" />
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-red-500 transition-colors"
                  aria-label="Logout"
                >
                  <FaSignOutAlt className="h-6 w-6" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login" className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors font-medium">
                  Masuk
                </Link>
                <Link to="/register" className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300 transition-colors font-medium">
                  Daftar
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
