import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; 
import AuthContext from "../../context/AuthContext";
import { FaSearch, FaShoppingCart, FaComments, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import logo from "../../assets/logo.png";

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
    <>
      {/* Navbar Fixed */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-100 py-3 font-sans">
        <div className="container mx-auto flex items-center justify-between px-6">
          {/* Logo dan Tautan Navigasi */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center cursor-pointer">
              <img 
                src={logo} 
                alt="ECOTANI Logo" 
                className="h-5 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'inline';
                }}
              />
              <span 
                className="text-3xl font-bold" 
                style={{ display: 'none', color: '#43703A' }}
              >
                🌱
              </span>
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:flex gap-6">
              <HashLink 
                to="/#hero-section"
                smooth
                className="relative font-medium py-2 group transition-all duration-300 hover:no-underline"
                style={{ color: '#43703A' }}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#43703A' }}></span>
              </HashLink>
              
              <HashLink 
                to="/#about-section"
                smooth
                className="relative font-medium py-2 group transition-all duration-300 hover:no-underline"
                style={{ color: '#43703A' }}
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#43703A' }}></span>
              </HashLink>
              
              <HashLink 
                to="/#citizen-science-section"
                smooth
                className="relative font-medium py-2 group transition-all duration-300 hover:no-underline"
                style={{ color: '#43703A' }}
              >
                Citizen Science
                <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#43703A' }}></span>
              </HashLink>
              
              <HashLink 
                to="/#help-section"
                smooth
                className="relative font-medium py-2 group transition-all duration-300 hover:no-underline"
                style={{ color: '#43703A' }}
              >
                Help
                <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#43703A' }}></span>
              </HashLink>
            </div>
          </div>

          {/* Search Bar dan Icons */}
          <div className="flex items-center gap-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder=""
                className="px-4 py-2 pr-10 border border-gray-300 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all duration-200"
              />
              <FaSearch 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 cursor-pointer" 
                style={{ color: '#43703A' }}
                onClick={handleSearchSubmit}
              />
            </form>

            <div className="flex items-center gap-3">
              <Link 
                to="/cart"
                className="relative transition-colors duration-200 p-2 hover:no-underline"
                style={{ color: '#43703A' }}
              >
                <FaShoppingCart className="h-5 w-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Link>

              <Link 
                to="/chat"
                className="relative transition-colors duration-200 p-2 hover:no-underline"
                style={{ color: '#43703A' }}
              >
                <FaComments className="h-5 w-5" />
                {hasNewChat && (
                  <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                )}
              </Link>

              {isLoggedIn ? (
                <div className="flex items-center gap-2">
                  <Link 
                    to="/profile"
                    className="flex items-center gap-2 hover:no-underline" 
                    style={{ color: '#43703A' }}
                  >
                    <FaUserCircle className="h-5 w-5" />
                    <span className="font-medium">Hai, {userName}</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-gray-600 hover:text-red-500 transition-colors ml-2"
                    aria-label="Logout"
                  >
                    <FaSignOutAlt className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Link 
                    to="/login"
                    className="px-4 py-2 rounded-full font-medium transition-all duration-200 hover:no-underline"
                    style={{ backgroundColor: '#43703A', color: '#FFED28' }}
                  >
                    Masuk
                  </Link>
                  <Link 
                    to="/register"
                    className="px-4 py-2 rounded-full font-medium transition-all duration-200 hover:no-underline"
                    style={{ backgroundColor: '#FFED28', color: '#43703A' }}
                  >
                    Daftar
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer untuk dorong konten turun */}
      <div className="h-16"></div> {/* sesuaikan dengan tinggi navbar */}
    </>
  );
};

export default Navbar;
