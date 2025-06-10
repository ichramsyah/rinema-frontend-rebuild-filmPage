import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://rinemaa.paramadina.ac.id/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiClient = {
  getFilms: (sortMode = 'all') => {
    let endpoint = '/films/allFilm';

    switch (sortMode) {
      case 'latest':
        endpoint = '/films/latest';
        break;
      case 'oldest':
        endpoint = '/films/oldest';
        break;
      case 'popular':
        endpoint = '/films/popular';
        break;
      default:
        endpoint = '/films/allFilm';
    }

    console.log(`Fetching films from: ${endpoint}`); // Log untuk debugging
    return axiosInstance.get(endpoint);
  },

  getAllGenres: () => {
    return axiosInstance.get('/films/allGenre');
  },

  getFilmById: (id) => {
    if (!id) {
      return Promise.reject(new Error('Film ID is required'));
    }
    return axiosInstance.get(`/films/${id}`);
  },
};

export default apiClient;
