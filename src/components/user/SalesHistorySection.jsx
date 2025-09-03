// src/components/user/SalesHistorySection.jsx
import React, { useState } from "react";

const SalesHistorySection = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Load sales data dari localStorage atau default dummy
  const [sales, setSales] = useState(() => {
    const storedSales = localStorage.getItem("sales");
    return storedSales
      ? JSON.parse(storedSales)
      : [
          {
            id: 1,
            buyer: "Andi",
            total: 150000,
            status: "Menunggu Verifikasi",
            resi: "",
            rating: null,
            review: "",
          },
          {
            id: 2,
            buyer: "Budi",
            total: 230000,
            status: "Selesai",
            resi: "",
            rating: null,
            review: "",
          },
          {
            id: 3,
            buyer: "Citra",
            total: 50000,
            status: "Ditolak",
            resi: "",
            rating: null,
            review: "",
          },
        ];
  });

  const [resiInput, setResiInput] = useState("");
  const [ratingInput, setRatingInput] = useState(0);
  const [reviewInput, setReviewInput] = useState("");

  const openModal = (type, order) => {
    setSelectedOrder(order);
    setActiveModal(type);
    setResiInput(order.resi || "");
    setRatingInput(order.rating || 0);
    setReviewInput(order.review || "");
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setActiveModal(null);
    setResiInput("");
    setRatingInput(0);
    setReviewInput("");
  };

  const updateSale = (updatedOrder) => {
    const newSales = sales.map((order) =>
      order.id === updatedOrder.id ? updatedOrder : order
    );
    setSales(newSales);
    localStorage.setItem("sales", JSON.stringify(newSales));
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Riwayat Penjualan</h2>

      <div className="space-y-4">
        {sales.map((order) => (
          <div
            key={order.id}
            className="border rounded-lg p-4 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">Pembeli: {order.buyer}</p>
              <p>Total: Rp {order.total.toLocaleString()}</p>
              <p>Status: {order.status}</p>
              {order.resi && <p>No Resi: {order.resi}</p>}
              {order.rating && (
                <p>
                  Rating: {order.rating} ★ - {order.review}
                </p>
              )}
            </div>
            <div className="space-x-2">
              {order.status === "Menunggu Verifikasi" && (
                <button
                  onClick={() => openModal("verifikasi", order)}
                  className="px-3 py-1 bg-blue-500 text-white rounded-lg"
                >
                  Verifikasi
                </button>
              )}
              {order.status === "Selesai" && (
                <button
                  onClick={() => openModal("rating", order)}
                  className="px-3 py-1 bg-green-500 text-white rounded-lg"
                >
                  Beri Rating
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Modal Verifikasi */}
          {activeModal === "verifikasi" && (
            <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
              <h3 className="text-lg font-bold mb-4">
                Verifikasi Pembayaran - {selectedOrder?.buyer}
              </h3>
              <p className="mb-4">Apakah bukti transfer valid?</p>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => {
                    updateSale({
                      ...selectedOrder,
                      status: "Selesai",
                    });
                    closeModal();
                    openModal("resi", { ...selectedOrder, status: "Selesai" });
                  }}
                  className="px-3 py-1 bg-green-500 text-white rounded-lg"
                >
                  Setuju
                </button>
                <button
                  onClick={() => {
                    updateSale({ ...selectedOrder, status: "Ditolak" });
                    closeModal();
                  }}
                  className="px-3 py-1 bg-red-500 text-white rounded-lg"
                >
                  Tolak
                </button>
              </div>
            </div>
          )}

          {/* Modal Resi */}
          {activeModal === "resi" && (
            <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
              <h3 className="text-lg font-bold mb-4">
                Kirim Resi - {selectedOrder?.buyer}
              </h3>
              <input
                type="text"
                placeholder="Masukkan nomor resi"
                className="w-full border p-2 rounded mb-4"
                value={resiInput}
                onChange={(e) => setResiInput(e.target.value)}
              />
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    updateSale({
                      ...selectedOrder,
                      resi: resiInput,
                      status: "Selesai",
                    });
                    closeModal();
                  }}
                  className="px-3 py-1 bg-blue-500 text-white rounded-lg"
                >
                  Kirim
                </button>
              </div>
            </div>
          )}

          {/* Modal Rating */}
          {activeModal === "rating" && (
            <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
              <h3 className="text-lg font-bold mb-4">
                Rating Pembeli - {selectedOrder?.buyer}
              </h3>
              <div className="flex space-x-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-2xl cursor-pointer ${
                      star <= ratingInput ? "text-yellow-400" : "text-gray-300"
                    }`}
                    onClick={() => setRatingInput(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
              <textarea
                placeholder="Tulis ulasan..."
                className="w-full border p-2 rounded mb-3"
                value={reviewInput}
                onChange={(e) => setReviewInput(e.target.value)}
              />
              <input type="file" className="mb-3" />
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    updateSale({
                      ...selectedOrder,
                      rating: ratingInput,
                      review: reviewInput,
                    });
                    closeModal();
                  }}
                  className="px-3 py-1 bg-green-500 text-white rounded-lg"
                >
                  Kirim Rating
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SalesHistorySection;
