import { useState, useEffect } from 'react';
import apiClient from '../api/apiClient';

function useFilmDetail(filmId) {
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilmDetail = async () => {
      if (!filmId) return;
      setLoading(true);
      try {
        const response = await apiClient.get(`/${filmId}`);
        setFilm(response.data.data || null);
        setError(null);
      } catch (err) {
        setError('Gagal mengambil detail film. Coba lagi nanti.');
        console.error('Error fetching film detail:', err);
        setFilm(null);
      } finally {
        setLoading(false);
      }
    };
    fetchFilmDetail();
  }, [filmId]);

  return { film, loading, error };
}

export default useFilmDetail;
