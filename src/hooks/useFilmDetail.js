import { useState, useEffect } from 'react';
import apiClient from '../api/apiClient';

function useFilmDetail(filmId) {
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilmDetail = async () => {
      if (!filmId) {
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const response = await apiClient.getFilmById(filmId);

        // Log untuk melihat struktur asli dari API
        console.log('API Response for single film:', response.data.data);

        // Ambil objek film langsung dari response.data
        setFilm(response.data.data);
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
