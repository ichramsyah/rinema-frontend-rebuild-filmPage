import { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import apiClient from '../api/apiClient';

function useSearchPosts() {
  const [query, setQuery] = useState('');
  const [sortMode, setSortMode] = useState('all'); // all, latest, oldest, popular
  const [selectedGenreId, setSelectedGenreId] = useState(''); // Genre filter pake ID
  const [allFilms, setAllFilms] = useState([]); // Data asli sesuai sortMode
  const [results, setResults] = useState([]); // Data setelah filter
  const [genres, setGenres] = useState([]); // List genre dari API
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch semua genre saat komponen mount
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await apiClient.get('/allGenre');
        console.log('Genre Response:', response.data);
        if (response.data && Array.isArray(response.data.genres)) {
          setGenres(response.data.genres);
        } else if (response.data && Array.isArray(response.data.data)) {
          setGenres(response.data.data);
        } else {
          console.warn('Unexpected genre structure:', response.data);
          setGenres([]);
        }
      } catch (err) {
        console.error('Error fetching genres:', err.message);
        setGenres([]);
      }
    };
    fetchGenres();
  }, []);

  // Fetch film berdasarkan sortMode
  useEffect(() => {
    const fetchFilms = async () => {
      setLoading(true);
      try {
        let endpoint = '/allFilm';
        if (sortMode === 'latest') endpoint = '/latest';
        else if (sortMode === 'oldest') endpoint = '/oldest';
        else if (sortMode === 'popular') endpoint = '/popular';

        const response = await apiClient.get(endpoint);
        const films = response.data.data || [];
        setAllFilms(films);
        applyFilters(films, query, selectedGenreId);
        setError(null);
      } catch (err) {
        setError('Gagal mengambil data dari API. Coba lagi nanti.');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchFilms();
  }, [sortMode]);

  // Fungsi untuk filter berdasarkan query dan genre
  const applyFilters = (films, searchQuery, genreId) => {
    let filteredFilms = films;

    if (genreId) {
      filteredFilms = filteredFilms.filter((film) => film.genres && film.genres.some((genre) => genre.id.toString() === genreId.toString()));
    }

    if (searchQuery) {
      filteredFilms = filteredFilms.filter((film) => film.judul.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    setResults(filteredFilms);
  };

  const debouncedFilter = debounce((searchQuery) => {
    applyFilters(allFilms, searchQuery, selectedGenreId);
  }, 500);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedFilter(value);
  };

  const handleSortChange = (e) => {
    setSortMode(e.target.value);
    setQuery('');
  };

  const handleGenreChange = (e) => {
    const genreId = e.target.value;
    setSelectedGenreId(genreId);
    applyFilters(allFilms, query, genreId);
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
