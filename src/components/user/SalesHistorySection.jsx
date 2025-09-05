import React, { useState } from "react";

const SalesHistorySection = () => {
  const [showPopup, setShowPopup] = useState(null); // "verifikasi", "resi", "rating"
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [resi, setResi] = useState("");
  const [rating, setRating] = useState(0);
  const [reason, setReason] = useState("");

  const salesHistory = [
    {
      id: 1,
      product: "Botol Plastik",
      orderNumber: "ECT - 2025 - 0001",
      buyer: "Janjun",
      status: "pending", // 🔹 belum diverifikasi
      location: "Keprabon, Polanharjo, Klaten, Jawa Tengah",
      price: 3000,
      paymentProof: "/src/assets/payment-proof.png",
    },
    {
      id: 2,
      product: "Botol Plastik",
      orderNumber: "ECT - 2025 - 0002",
      buyer: "Janjun",
      status: "shipped",
      location: "Keprabon, Polanharjo, Klaten, Jawa Tengah",
      resi: "JNE 6748712852",
    },
    {
      id: 3,
      product: "Botol Plastik",
      orderNumber: "ECT - 2025 - 0003",
      buyer: "Janjun",
      status: "verified",
      location: "Keprabon, Polanharjo, Klaten, Jawa Tengah",
    },
    {
      id: 4,
      product: "Botol Plastik",
      orderNumber: "ECT - 2025 - 0004",
      buyer: "Janjun",
      status: "rejected",
      location: "Keprabon, Polanharjo, Klaten, Jawa Tengah",
      reason: "Bukti Foto tidak jelas",
    },
    {
      id: 5,
      product: "Botol Plastik",
      orderNumber: "ECT - 2025 - 0005",
      buyer: "Janjun",
      status: "completed",
      location: "Keprabon, Polanharjo, Klaten, Jawa Tengah",
      resi: "JNE 6748712852",
      ratingBuyer: 4.9,
      ratingSeller: 4.9,
    },
  ];

  const openPopup = (type, order) => {
    setSelectedOrder(order);
    setShowPopup(type);
  };

  const closePopup = () => {
    setShowPopup(null);
    setSelectedOrder(null);
    setResi("");
    setReason("");
    setRating(0);
  };

  return (
    <div className="p-4">
      <h2 className="font-bold text-lg mb-4">Riwayat Penjualan Toko</h2>
      <div className="space-y-4">
        {salesHistory.map((order) => (
          <div
            key={order.id}
            className="flex items-start border rounded-lg p-4 bg-white shadow-md"
          >
            {/* Gambar Produk */}
            <img
              src="https://placehold.co/140x140/E5E7EB/24292e?text=Botol+Plastik"
              alt={order.product}
              className="w-32 h-32 object-cover rounded-lg"
            />

            {/* Detail Pesanan */}
            <div className="ml-4 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg text-gray-800">
                  {order.product}
                </h3>
                {/* Badge Status Utama */}
                {order.status === "shipped" && (
                  <span className="bg-[#43703A] text-white px-3 py-1 rounded-full text-sm">
                    Nomor Resi: {order.resi}
                  </span>
                )}
                {order.status === "verified" && (
                  <span className="text-[#35A4C9] font-semibold">
                    Terverifikasi
                  </span>
                )}
                {order.status === "rejected" && (
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                    Alasan: {order.reason}
                  </span>
                )}
                {order.status === "completed" && (
                  <span className="bg-[#43703A] text-white px-3 py-1 rounded-full text-sm">
                    Nomor Resi: {order.resi}
                  </span>
                )}
                {order.status === "pending" && (
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
                    Diunggah
                  </span>
                )}
              </div>

              {/* Info Pesanan */}
              <p className="text-sm text-gray-500 mt-1">
                Nomor Pesanan: {order.orderNumber}
              </p>
              <p className="text-sm text-gray-500">Dikirim ke: {order.buyer}</p>
              <p className="text-sm text-gray-500">Lokasi: {order.location}</p>

              {/* Tambahan Rating kalau completed */}
              {order.status === "completed" && (
                <div className="mt-2 text-sm text-gray-600">
                  <p>Rating dari Pembeli: {order.ratingBuyer}/5.0</p>
                  <p>Rating untuk Pembeli: {order.ratingSeller}/5.0</p>
                </div>
              )}

              {/* Tombol Aksi */}
              <div className="mt-3 flex gap-2">
                <button className="border px-3 py-1 rounded-full text-sm shadow-sm">
                  Transfer
                </button>

                {order.status === "shipped" && (
                  <button className="bg-white text-[#43703A] px-3 py-1 rounded-full text-sm">
                    Dikirim
                  </button>
                )}
                {order.status === "verified" && (
                  <button
                    onClick={() => openPopup("resi", order)}
                    className="bg-[#43703a] text-white px-3 py-1 rounded-full text-sm"
                  >
                    Kirim Resi
                  </button>
                )}
                {order.status === "rejected" && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                    Ditolak
                  </span>
                )}
                {order.status === "completed" && (
                  <button
                    onClick={() => openPopup("rating", order)}
                    className="bg-[#43703A] text-white px-3 py-1 rounded-full text-sm"
                  >
                    Selesai
                  </button>
                )}
                {order.status === "pending" && (
                  <button
                    onClick={() => openPopup("verifikasi", order)}
                    className="bg-[#47241C] text-white px-3 py-1 rounded-full text-sm"
                  >
                    Verifikasi
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Popups tetap ada */}
      {showPopup === "verifikasi" && selectedOrder && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-lg font-bold mb-4">Verifikasi Bukti Transfer</h2>
            <p className="mb-2">Produk: {selectedOrder.product}</p>
            <p className="mb-4">Total Pembayaran: Rp3.000</p>
            {selectedOrder.paymentProof && (
              <img
                src={selectedOrder.paymentProof}
                alt="Bukti Transfer"
                className="w-full h-48 object-contain mb-4 border rounded"
              />
            )}
            <textarea
              placeholder="Alasan Penolakan (opsional)"
              className="w-full border p-2 mb-4 rounded"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
            <div className="flex justify-between">
              <button
                onClick={closePopup}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Tolak
              </button>
              <button
                onClick={closePopup}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Verifikasi
              </button>
            </div>
          </div>
        </div>
      )}

      {showPopup === "resi" && selectedOrder && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="font-bold mb-2">Kirim Resi</h3>
            <input
              type="text"
              placeholder="Masukkan No Resi"
              className="w-full border p-2 rounded mt-2"
              value={resi}
              onChange={(e) => setResi(e.target.value)}
            />
            <button
              onClick={closePopup}
              className="bg-[#43703A] text-white px-4 py-2 rounded mt-3"
            >
              Kirim Resi
            </button>
          </div>
        </div>
      )}

      {showPopup === "rating" && selectedOrder && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="font-bold mb-2">Beri Rating untuk Pembeli</h3>
            <div className="flex space-x-2 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => setRating(star)}
                  className={`cursor-pointer text-2xl ${
                    star <= rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <textarea
              placeholder="Tulis Ulasan"
              className="w-full border p-2 rounded"
            />
            <button
              onClick={closePopup}
              className="bg-green-600 text-white px-4 py-2 rounded mt-3"
            >
              Kirim
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesHistorySection;
