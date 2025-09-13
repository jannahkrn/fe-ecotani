// HomePage.jsx
import React, { useState, useEffect } from "react";
import Footer from "../../components/user/Footer";
import ChatAI from "../../components/user/ChatAi";
import CitizenScience from "../../components/user/CitizenScience";
import HelpCenter from "../../components/user/HelpCenter";
import ProductCard from "../../components/user/ProductCard";
import PreferensiModal from "../../components/user/PreferensiModal";
import { RefreshCw, Leaf, Users, DollarSign } from "lucide-react";

const HomePage = ({ cartItems, addToCart, user }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isPreferensiOpen, setIsPreferensiOpen] = useState(false);
  const [userPreferences, setUserPreferences] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  const products = [
    {
      id: 1,
      image: "/src/assets/product-placeholder.png",
      name: "Botol Plastik",
      category: "Plastik",
      price: "Rp3.000/g",
      priceValue: 3000,
      seller: "Jannah K",
      location: "Klaten, Jawa Tengah",
      rating: 5.0,
      sales: 10,
    },
    {
      id: 2,
      image: "/src/assets/product-placeholder.png",
      name: "Kardus Bekas",
      category: "Kertas",
      price: "Rp1.500/kg",
      priceValue: 1500,
      seller: "Jannah K",
      location: "Klaten, Jawa Tengah",
      rating: 4.8,
      sales: 25,
    },
    {
      id: 3,
      image: "/src/assets/product-placeholder.png",
      name: "Minyak Jelantah",
      category: "Organik",
      price: "Rp5.000/L",
      priceValue: 5000,
      seller: "Budi S",
      location: "Yogyakarta, DI Yogyakarta",
      rating: 4.5,
      sales: 30,
    },
  ];

  const stats = [
    { number: "10,000+", label: "Pengguna Aktif", icon: "👥" },
    { number: "50,000", label: "Total Limbah Terdaftar", icon: "♻" },
    { number: "25", label: "Kota Terjangkau", icon: "🏙" },
  ];

  const features = [
    {
      title: "Daur Ulang Mudah",
      description:
        "Platform yang memudahkan proses jual beli limbah untuk daur ulang",
      icon: <RefreshCw size={24} />,
    },
    {
      title: "Ramah Lingkungan",
      description:
        "Berkontribusi untuk lingkungan yang lebih bersih dan berkelanjutan",
      icon: <Leaf size={24} />,
    },
    {
      title: "Komunitas Aktif",
      description:
        "Bergabung dengan komunitas peduli lingkungan di seluruh Indonesia",
      icon: <Users size={24} />,
    },
    {
      title: "Ekonomi Sirkular",
      description:
        "Mendukung ekonomi sirkular dengan mengoptimalkan nilai limbah",
      icon: <DollarSign size={24} />,
    },
  ];

  // 🔹 Ambil preferensi dari localStorage per user saat user login
  useEffect(() => {
    if (user) {
      const saved = localStorage.getItem(`userPreferences_${user.id}`);
      const prefs = saved ? JSON.parse(saved) : [];
      setUserPreferences(prefs);

      if (!prefs.length) {
        setIsPreferensiOpen(true);
      }
    } else {
      // Logout → kosongkan preferensi
      setUserPreferences([]);
    }
  }, [user]);

  // 🔹 Update displayProducts sesuai preferensi
  useEffect(() => {
    if (user && userPreferences.length > 0) {
      const recommended = products.filter((p) =>
        userPreferences.includes(p.category)
      );
      setDisplayProducts(recommended.length ? recommended : products);
    } else {
      setDisplayProducts(products);
    }
  }, [user, userPreferences]);

  // 🔹 Simpan preferensi ke localStorage per user
  const handleSavePreferences = (prefs) => {
    setUserPreferences(prefs);
    if (user) {
      localStorage.setItem(`userPreferences_${user.id}`, JSON.stringify(prefs));
    }
    setIsPreferensiOpen(false);
  };

  return (
    <div className="overflow-x-hidden relative font-sans bg-white min-h-screen flex flex-col">
      {/* Floating Chat Button */}
      <div
        className="fixed bottom-6 right-6 z-50 cursor-pointer transition-all duration-300"
        onClick={toggleChat}
      >
        <div className="relative">
          <img
            src="/src/assets/zanu.png"
            alt="Zanu Mascot"
            className="relative w-50 h-auto rounded-full"
          />
        </div>
      </div>

      {isChatOpen && <ChatAI onClose={toggleChat} />}

      {isPreferensiOpen && (
        <PreferensiModal
          onClose={() => setIsPreferensiOpen(false)}
          onSave={handleSavePreferences}
        />
      )}

      <main className="px-4 sm:px-8 lg:px-12 flex-grow">
        {/* Hero Section */}
        <section id="hero-section" className="mt-6 scroll-mt-20">
          <div className="w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative w-full h-80 md:h-[400px] lg:h-[450px]">
              <img
                src="/hero.png"
                alt="Ecotani Hero"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-end p-8 text-white">
                <div className="text-left w-full max-w-lg">
                  <div className="relative text-6xl md:text-8xl font-black mb-4">
                    <span className="text-[#FFED28]">ECOTANI</span>
                  </div>
                  <p className="text-lg md:text-3xl">
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
              <div key={index} className="text-center p-8">
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
        <section id="about-section" className="mt-16 mb-16 scroll-mt-20">
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
                  <div className="flex justify-center mb-2 text-[#43703A]">
                    {React.cloneElement(feature.icon, {
                      size: 48,
                      strokeWidth: 2.5,
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

        {/* Produk Unggulan / Rekomendasi */}
        <section className="mt-20 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {user && userPreferences.length > 0
                ? "Rekomendasi Produk Untuk Anda"
                : "Produk Unggulan"}
            </h2>
            <p className="text-gray-600 text-lg">
              Temukan berbagai produk limbah berkualitas dengan harga terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {displayProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        </section>

        {/* Enhanced Sections */}
        <div className="space-y-16">
    <div id="citizen-science-section" className="scroll-mt-20">
      <CitizenScience />
    </div>

          <div id="help-section" className="scroll-mt-20">
      <HelpCenter />
    </div>
  </div>

        {/* CTA Section */}
        <section className="my-8 text-center max-w-6xl mx-auto">
          <div className="bg-[#43703A] rounded-3xl p-16 text-white relative overflow-hidden">
            <h3 className="text-4xl font-bold mb-4">
              Bergabunglah dengan Komunitas Ecotani
            </h3>
            <p className="text-2xl mb-8 opacity-90">
              Mulai perjalanan Anda menuju lingkungan yang lebih bersih dan
              ekonomi yang lebih berkelanjutan
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
