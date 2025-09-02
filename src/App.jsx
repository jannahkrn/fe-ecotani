import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/user/HomePage';
import SearchPage from './pages/user/SearchPage';
import ProductDetailPage from './pages/user/ProductDetailPage';
import LoginPage from './pages/user/LoginPage'; // Import halaman login

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/products/:productName" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} /> {/* Rute baru untuk halaman login */}
      </Routes>
    </div>
  );
}

export default App;