import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/user/HomePage';
import SearchPage from './pages/user/SearchPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;