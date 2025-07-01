import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../api/apiClient';

function Profile() {
  const [user, setUser] = useState(null);
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [replies, setReplies] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login'; // atau arahkan ke "/" jika tidak punya halaman login
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Anda belum login.');
      setLoading(false);
      return;
    }

    Promise.all([apiClient.getUserProfile(token), apiClient.getMyRatings(token), apiClient.getMyReplies(token)])
      .then(([profileData, ratingsData, repliesData]) => {
        setUser(profileData.user);
        setRatings(ratingsData.ratings || []);
        setReplies(repliesData.replies || []);
      })
      .catch((err) => {
        setError(err.message || 'Gagal mengambil data');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-gray-400">Loading...</p>;
  if (error) {
    return (
      <div className="text-center text-red-400 mt-10">
        <p className="mb-4">{error}</p>
        {error === 'Anda belum login.' && (
          <Link to="/login" className="inline-block bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition">
            Login Sekarang
          </Link>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto text-white">
      <Link to="/" className="text-yellow-400 hover:underline text-sm mb-4 inline-block">
        ← Kembali ke Beranda
      </Link>
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">Profil Saya</h2>
        <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm">
          Logout
        </button>
      </div>
      <div className="bg-gray-800 rounded-lg p-6 shadow mb-10">
        <p className="text-gray-300 mb-1">
          <strong>Nama:</strong> {user.name}
        </p>
        <p className="text-gray-300 mb-1">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-gray-300 mb-1">
          <strong>Role:</strong> {user.role}
        </p>
        <p className="text-gray-300 mb-1">
          <strong>Status Akun:</strong> {user.is_active ? <span className="text-green-400">Aktif</span> : <span className="text-red-400">Nonaktif</span>}
        </p>
        <p className="text-gray-300">
          <strong>Dibuat:</strong> {new Date(user.created_at).toLocaleDateString()}
        </p>
      </div>

      <h3 className="text-2xl font-bold text-yellow-300 mb-4">Rating Saya</h3>
      {ratings.length === 0 ? (
        <p className="text-gray-300">Anda belum memberikan rating film apa pun.</p>
      ) : (
        <div className="space-y-6">
          {ratings.map((rating) => (
            <div key={rating.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow flex flex-col sm:flex-row gap-6">
              <img src={rating.film.poster} alt={rating.film.judul} className="w-full sm:w-40 h-auto object-cover rounded" />
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-yellow-300 mb-2">{rating.film.judul}</h3>
                <p className="text-gray-300 mb-1">
                  <strong>Rating:</strong> {rating.rating} ⭐
                </p>
                {rating.comment && (
                  <p className="text-gray-300 mb-1">
                    <strong>Komentar:</strong> {rating.comment}
                  </p>
                )}
                <p className="text-gray-400 text-sm mt-2">
                  Durasi: {rating.film.durasi} menit • Usia: {rating.film.usia}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      <h3 className="text-2xl font-bold text-yellow-300 mt-10 mb-4">Pesan Saya</h3>
      {replies.length === 0 ? (
        <p className="text-gray-300">Anda belum pernah mengirimkan pesan di forum.</p>
      ) : (
        <ul className="space-y-4">
          {replies.map((reply) => (
            <li key={reply.id} className="bg-gray-800 border border-gray-700 p-4 rounded shadow">
              <p className="text-gray-200">{reply.body}</p>
              <p className="text-sm text-gray-400 mt-2">
                Forum ID: {reply.forum_id} • {new Date(reply.created_at).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Profile;
