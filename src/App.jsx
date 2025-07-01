import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaUserCircle, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import SearchContainer from './components/Search/SearchContainer';
import FilmDetailContainer from './components/FilmDetail/FilmDetailContainer';
import Login from './components/Auth/Login';
import Profile from './components/Profile';

function AppWrapper() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Cek token setiap kali lokasi (route) berubah
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
          <a href="/">
            <img src="logo-white.webp" className="w-[80px] h-[80px]" alt="Logo" />
          </a>

          <div className="flex items-center gap-4">
            {/* Tampilkan Login hanya jika belum login */}
            {!isAuthenticated && (
              <Link to="/login" className="flex items-center gap-2 text-sm bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-3 py-2 rounded">
                <FaSignInAlt />
                Login
              </Link>
            )}

            {/* Profil selalu tampil */}
            <Link to="/profile" className="flex items-center gap-2 text-sm bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded">
              <FaUserCircle />
              Profil
            </Link>
          </div>
        </div>
      </header>

      {/* Routing */}
      <main className="p-5">
        <Routes>
          <Route path="/" element={<SearchContainer />} />
          <Route path="/film/:id" element={<FilmDetailContainer />} />

          {/* Login tidak bisa diakses jika sudah login */}
          <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/profile" replace />} />

          {/* Profile tidak bisa diakses jika belum login */}
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" replace />} />
        </Routes>
      </main>
    </div>
  );
}

// Bungkus dengan BrowserRouter di luar
function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
