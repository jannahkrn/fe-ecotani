import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/user/Navbar';
import Footer from '../../components/user/Footer';

const allProducts = {
  'Botol Plastik': {
    name: 'Botol Plastik',
    price: 'Rp3.000',
    weight: '100 gram',
    stock: 'Tersedia',
    location: 'Klaten, Jawa Tengah',
    seller: 'Jannah Kurniawati',
    sellerRating: 4.8,
    responseRate: '98%',
    responseTime: '< 1 jam',
    soldCount: 33,
    description: `Limbah botol plastik bekas berbahan PET (Polyethylene Terephthalate), cocok untuk kebutuhan industri daur ulang plastik. Botol dalam kondisi bersih, tersedia dalam warna bening, biru, dan hijau. Dapat digunakan kembali untuk:
- Bahan baku biji plastik PET daur ulang
- Serat tekstil (polyester)
- Pembuatan botol baru
- Produk plastik lainnya`,
    reviews: [
      { user: 'Dzaka Alif', rating: 5.0, comment: 'Wow, botolnya sangat bersih! Aku suka belanja disini.' },
      { user: 'Dzaka Alif', rating: 5.0, comment: 'Wow, botolnya sangat bersih! Aku suka belanja disini.' },
      { user: 'Dzaka Alif', rating: 5.0, comment: 'Wow, botolnya sangat bersih! Aku suka belanja disini.' },
    ],
  },
  // Kamu bisa menambahkan produk lain di sini
};

const ProductDetailPage = () => {
  const { productName } = useParams();
  const product = allProducts[productName];

  if (!product) {
    return (
      <div className="font-sans">
        <Navbar />
        <div className="container mx-auto px-12 py-20 text-center">
          <h1 className="text-2xl font-bold">Produk Tidak Ditemukan</h1>
          <p className="mt-4 text-gray-600">Mohon maaf, produk yang Anda cari tidak tersedia.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="font-sans">
      <Navbar />
      <main className="container mx-auto px-12 mt-8 mb-12">
        <div className="text-sm breadcrumbs mb-4">
          <ul>
            <li>Beranda</li>
            <li>Produk</li>
            <li>{product.name}</li>
          </ul>
        </div>

        {/* Product Info Section */}
        <div className="grid grid-cols-2 gap-10">
          {/* Product Images */}
          <div className="flex gap-4">
            <div className="w-4/5">
              <img src="/src/assets/detail-product.png" alt={product.name} className="w-full h-auto rounded-lg shadow-md" />
            </div>
            <div className="w-1/5 flex flex-col gap-2">
              <img src="/src/assets/detail-product-small.png" alt="thumbnail 1" className="w-full h-auto rounded-lg shadow-md" />
              <img src="/src/assets/detail-product-small.png" alt="thumbnail 2" className="w-full h-auto rounded-lg shadow-md" />
              <img src="/src/assets/detail-product-small.png" alt="thumbnail 3" className="w-full h-auto rounded-lg shadow-md" />
            </div>
          </div>
          {/* Product Details & Actions */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Plastik</span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Kondisi Baru</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <div className="flex items-center gap-4 mt-2 mb-4">
              <div className="flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="ml-1 text-gray-700 font-semibold">{product.rating}</span>
                <span className="ml-1 text-gray-500 text-sm">({product.reviews.length} ulasan)</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <p className="text-gray-700 font-semibold">{product.soldCount} terjual</p>
            </div>
            <p className="text-ecotani-green text-3xl font-bold">{product.price}</p>
            <div className="mt-4 text-sm text-gray-600 space-y-2">
              <p>Berat: {product.weight}</p>
              <p>Stok: {product.stock}</p>
              <p>Lokasi: {product.location}</p>
              <p>Garansi Kualitas</p>
            </div>
            {/* Purchase Options */}
            <div className="bg-gray-100 p-6 mt-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Atur Jumlah Untuk Melakukan Pesanan</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button className="bg-white border border-gray-300 w-8 h-8 rounded-full text-gray-700 hover:bg-gray-200">-</button>
                  <span className="font-semibold text-lg">3</span>
                  <button className="bg-white border border-gray-300 w-8 h-8 rounded-full text-gray-700 hover:bg-gray-200">+</button>
                </div>
                <div>
                  <p className="text-gray-500">Subtotal: <span className="text-gray-800 font-semibold">Rp9.000</span></p>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <button className="flex-1 py-3 px-6 rounded-full border border-ecotani-green text-ecotani-green font-semibold hover:bg-ecotani-green hover:text-white transition-colors">
                  Masukkan Keranjang
                </button>
                <button className="flex-1 py-3 px-6 rounded-full bg-ecotani-green text-white font-semibold hover:bg-green-700 transition-colors">
                  Tambah Pesanan
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Seller Info Section */}
        <div className="bg-gray-100 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-bold mb-4">Informasi Penjual</h3>
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <img src="/src/assets/seller-photo.png" alt="Jannah Kurniawati" className="w-16 h-16 rounded-full" />
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
              <button className="py-2 px-4 rounded-full border border-ecotani-green text-ecotani-green text-sm font-semibold">Chat dengan Penjual</button>
              <button className="py-2 px-4 rounded-full bg-ecotani-green text-white text-sm font-semibold">Lihat Toko</button>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-700">Produsen kompos organik terpercaya dengan pengalaman lebih dari 10 tahun. Kami berkomitmen menyediakan produk berkualitas tinggi untuk mendukung pertanian berkelanjutan.</p>
        </div>

        {/* Product Description */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Deskripsi Produk</h3>
          <p className="text-sm text-gray-700 whitespace-pre-line">{product.description}</p>
        </div>

        {/* Reviews Section */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Ulasan dan Rating Pembeli</h3>
          <div className="bg-gray-100 p-6 rounded-lg space-y-4">
            <div className="flex items-center">
              <div className="flex items-center text-yellow-400">
                <span className="mr-1">★</span>
                <span className="font-bold text-lg">{product.rating}</span>
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