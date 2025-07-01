import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchContainer from './components/Search/SearchContainer';
import FilmDetailContainer from './components/FilmDetail/FilmDetailContainer';
import Login from './components/Auth/Login';
import Profile from './components/Profile';
import { FaUserCircle, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white">
        <header className="bg-gray-800 shadow-md">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
            <a href="/">
              {' '}
              <img src="logo-white.webp" className="w-[80px] h-[80px]" alt="Logo" />
            </a>

            <div className="flex items-center gap-4">
              <Link to="/login" className="flex items-center gap-2 text-sm bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-3 py-2 rounded">
                <FaSignInAlt />
                Login
              </Link>
              <Link to="/profile" className="flex items-center gap-2 text-sm bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded">
                <FaUserCircle />
                Profil
              </Link>
            </div>
          </div>
        </header>

        <main className="p-5">
          <Routes>
            <Route path="/" element={<SearchContainer />} />
            <Route path="/film/:id" element={<FilmDetailContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
