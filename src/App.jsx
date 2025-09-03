import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/user/HomePage";
import SearchPage from "./pages/user/SearchPage";
import ProductDetailPage from "./pages/user/ProductDetailPage";
import SellerProductDetailPage from "./pages/user/SellerProductDetailPage";
import SellerDetailPage from "./pages/user/SellerDetailPage";
import LoginPage from "./pages/user/LoginPage";
import RegisterPage from "./pages/user/RegisterPage";
import CartPage from "./pages/user/CartPage";
import MustLoginPage from "./pages/user/MustLoginPage";
import CheckoutPage from "./pages/user/CheckoutPage";
import TrackingPage from "./pages/user/TrackingPage";
import PaymentUploadPage from "./pages/user/PaymentUploadPage";
import RatingAndReviewPage from "./pages/user/RatingAndReviewPage";
import ProfilePage from "./pages/user/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import ChatPage from "./pages/user/ChatPage";
import Navbar from "./components/user/Navbar";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const localData = localStorage.getItem("cartItems");
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Failed to parse cart items from localStorage:", error);
      return [];
    }
  });

  const [hasNewChat, setHasNewChat] = useState(true);

  // Menyimpan data keranjang belanja ke localStorage setiap kali 'cartItems' berubah
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingItemIndex > -1) {
      // Jika produk sudah ada di keranjang, perbarui jumlahnya
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex] = {
        ...updatedCartItems[existingItemIndex],
        quantity: updatedCartItems[existingItemIndex].quantity + (product.quantity || 1),
      };
      setCartItems(updatedCartItems);
    } else {
      // Jika produk belum ada, tambahkan ke keranjang
      setCartItems([...cartItems, { ...product, quantity: product.quantity || 1 }]);
    }
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems
        .map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item))
        .filter((item) => item.quantity > 0);
      return updatedItems;
    });
  };

  return (
    <AuthProvider>
      <div className="App">
        <Navbar cartItems={cartItems} hasNewChat={hasNewChat} />
        <Routes>
          <Route path="/" element={<HomePage cartItems={cartItems} />} />
          <Route path="/search" element={<SearchPage addToCart={addToCart} />} />
          <Route path="/products/:productName" element={<ProductDetailPage addToCart={addToCart} cartItems={cartItems} />} />
          <Route path="/seller/products/:productId" element={<SellerProductDetailPage cartItems={cartItems} addToCart={addToCart} />} />
          <Route path="/seller/products/edit/:productId" element={<h1 className="text-center text-4xl mt-20">Halaman Edit Produk (Belum ada)</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/seller/:sellerName" element={<SellerDetailPage cartItems={cartItems} />} />
          <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} />} />
          <Route path="/tracking" element={<TrackingPage cartItems={cartItems} />} />
          <Route path="/payment-upload" element={<PaymentUploadPage cartItems={cartItems} />} />
          <Route path="/review" element={<RatingAndReviewPage cartItems={cartItems} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} updateQuantity={updateCartItemQuantity} />} />
          <Route path="/profile" element={<ProfilePage cartItems={cartItems} />} />
          <Route path="/must-login" element={<MustLoginPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
