// src/components/user/Navbar.jsx

import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import AuthContext from '../../context/AuthContext';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';

const Navbar = ({ cartItems }) => {
    const { isLoggedIn, userName } = useContext(AuthContext);

    const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="bg-white shadow-md py-4 font-sans">
            <div className="container mx-auto px-12 flex justify-between items-center">
                {/* Logo dan Navigasi Kiri */}
                <div className="flex items-center space-x-8">
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/src/assets/logo.png" alt="Ecotani Logo" className="h-8" />
                        <span className="text-xl font-bold text-ecotani-green">ECOTANI</span>
                    </Link>
                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/" className="text-gray-600 hover:text-ecotani-green transition-colors font-medium">
                            Home
                        </Link>
                        <Link to="/about" className="text-gray-600 hover:text-ecotani-green transition-colors font-medium">
                            About
                        </Link>
                        <Link to="/citizen-science" className="text-gray-600 hover:text-ecotani-green transition-colors font-medium">
                            Citizen Science
                        </Link>
                        <Link to="/help" className="text-gray-600 hover:text-ecotani-green transition-colors font-medium">
                            Help
                        </Link>
                    </div>
                </div>

                {/* Search, Cart, dan User */}
                <div className="flex items-center gap-6">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Cari..."
                            className="bg-gray-100 rounded-full py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-ecotani-green transition-all"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>

                    <Link to="/cart" className="relative text-gray-600 hover:text-ecotani-green transition-colors">
                        <FaShoppingCart className="h-6 w-6" />
                        {totalItemsInCart > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {totalItemsInCart}
                            </span>
                        )}
                    </Link>

                    {isLoggedIn ? (
                        <Link to="/profile" className="flex items-center gap-2 text-gray-600 hover:text-ecotani-green transition-colors">
                            <FaUserCircle className="h-6 w-6" />
                            <span className="font-semibold hidden sm:inline">Hai, {userName}</span>
                        </Link>
                    ) : (
                        <Link to="/login" className="flex items-center gap-2 text-gray-600 hover:text-ecotani-green transition-colors">
                            <FaUserCircle className="h-6 w-6" />
                            <span className="font-semibold hidden sm:inline">Masuk</span>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;