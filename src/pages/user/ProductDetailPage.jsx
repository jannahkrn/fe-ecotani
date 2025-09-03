import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Footer from "../../components/user/Footer";

const allProducts = {
  "Botol Plastik": {
    id: 1,
    name: "Botol Plastik",
    price: 3000,
    weight: "100 gram",
    stock: "Tersedia",
    location: "Klaten, Jawa Tengah",
    seller: "Jannah Kurniawati",
    sellerRating: 4.8,
    responseRate: "98%",
    responseTime: "< 1 jam",
    soldCount: 33,
    description: `Limbah botol plastik bekas berbahan PET (Polyethylene Terephthalate), cocok untuk kebutuhan industri daur ulang plastik. Botol dalam kondisi bersih, tersedia dalam warna bening, biru, dan hijau. Dapat digunakan kembali untuk:
- Bahan baku biji plastik PET daur ulang
- Serat tekstil (polyester)
- Pembuatan botol baru
- Produk plastik lainnya`,
    reviews: [
      {
        user: "Dzaka Alif",
        rating: 5.0,
        comment: "Wow, botolnya sangat bersih! Aku suka belanja disini.",
      },
      {
        user: "Dzaka Alif",
        rating: 5.0,
        comment: "Wow, botolnya sangat bersih! Aku suka belanja disini.",
      },
      {
        user: "Dzaka Alif",
        rating: 5.0,
        comment: "Wow, botolnya sangat bersih! Aku suka belanja disini.",
      },
    ],
  },
};

const ProductDetailPage = ({ addToCart, cartItems }) => {
  const { productName } = useParams();
  const product = allProducts[productName];
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  // State untuk foto utama + thumbnails
  const [selectedImage, setSelectedImage] = useState(
    "https://placehold.co/600x400/E5E7EB/24292e?text=Product+Image"
  );

  const thumbnails = [
    "https://placehold.co/200x200/E5E7EB/24292e?text=Thumbnail+1",
    "https://placehold.co/200x200/E5E7EB/24292e?text=Thumbnail+2",
    "https://placehold.co/200x200/E5E7EB/24292e?text=Thumbnail+3",
  ];

  if (!product) {
    return (
      <div className="font-sans">
        <div className="container mx-auto px-12 py-20 text-center">
          <h1 className="text-2xl font-bold">Produk Tidak Ditemukan</h1>
          <p className="mt-4 text-gray-600">Mohon maaf, produk yang Anda cari tidak tersedia.</p>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: selectedImage,
    });
    navigate("/cart");
  };

  const handleProceedToCheckout = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: selectedImage,
    });
    navigate("/checkout");
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="font-sans">
      <main className="container mx-auto px-12 mt-8 mb-12">
        <div className="text-sm breadcrumbs mb-4">
          <ul>
            <li>Beranda</li>
            <li>Produk</li>
            <li>{product.name}</li>
          </ul>
        </div>

        {/* Foto Produk + Thumbnails */}
        <div className="flex gap-4 justify-center mb-6">
          <div className="w-4/5">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="w-1/5 flex flex-col gap-2">
            {thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`thumbnail ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-80"
                onClick={() => setSelectedImage(thumb)}
              />
            ))}
          </div>
        </div>

        {/* Keterangan + Atur Jumlah Sejajar */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Plastik</span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Kondisi Baru</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <div className="flex items-center gap-4 mt-2 mb-4">
              <div className="flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="ml-1 text-gray-700 font-semibold">{product.sellerRating}</span>
                <span className="ml-1 text-gray-500 text-sm">({product.reviews.length} ulasan)</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <p className="text-gray-700 font-semibold">{product.soldCount} terjual</p>
            </div>
            <p className="text-ecotani-green text-3xl font-bold">Rp{product.price.toLocaleString("id-ID")}</p>
            <div className="mt-4 text-sm text-gray-600 space-y-2">
              <p>Berat: {product.weight}</p>
              <p>Stok: {product.stock}</p>
              <p>Lokasi: {product.location}</p>
              <p>Garansi Kualitas</p>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Atur Jumlah Untuk Melakukan Pesanan</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={decreaseQuantity}
                  className="bg-white border border-gray-300 w-8 h-8 rounded-full text-gray-700 hover:bg-gray-200"
                >
                  -
                </button>
                <span className="font-semibold text-lg">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="bg-white border border-gray-300 w-8 h-8 rounded-full text-gray-700 hover:bg-gray-200"
                >
                  +
                </button>
              </div>
              <div>
                <p className="text-gray-500">
                  Subtotal:{" "}
                  <span className="text-gray-800 font-semibold">
                    Rp{(product.price * quantity).toLocaleString("id-ID")}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-3 px-6 rounded-full border border-ecotani-green text-ecotani-green font-semibold hover:bg-ecotani-green hover:text-white transition-colors"
              >
                Masukkan Keranjang
              </button>
              <button
                onClick={handleProceedToCheckout}
                className="flex-1 py-3 px-6 rounded-full bg-ecotani-green text-white font-semibold hover:bg-green-700 transition-colors"
              >
                Beli Sekarang
              </button>
            </div>
          </div>
        </div>

        {/* Semua bagian lain tetap sama */}
        <div className="bg-gray-100 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-bold mb-4">Informasi Penjual</h3>
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <img
                src="https://placehold.co/100x100/E5E7EB/24292e?text=Seller"
                alt="Jannah Kurniawati"
                className="w-16 h-16 rounded-full"
              />
            </div>
            <div className="flex-grow">
              <h4 className="text-lg font-semibold">{product.seller}</h4>
              <div className="flex items-center gap-4 text-sm mt-1 text-gray-600">
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1">{product.sellerRating}</span>
                </div>
                <span>{product.responseRate} Rating Penjual</span>
                <span>{product.responseTime} Waktu Respon</span>
                <span>{product.soldCount} Produk Terjual</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="py-2 px-4 rounded-full border border-ecotani-green text-ecotani-green text-sm font-semibold">
                Chat dengan Penjual
              </button>
              <Link
                to={`/seller/${product.seller.replace(/\s+/g, "")}`}
                className="py-2 px-4 rounded-full bg-ecotani-green text-white text-sm font-semibold hover:bg-green-700 transition-colors"
              >
                Lihat Toko
              </Link>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-700">
            Produsen kompos organik terpercaya dengan pengalaman lebih dari 10 tahun. Kami berkomitmen menyediakan produk berkualitas tinggi untuk mendukung pertanian berkelanjutan.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Deskripsi Produk</h3>
          <p className="text-sm text-gray-700 whitespace-pre-line">
            {product.description}
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Ulasan dan Rating Pembeli</h3>
          <div className="bg-gray-100 p-6 rounded-lg space-y-4">
            <div className="flex items-center">
              <div className="flex items-center text-yellow-400">
                <span className="mr-1">★</span>
                <span className="font-bold text-lg">{product.sellerRating}</span>
              </div>
              <p className="ml-2 text-gray-700 text-sm">dari 5.0 ({product.reviews.length} ulasan)</p>
            </div>
            {product.reviews.map((review, index) => (
              <div key={index} className="border-b border-gray-300 pb-4 last:border-b-0 last:pb-0">
                <h4 className="font-semibold text-gray-800">{review.user}</h4>
                <div className="flex items-center text-yellow-400 text-sm mt-1">
                  <span>★★★★★</span>
                </div>
                <p className="mt-1 text-sm text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
