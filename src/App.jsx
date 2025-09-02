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
import PaymentUploadPage from "./pages/user/PaymentUploadPage";
import { AuthProvider } from "./context/AuthContext";
import RatingAndReviewPage from "./pages/user/RatingAndReviewPage";
import ProfilePage from "./pages/user/ProfilePage";

function App() {
  const [cartItems, setCartItems] = useState([]);

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
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage cartItems={cartItems} />} />
          <Route path="/search" element={<SearchPage cartItems={cartItems} />} />
          <Route
            path="/products/:productName"
            element={
              <ProductDetailPage addToCart={addToCart} cartItems={cartItems} />
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/seller/:sellerName"
            element={<SellerDetailPage cartItems={cartItems} />}
          />
          <Route
            path="/checkout"
            element={<CheckoutPage cartItems={cartItems} />}
          />
          <Route
            path="/tracking"
            element={<TrackingPage cartItems={cartItems} />}
          />
          <Route path="/payment-upload" element={<PaymentUploadPage />} />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                updateQuantity={updateCartItemQuantity}
              />
            }
          />
          <Route path="/review" element={<RatingAndReviewPage cartItems={cartItems} />} />
          {/* Pastikan baris ini ada di dalam Routes dan menerima props cartItems */}
          <Route path="/profile" element={<ProfilePage cartItems={cartItems} />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;