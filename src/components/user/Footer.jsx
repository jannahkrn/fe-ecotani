import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-12 mt-1 font-sans">
      <div className="container mx-auto">
        <div className="flex justify-between flex-wrap pb-8 mb-4">
          <div className="flex-1 min-w-[200px] mr-5 mb-5">
            <h4 className="text-[#43703A] text-3xl font-bold mb-4">Ecotani</h4>
            <p className="text-sm text-gray-700">
              Platform jual beli limbah yang mendukung ekonomi sirkular dan lingkungan berkelanjutan.
            </p>
          </div>

          {/* 🔹 Tautan Cepat */}
          <div className="flex-1 min-w-[150px] mr-5 mb-5">
            <h4 className="text-[#43703A] text-2xl font-semibold mb-4">Tautan Cepat</h4>
            <ul className="list-none p-0 m-0 text-sm space-y-2">
              <li>
                <a href="#hero-section" className="text-gray-700 hover:text-ecotani-green">
                  Home
                </a>
              </li>
              <li>
                <a href="#about-section" className="text-gray-700 hover:text-ecotani-green">
                  About
                </a>
              </li>
              <li>
                <a href="#citizen-science-section" className="text-gray-700 hover:text-ecotani-green">
                  Citizen Science
                </a>
              </li>
              <li>
                <a href="#help-section" className="text-gray-700 hover:text-ecotani-green">
                  Help
                </a>
              </li>
            </ul>
          </div>

          {/* 🔹 Layanan Kami */}
          <div className="flex-1 min-w-[150px] mr-5 mb-5">
            <h4 className="text-[#43703A] text-2xl font-semibold mb-4">Layanan Kami</h4>
            <ul className="list-none p-0 m-0 text-sm space-y-2">
              <li><span className="text-gray-700">Jual Limbah</span></li>
              <li><span className="text-gray-700">Beli Bahan Daur Ulang</span></li>
              <li><span className="text-gray-700">Konsultasi Lingkungan</span></li>
              <li><span className="text-gray-700">Edukasi Lingkungan</span></li>
            </ul>
          </div>

          {/* 🔹 Kontak */}
          <div className="flex-1 min-w-[200px] mb-5">
            <h4 className="text-[#43703A] text-2xl font-semibold mb-4">Kontak</h4>
            <div className="flex items-center mb-2">
              <Mail size={18} className="text-[#43703A] mr-2" />
              <p className="text-sm text-gray-700">ecotani@gmail.com</p>
            </div>
            <div className="flex items-center mb-2">
              <Phone size={18} className="text-[#43703A] mr-2" />
              <p className="text-sm text-gray-700">+62 856-9231-7178</p>
            </div>
            <div className="flex items-start">
              <MapPin size={18} className="text-[#43703A] mr-2" />
              <p className="text-sm text-gray-700">Bogor, Jawa Barat, Indonesia</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-5 text-sm border-t border-gray-300">
          <p>© 2025 Ecotani. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
