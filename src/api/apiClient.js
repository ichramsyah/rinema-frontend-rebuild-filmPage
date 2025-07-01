// src/api/apiClient.js
import filmsData from '../films.json';
import genresData from '../genres.json';

const BASE_URL = 'https://rinemaa.paramadina.ac.id/api';

const apiClient = {
  getAllFilms: () => {
    return Promise.resolve({ data: { data: filmsData.films } });
  },
  getAllGenres: () => {
    return Promise.resolve({ data: genresData.genres });
  },
  getFilmById: (id) => {
    // Simulate API delay and find the film
    const film = filmsData.films.find((f) => f.id.toString() === id.toString());
    if (film) {
      return Promise.resolve({ data: film });
    } else {
      return Promise.reject(new Error('Film not found'));
    }
  },

  login: async (email, password) => {
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login gagal');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
  getMyRatings: async (token) => {
    try {
      const response = await fetch(`${BASE_URL}/user/ratings`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Gagal mengambil data rating');
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  },
  getUserProfile: async (token) => {
    try {
      const response = await fetch(`${BASE_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Gagal mengambil data profil');
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  },
  getMyReplies: async (token) => {
    try {
      const response = await fetch(`${BASE_URL}/user/forum-replies`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Gagal mengambil data pesan');
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  },
};

export default apiClient;
