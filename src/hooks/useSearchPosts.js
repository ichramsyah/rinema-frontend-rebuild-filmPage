// src/hooks/useSearchPosts.js
import { useState, useEffect } from 'react';
import { debounce } from 'lodash';
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

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await apiClient.getAllGenres();
        setGenres(response.data || []); // Default ke array kosong jika undefined
        setError(null);
      } catch (err) {
        setError('Gagal mengambil genre. Coba lagi nanti.');
        console.error('Error fetching genres:', err);
        setGenres([]);
      }
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchFilms = async () => {
      setLoading(true);
      try {
        const response = await apiClient.getAllFilms();
        let films = response.data?.data || []; // Gunakan optional chaining dan default ke array kosong

        // Debugging: Periksa semua film dari API
        console.log('All Films from API:', films);

        // Hapus duplikat berdasarkan id
        const uniqueFilms = Array.from(new Map(films.map((film) => [film.id, film])).values());

        // Terapkan sort berdasarkan sortMode
        switch (sortMode) {
          case 'latest':
            uniqueFilms.sort((a, b) => new Date(b.tahun_rilis) - new Date(a.tahun_rilis));
            break;
          case 'oldest':
            uniqueFilms.sort((a, b) => new Date(a.tahun_rilis) - new Date(b.tahun_rilis));
            break;
          case 'popular':
            uniqueFilms.sort((a, b) => b.average_rating - a.average_rating || b.ratings_count - a.ratings_count);
            break;
          default:
            break;
        }

        setAllFilms(uniqueFilms);
        // Panggil applyFilters setelah allFilms di-set
        applyFilters(uniqueFilms, query, selectedGenreId);
        setError(null);
      } catch (err) {
        setError('Gagal mengambil data dari API. Coba lagi nanti.');
        console.error('Error fetching films:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchFilms();
  }, [sortMode]); // Pindahkan `query` dan `selectedGenreId` dari dependency array ini

  // Pindahkan pemanggilan applyFilters ke dalam useEffect terpisah
  useEffect(() => {
    applyFilters(allFilms, query, selectedGenreId);
  }, [query, selectedGenreId, allFilms]); // Tambahkan allFilms sebagai dependency

  const applyFilters = (films, searchQuery, genreId) => {
    let filteredFilms = [...films];

    // Debugging: Periksa input filter
    console.log('--- Applying Filters ---');
    console.log('Original films for filtering:', films);
    console.log('Selected Genre ID for filtering:', genreId);
    console.log('Search Query for filtering:', searchQuery);

    if (genreId) {
      const numericGenreId = parseInt(genreId);
      filteredFilms = filteredFilms.filter(
        (film) =>
          // PENTING: Ubah logika filtering di sini
          film.genres && film.genres.some((genre) => genre.id === numericGenreId)
      );
    }

    if (searchQuery) {
      filteredFilms = filteredFilms.filter((film) => film.judul.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    // Debugging: Periksa hasil filter
    console.log('Filtered Results after applying filters:', filteredFilms);

    // Hapus duplikat berdasarkan id (meskipun seharusnya sudah unik)
    const uniqueFilteredFilms = Array.from(new Map(filteredFilms.map((film) => [film.id, film])).values());

    setResults(uniqueFilteredFilms);
  };

  const debouncedFilter = debounce((searchQuery) => {
    applyFilters(allFilms, searchQuery, selectedGenreId);
  }, 500);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedFilter(value); // Gunakan debounce untuk pencarian
  };

  const handleSortChange = (e) => {
    setSortMode(e.target.value);
    // Saat sortMode berubah, kita ingin memfilter ulang dengan query dan genre yang ada
    // applyFilters akan dipanggil oleh useEffect yang mengamati sortMode
    // setQuery(''); // Baris ini mungkin tidak diinginkan jika ingin mempertahankan query saat sort
  };

  const handleGenreChange = (e) => {
    const genreId = e.target.value;
    setSelectedGenreId(genreId);
    // applyFilters akan dipanggil oleh useEffect yang mengamati selectedGenreId
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
