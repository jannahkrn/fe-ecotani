import React, { createContext, useState, useEffect } from 'react';

// Buat Context. Ini adalah "kotak" tempat data akan disimpan.
const AuthContext = createContext();

// Buat Provider. Ini adalah "penyedia" data yang akan membungkus aplikasi.
export const AuthProvider = ({ children }) => {
  // Pindahkan state login dari App.jsx ke sini
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );
  const [userName, setUserName] = useState(
    localStorage.getItem('userName') || ''
  );

  // Pindahkan useEffect untuk menyimpan data ke Local Storage
  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
    localStorage.setItem('userName', userName);
  }, [isLoggedIn, userName]);

  // Buat fungsi untuk login dan logout
  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
    // Hapus token atau data pengguna lainnya dari localStorage saat logout
    localStorage.removeItem('userToken');
  };

  // Kumpulan data dan fungsi yang akan tersedia di seluruh aplikasi
  const value = {
    isLoggedIn,
    userName,
    handleLogin,
    handleLogout,
    setIsLoggedIn,
    setUserName,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Ekspor AuthContext agar bisa digunakan oleh komponen lain
export default AuthContext;
