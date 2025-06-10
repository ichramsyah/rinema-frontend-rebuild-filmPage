# Rebuild Rinema Film Page

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Deployed](https://img.shields.io/badge/Deployed-Yes-green)](https://rinemaa.paramadina.ac.id/)

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

#### [README.md](README-en.md) English Version

This project is a modern rebuild of the movie page from my web application, Rinema. Reimplemented as a Single Page Application (SPA) using React, it connects directly to the live Rinema API to provide dynamic search and movie filtering. This portfolio highlights my capabilities in front-end development with React, efficient state management, API integration, and the application of advanced design patterns and performance optimizations.

## Features

- **Direct API Integration**: Fetches movie and genre data in real-time from the live Rinema API, replacing previous static JSON file usage.
- **Server-side Sorting**: Sort options like "Latest", "Oldest", or "Popular" use dedicated API endpoints for optimal performance.
- **Search & Filter Functionality**: Real-time search by title and genre filtering sorted alphabetically.
- **Responsive Design**: Built with Tailwind CSS for a clean, modern, and mobile-friendly user interface.
- **Detailed Movie Information**: Allows users to click on a movie to view complete details on a separate page via React Router.

## Technology Stack

- **React**: Core framework for building interactive UIs.
- **Vite**: A modern build tool for super-fast development.
- **Axios**: For reliable HTTP requests to the Rinema API.
- **Tailwind CSS**: Styling with a fast and flexible utility-first approach.
- **Custom Hooks**: Encapsulated logic for fetching and filtering data (`useSearchPosts` and `useFilmDetail`) for cleaner, reusable code.
- **React Router DOM**: For client-side routing between the movie list and detail pages.

## Key Concepts Applied

- **Debounce**: Implements delay on search queries to reduce unnecessary function calls and improve responsiveness.
- **Custom Hooks**: Created `useSearchPosts` and `useFilmDetail` to manage state, API calls, and filter logic, supporting reusability and separation of concerns.
- **Container-Presenter Pattern**: Separates logic (`SearchContainer`, `FilmDetailContainer`) from UI (`SearchPresenter`, `FilmDetailPresenter`) for easier maintenance and scalability.
- **Facade Pattern**: Uses `apiClient` to simplify Axios configuration and API interaction, hiding complexity from consuming components.
- **Single Responsibility Principle**: Each component and hook is designed to perform one main task, increasing code clarity and testability.
- **Responsive Design**: Tailwind utility classes ensure smooth user experience across all screen sizes.

## Installation

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd rebuild-rinema
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) (or another port indicated in the terminal) in your browser.

## Usage

- Use the dropdown to sort movies (e.g., "Latest") or click on the sorted genre buttons to filter.
- Type in the search field to search for movies by title.
- Explore movie details including posters and synopses.
- Click "View Details" to go to the full movie information page.

## API Endpoints

All requests point to the base URL: [https://rinemaa.paramadina.ac.id/api](https://rinemaa.paramadina.ac.id/api)

- `GET /films/allFilm`: Returns all movies.
- `GET /films/latest`: Returns the latest movies.
- `GET /films/oldest`: Returns the oldest movies.
- `GET /films/popular`: Returns popular movies.
- `GET /films/allGenre`: Fetches a list of available genres.
- `GET /films/films/{film}`: Provides detailed information for a specific movie by ID.

## Project Structure

```
rebuild-rinema/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── api/              # Centralized API client (Facade Pattern)
│   ├── components/
│   │   ├── Search/       # Search components (Container & Presenter)
│   │   │   ├── SearchContainer.jsx
│   │   │   └── SearchPresenter.jsx
│   │   ├── FilmDetail/   # Movie detail components (Container & Presenter)
│   │   │   ├── FilmDetailContainer.jsx
│   │   │   └── FilmDetailPresenter.jsx
│   ├── hooks/            # Custom hooks for state & logic
│   │   ├── useSearchPosts.js
│   │   └── useFilmDetail.js
│   ├── App.jsx           # Main App component with routing
│   ├── index.jsx         # Application entry point
│   ├── index.css         # Global styles
│   ├── tailwind.config.js # Tailwind configuration
│   └── package.json      # Project dependencies
```

## Contribution

Contributions are welcome! Please refer to the [Code of Conduct](CODE_OF_CONDUCT.markdown) for community guidelines. To contribute:

- Fork this repository.
- Open an issue or submit a pull request with improvements (e.g., pagination, rating feature).

## License

This project is licensed under the [MIT License](LICENSE.txt), allowing free use, modification, and distribution with copyright notice.

## Credits

- Built and inspired by my web application Rinema ([https://rinemaa.paramadina.ac.id](https://rinemaa.paramadina.ac.id)).
- Data initially sourced from local JSON files simulating the structure of the Rinema API.

## Screenshots

/Film
![image](https://github.com/user-attachments/assets/a0acccde-0dc5-4103-93d7-87a229e253b0)

/DetailFilm
![image](https://github.com/user-attachments/assets/88347f26-f72d-41cf-aa8b-277b6c21d224)

## Future Enhancements

- Add pagination or infinite scroll to efficiently handle long movie lists.
- Improve movie detail pages with interactive features (e.g., user rating submission).
- Enhance error handling with more informative and user-friendly messages.
- Add unit and integration tests to ensure code reliability.
