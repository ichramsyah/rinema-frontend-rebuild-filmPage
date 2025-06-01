import { Link } from 'react-router-dom';

function FilmDetailPresenter({ film, loading, error }) {
  if (loading) return <p className="text-center text-gray-400">Loading...</p>;
  if (error) return <p className="text-center text-red-400">{error}</p>;
  if (!film) return <p className="text-center text-gray-400">Film tidak ditemukan.</p>;

  return (
    <div className="max-w-5xl mx-auto text-white">
      <Link to="/" className="text-yellow-400 hover:underline text-sm mb-4 inline-block">
        &larr; Kembali ke Daftar Film
      </Link>
      <div className="flex flex-col sm:flex-row gap-6 bg-gray-800 p-6 rounded-lg shadow">
        <img src={film.poster_url} alt={film.judul} className="w-full sm:w-64 h-auto object-cover rounded" />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2 text-yellow-300">{film.judul}</h2>
          <p className="text-gray-300 mb-1">
            <strong>Produser:</strong> {film.produser}
          </p>
          <p className="text-gray-300 mb-1">
            <strong>Sutradara:</strong> {film.sutradara}
          </p>
          <p className="text-gray-300 mb-1">
            <strong>Penulis:</strong> {film.penulis}
          </p>
          <p className="text-gray-300 mb-1">
            <strong>Produksi:</strong> {film.produksi}
          </p>
          <p className="text-gray-300 mb-1">
            <strong>Pemeran:</strong> {film.pemeran}
          </p>
          <p className="text-gray-300 mb-1">
            <strong>Durasi:</strong> {film.durasi} menit
          </p>
          <p className="text-gray-300 mb-1">
            <strong>Rating:</strong> {film.average_rating} ⭐ ({film.ratings_count} ulasan)
          </p>
          <p className="text-gray-300 mb-4">
            <strong>Genre:</strong> {film.genres.map((g) => g.nama).join(', ')}
          </p>
          <p className="text-gray-200 mb-4">
            <strong>Sinopsis:</strong> {film.sinopsis}
          </p>

          {film.trailer_url && (
            <div className="mt-4">
              <iframe src={film.trailer_url} title="Film Trailer" className="w-full h-64 rounded" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FilmDetailPresenter;
