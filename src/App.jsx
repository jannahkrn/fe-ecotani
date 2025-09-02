import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/user/HomePage';
import SearchPage from './pages/user/SearchPage';
import ProductDetailPage from './pages/user/ProductDetailPage'; // Import halaman detail produk

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        {/* Rute baru untuk detail produk */}
        <Route path="/products/:productName" element={<ProductDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;