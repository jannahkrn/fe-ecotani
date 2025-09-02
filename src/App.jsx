import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/user/HomePage';
import SearchPage from './pages/user/SearchPage';
import ProductDetailPage from './pages/user/ProductDetailPage';
import LoginPage from './pages/user/LoginPage';
import RegisterPage from './pages/user/RegisterPage';
import CartPage from './pages/user/CartPage';
import MustLoginPage from './pages/user/MustLoginPage'; // Tambahkan import halaman ini

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
  };
  
  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id
        ? { ...item, quantity: item.quantity + product.quantity }
        : item
      ));
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    setCartItems(cartItems.map(item =>
      item.id === productId
      ? { ...item, quantity: newQuantity }
      : item
    ).filter(item => item.quantity > 0));
  };

  return (
    <div className="App">
      <Routes>
        <Route 
          path="/" 
          element={<HomePage isLoggedIn={isLoggedIn} userName={userName} cartItems={cartItems} />} 
        />
        <Route 
          path="/search" 
          element={<SearchPage isLoggedIn={isLoggedIn} userName={userName} cartItems={cartItems} />} 
        />
        <Route 
          path="/products/:productName" 
          element={<ProductDetailPage 
            isLoggedIn={isLoggedIn} 
            userName={userName} 
            addToCart={addToCart} 
            cartItems={cartItems} 
          />} 
        />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Implementasi logika untuk halaman keranjang */}
        <Route 
          path="/cart" 
          element={
            isLoggedIn 
              ? <CartPage cartItems={cartItems} updateQuantity={updateCartItemQuantity} /> 
              : <MustLoginPage /> // Jika belum login, tampilkan halaman ini
          } 
        />
      </Routes>
    </div>
  );
}

export default App;