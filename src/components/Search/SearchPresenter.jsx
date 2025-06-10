import { Link } from 'react-router-dom';

function SearchPresenter({ query, results, loading, error, genres, sortMode, selectedGenreId, handleInputChange, handleSortChange, handleGenreChange }) {
  const sortedGenres = [...genres].sort((a, b) => a.nama.localeCompare(b.nama));

  // Debugging: Periksa isi results
  console.log('Results in SearchPresenter:', results);

  return (
    <div className="max-w-6xl mx-auto text-white">
      {/* Filter & Sort Controls */}
      <div className="mb-6 flex flex-col sm:flex-row items-center gap-4">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="🔍 Cari film..."
          className="flex-1 w-full px-4 py-2 rounded-md bg-gray-800 border-2 border-gray-700 hover:border-yellow-400 transition-all focus:outline-none focus:border-yellow-400"
        />
        <select value={sortMode} onChange={handleSortChange} className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none transition-all focus:ring-2 focus:ring-yellow-400">
          <option value="all">Semua Film</option>
          <option value="latest">Terbaru</option>
          <option value="oldest">Terlawas</option>
          <option value="popular">Terpopuler</option>
        </select>
      </div>

      {/* Genre Filter */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => handleGenreChange({ target: { value: '' } })}
          className={`px-4 py-2 rounded-full text-sm hover:bg-yellow-400 transition-all ${selectedGenreId === '' ? 'bg-yellow-400 text-black' : 'bg-gray-700'}`}
          key="all-genres"
        >
          Semua Genre
        </button>
        {sortedGenres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => handleGenreChange({ target: { value: genre.id.toString() } })}
            className={`px-4 py-2 font-poppins rounded-full text-sm hover:bg-yellow-400 transition-all ${selectedGenreId === genre.id.toString() ? 'bg-yellow-400 text-black' : 'bg-gray-700'}`}
          >
            {genre.nama}
          </button>
        ))}
      </div>

      {/* Results */}
      {loading && <p className="text-center text-gray-400">Loading...</p>}
      {error && <p className="text-center text-red-400">{error}</p>}

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((film) => (
          <li key={film.id} className="bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-yellow-400/30 transition">
            <img src={film.poster_url} alt={film.judul} className="w-full h-72 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1 text-yellow-300">{film.judul}</h3>
              <div className="flex items-center gap-4">
                <p className="text-sm text-gray-300 mb-1">
                  <strong>Rating:</strong> {film.average_rating} ⭐ ({film.ratings_count})
                </p>
              </div>

              <p className="text-sm text-gray-400 line-clamp-3 mb-2">{film.sinopsis}</p>
              <Link to={`/film/${film.id}`} className="text-yellow-400 hover:underline text-sm">
                Lihat Detail
              </Link>
            </div>
          </li>
        ))}
      </ul>

      {!loading && !error && results.length === 0 && <p className="text-center text-gray-400 mt-10">{query ? `Tidak ada hasil untuk "${query}".` : 'Tidak ada film yang sesuai dengan filter.'}</p>}
    </div>
  );
}

export default SearchPresenter;
