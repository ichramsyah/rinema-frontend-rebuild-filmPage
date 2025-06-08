// src/api/apiClient.js
import filmsData from '../films.json';
import genresData from '../genres.json';

const apiClient = {
  getAllFilms: () => {
    // Simulate API delay and return data structure consistent with what useSearchPosts expects
    return Promise.resolve({ data: { data: filmsData.films } });
  },
  getAllGenres: () => {
    // Simulate API delay and return data structure consistent with what useSearchPosts expects
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
};

export default apiClient;
