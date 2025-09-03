// HomePage.jsx
import React, { useState } from "react";
import Footer from "../../components/user/Footer";
import ChatAI from "../../components/user/ChatAi";
import CitizenScience from "../../components/user/CitizenScience";
import HelpCenter from "../../components/user/HelpCenter";
import ProductCard from "../../components/user/ProductCard";
import { RefreshCw, Leaf, Users, DollarSign } from "lucide-react";

const HomePage = ({ cartItems, addToCart }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const products = [
    {
      id: 1,
      name: "Botol Plastik",
      price: "Rp 5.000 / Kg",
      image: "https://placehold.co/600x400/E5E7EB/4B5563?text=Botol+Plastik",
      rating: 4.5,
      sales: 33,
      seller: "Jannah Kurniawati",
      location: "Klaten, Jawa Tengah",
    },
    {
      id: 2,
      name: "Kertas HVS",
      price: "Rp 2.000 / Kg",
      image: "https://placehold.co/600x400/E5E7EB/4B5563?text=Kertas+HVS",
      rating: 4.3,
      sales: 20,
      seller: "Dzaka Alif",
      location: "Solo, Jawa Tengah",
    },
    {
      id: 3,
      name: "Kardus",
      price: "Rp 1.000 / Kg",
      image: "https://placehold.co/600x400/E5E7EB/4B5563?text=Kardus",
      rating: 4.2,
      sales: 18,
      seller: "Rina Permata",
      location: "Yogyakarta",
    },
  ];

  const stats = [
    {
      number: "10,000+",
      label: "Pengguna Aktif",
      icon: "👥",
    },
    {
      number: "50,000",
      label: "Total Limbah Terdaftar",
      icon: "♻",
    },
    {
      number: "25",
      label: "Kota Terjangkau",
      icon: "🏙",
    },
  ];

  const features = [
    {
      title: "Daur Ulang Mudah",
      description:
        "Platform yang memudahkan proses jual beli limbah untuk daur ulang",
      icon: <RefreshCw size={24} />, // Menggunakan komponen Lucide
    },
    {
      title: "Ramah Lingkungan",
      description:
        "Berkontribusi untuk lingkungan yang lebih bersih dan berkelanjutan",
      icon: <Leaf size={24} />, // Menggunakan komponen Lucide
    },
    {
      title: "Komunitas Aktif",
      description:
        "Bergabung dengan komunitas peduli lingkungan di seluruh Indonesia",
      icon: <Users size={24} />, // Menggunakan komponen Lucide
    },
    {
      title: "Ekonomi Sirkular",
      description:
        "Mendukung ekonomi sirkular dengan mengoptimalkan nilai limbah",
      icon: <DollarSign size={24} />, // Menggunakan komponen Lucide
    },
  ];

  return (
    <div className="overflow-x-hidden relative font-sans bg-white min-h-screen flex flex-col">
      {/* Floating Chat Button with Animation */}
      <div
        className="fixed bottom-6 right-6 z-50 cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-12 drop-shadow-2xl"
        onClick={toggleChat}
      >
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur opacity-75 animate-pulse"></div>
          <img
            src="/src/assets/zanu.png"
            alt="Zanu Mascot"
            className="relative w-20 h-auto rounded-full border-4 border-white shadow-xl"
          />
          {!isChatOpen && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
              💬
            </div>
          )}
        </div>
      </div>

      {isChatOpen && <ChatAI onClose={toggleChat} />}

      <main className="px-4 sm:px-8 lg:px-12 flex-grow">
        {/* Hero Section dengan desain gambar dan teks */}
        <section id="hero-section" className="mt-6">
          {/* Mengatur lebar dengan max-w-6xl */}
          <div className="w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative w-full h-80 md:h-[400px] lg:h-[450px]">
              <img
                src="/hero.png"
                alt="Ecotani Hero"
                className="w-full h-full object-cover"
              />
              {/* Mengubah alignment dan padding dari konten teks */}
              <div className="absolute inset-0 flex items-center justify-end p-8 text-white">
                <div className="text-left w-full max-w-lg">
                  {/* Menghapus inline-block yang membuat teks menempati ruang minimum */}
                  <div className="relative text-6xl md:text-8xl font-black mb-4">
                    <span className="text-[#FFED28]">ECOTANI</span>
                  </div>
                  <p className="text-lg md:text-4xl">
                    Platform e-commerce untuk jual beli limbah secara mudah,
                    aman dan ramah lingkungan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="mt-16 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8" // Menghapus kelas 'bg-white' dan 'shadow-xl'
              >
                {/* Menghapus div untuk icon */}
                <div className="text-5xl font-bold text-[#43703A] mb-2">
                  {stat.number}
                </div>
                <div className="text-xl text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Ecotani Section */}
        <section id="about-section" className="mt-16 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Mengapa Memilih <span className="text-[#43703A]">Ecotani?</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Platform terdepan untuk jual beli limbah dengan teknologi modern
              dan komunitas yang peduli lingkungan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 border border-gray-100">
                  {/* Div ini mengatur posisi dan ukuran ikon */}
                  {/* Gunakan 'size' dan 'strokeWidth' untuk mengatur ukuran dan ketebalan */}
                  <div className="flex justify-center mb-2 text-[#43703A]">
                    {React.cloneElement(feature.icon, {
                      size: 48, // Memperbesar ukuran ikon
                      strokeWidth: 2.5, // Menebalkan ikon
                    })}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Produk Unggulan */}
        <section className="mt-20 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Produk <span className="text-[#43703A]">Unggulan</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Temukan berbagai produk limbah berkualitas dengan harga terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product) => (
              <div
                key={product.id}
                className="transform hover:scale-105 transition-all duration-300"
              >
                <ProductCard product={product} addToCart={addToCart} />
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Sections */}
        <div className="space-y-16">
          <div id="citizen-science-section">
            <CitizenScience />
          </div>

          <div id="help-section">
            <HelpCenter />
          </div>
        </div>

        {/* Call to Action Section (UPDATED) */}
        <section className="my-8 text-center max-w-6xl mx-auto">
          <div className="bg-[#43703A] rounded-3xl p-16 text-white relative overflow-hidden">
            <h3 className="text-4xl font-bold mb-4">
              Bergabunglah dengan Komunitas Ecotani
            </h3>
            <p className="text-2xl mb-8 opacity-90">
              Mulai perjalanan Anda menuju lingkungan yang lebih bersih dan ekonomi yang lebih berkelanjutan
            </p>
            <button className="bg-white hover:bg-gray-100 text-[#43703A] font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105">
              Bergabung Sekarang
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;