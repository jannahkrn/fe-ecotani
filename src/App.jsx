// src/App.jsx

import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/user/HomePage";
import SearchPage from "./pages/user/SearchPage";
import ProductDetailPage from "./pages/user/ProductDetailPage";
import SellerDetailPage from "./pages/user/SellerDetailPage";
import LoginPage from "./pages/user/LoginPage";
import RegisterPage from "./pages/user/RegisterPage";
import CartPage from "./pages/user/CartPage";
import MustLoginPage from "./pages/user/MustLoginPage";
import CheckoutPage from "./pages/user/CheckoutPage";
import TrackingPage from "./pages/user/TrackingPage";

// Import komponen PaymentUploadPage
import PaymentUploadPage from "./pages/user/PaymentUploadPage";

// Import AuthProvider dari file yang baru saja dibuat
import { AuthProvider } from "./context/AuthContext";

function App() {
  // Hapus state isLoggedIn, userName, dan handleLogin karena sudah di Context
  const [cartItems, setCartItems] = useState([]); // Tambahkan useEffect untuk menyimpan cartItems ke Local Storage jika perlu

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    // Bungkus seluruh Routes dengan AuthProvider
    <AuthProvider>
           {" "}
      <div className="App">
               {" "}
        <Routes>
                    {/* Hapus props isLoggedIn dan userName di semua Route */}
                   {" "}
          <Route path="/" element={<HomePage cartItems={cartItems} />} />
                   {" "}
          <Route
            path="/search"
            element={<SearchPage cartItems={cartItems} />}
          />
                   {" "}
          <Route
            path="/products/:productName"
            element={
              <ProductDetailPage addToCart={addToCart} cartItems={cartItems} />
            }
          />
                              {/* Ubah elemen untuk LoginPage */}
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                             {" "}
          <Route
            path="/seller/:sellerName"
            element={<SellerDetailPage cartItems={cartItems} />}
          />
                   {" "}
          <Route
            path="/checkout"
            element={<CheckoutPage cartItems={cartItems} />}
          />
                   {" "}
          <Route
            path="/tracking"
            element={<TrackingPage cartItems={cartItems} />}
          />
          {/* Rute baru untuk upload pembayaran */}
          <Route path="/payment-upload" element={<PaymentUploadPage />} />
                   {" "}
          <Route
            path="/cart"
            element={
              // Kita akan ubah logika ini nanti agar menggunakan Context
              <CartPage
                cartItems={cartItems}
                updateQuantity={updateCartItemQuantity}
              />
            }
          />
                 {" "}
        </Routes>
             {" "}
      </div>
         {" "}
    </AuthProvider>
  );
}

export default App;
