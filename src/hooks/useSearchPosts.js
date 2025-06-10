import { useState, useEffect } from 'react';
import apiClient from '../api/apiClient';

function useSearchPosts() {
  const [query, setQuery] = useState('');
  const [sortMode, setSortMode] = useState('all');
  const [selectedGenreId, setSelectedGenreId] = useState('');
  const [allFilms, setAllFilms] = useState([]);
  const [results, setResults] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch Genres
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await apiClient.getAllGenres();
        setGenres(response.data.data || []);
        setError(null);
      } catch (err) {
        setError('Gagal mengambil genre. Coba lagi nanti.');
        console.error('Error fetching genres:', err);
        setGenres([]);
      }
    };
    fetchGenres();
  }, []);

  // Fetch Films
  useEffect(() => {
    const fetchFilms = async () => {
      setLoading(true);
      try {
        // 1. Panggil fungsi baru dengan `sortMode` saat ini
        const response = await apiClient.getFilms(sortMode);

        const films = response.data?.data || [];
        setAllFilms(films);
        setError(null);
      } catch (err) {
        setError('Gagal mengambil data dari API. Coba lagi nanti.');
        console.error('Error fetching films:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, [sortMode]);

  useEffect(() => {
    const applyFilters = (films, searchQuery, genreId) => {
      let filteredFilms = [...films];
      if (genreId) {
        const numericGenreId = parseInt(genreId);
        filteredFilms = filteredFilms.filter((film) => film.genres && film.genres.some((genre) => genre.id === numericGenreId));
      }
      if (searchQuery) {
        filteredFilms = filteredFilms.filter((film) => film.judul.toLowerCase().includes(searchQuery.toLowerCase()));
      }
      setResults(filteredFilms);
    };

    applyFilters(allFilms, query, selectedGenreId);
  }, [query, selectedGenreId, allFilms]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortMode(e.target.value);
  };

  const handleGenreChange = (e) => {
    setSelectedGenreId(e.target.value);
  };

  return {
    query,
    results,
    loading,
    error,
    genres,
    sortMode,
    selectedGenreId,
    handleInputChange,
    handleSortChange,
    handleGenreChange,
  };
}

export default useSearchPosts;
