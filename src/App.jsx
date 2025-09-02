import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/user/HomePage';
import SearchPage from './pages/user/SearchPage';
import ProductDetailPage from './pages/user/ProductDetailPage';
import LoginPage from './pages/user/LoginPage';
import RegisterPage from './pages/user/RegisterPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
  };

  return (
    <div className="App">
      <Routes>
        {/* Pastikan Anda meneruskan props di sini */}
        <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} userName={userName} />} />
        <Route path="/search" element={<SearchPage isLoggedIn={isLoggedIn} userName={userName} />} />
        <Route path="/products/:productName" element={<ProductDetailPage isLoggedIn={isLoggedIn} userName={userName} />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;