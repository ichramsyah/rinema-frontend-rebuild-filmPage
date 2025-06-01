import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchContainer from './components/Search/SearchContainer';
import FilmDetailContainer from './components/FilmDetail/FilmDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white">
        <header className="bg-gray-800 shadow-md">
          <div className="flex justify-center">
            <img src="logo-white.webp" className="w-[100px] h-[100px]" alt="" />
          </div>
        </header>
        <main className="p-5">
          <Routes>
            <Route path="/" element={<SearchContainer />} />
            <Route path="/film/:id" element={<FilmDetailContainer />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
