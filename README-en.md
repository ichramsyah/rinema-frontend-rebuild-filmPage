# Rebuild Film Page Rinema

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Deployed](https://img.shields.io/badge/Deployed-Yes-green)](https://rinemaa.paramadina.ac.id/)

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

This project is a modern rebuild of the film page from my original web application, **Rinema** (https://rinemaa.paramadina.ac.id/film), recreated as a React-based web app. It showcases a dynamic search and filter system for movies, leveraging real-time data from the Rinema API I developed. This portfolio piece highlights my skills in React development, state management, and the application of advanced design patterns and performance optimizations.

## Features

- **Dynamic Film Listing**: Displays all films from the Rinema API with details such as title, producer, director, cast, release year, duration, rating, genres, and synopsis.
- **Search Functionality**: Real-time search by title with debounce to optimize performance.
- **Filter Options**: Sort by "All Films," "Latest," "Oldest," or "Popular," and filter by genre.
- **Responsive Design**: Built with Tailwind CSS for a clean, mobile-friendly UI.
- **API Integration**: Fetches data from multiple endpoints (e.g., `/allFilm`, `/latest`, `/allGenre`) of my custom Rinema API.
- **Show Film Feature**: Allows users to click a film and view detailed information via the `/films/{film}` endpoint.

## Tech Stack

- **React**: Core framework for building the UI.
- **Axios**: For API requests to the Rinema API.
- **Tailwind CSS**: For styling with a utility-first approach.
- **Lodash**: Used for the debounce function to enhance search performance.
- **Custom Hooks**: Encapsulates logic for data fetching and filtering.
- **React Router DOM**: For navigation to film detail pages.

## Key Concepts Applied

- **Debounce**: Implemented with Lodash to delay search queries, reducing unnecessary API calls and improving app responsiveness.
- **Custom Hooks**: Created `useSearchPosts` to manage state, API calls, and filtering logic, promoting reusability and separation of concerns.
- **Container-Presenter Pattern**: Separates logic (in `SearchContainer`) from presentation (in `SearchPresenter`) for better maintainability.
- **Facade Pattern**: Used with `apiClient` to simplify Axios configuration and API interactions.
- **Single Responsibility Principle**: Each component and hook handles a specific task, enhancing code clarity.
- **Responsive Design**: Utilizes Tailwind's utility classes for a seamless experience across devices.

## Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd my-search-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open http://localhost:3000 in your browser.

## Usage

- Use the dropdowns to sort films (e.g., "Latest") or filter by genre (e.g., "Horror").
- Type in the search bar to find films by title.
- Explore film details including posters and synopses.
- Click "Lihat Detail" or "View Detail" to see a dedicated page with full film information.

## API Endpoints

- `/allFilm`: Lists all films.
- `/latest`: Shows the latest films.
- `/oldest`: Displays the oldest films.
- `/popular`: Features popular films.
- `/allGenre`: Retrieves available genres.
- `/films/{film}`: Provides detailed information for a specific film by ID.

## Project Structure

```
rebuild-rinema/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── api/              # API client configuration
│   ├── components/
│   │   ├── Search/       # Search components
│   │   │   ├── SearchContainer.jsx
│   │   │   └── SearchPresenter.jsx
│   │   ├── FilmDetail/   # New components for film details
│   │   │   ├── FilmDetailContainer.jsx
│   │   │   └── FilmDetailPresenter.jsx
│   ├── hooks/            # Custom hooks (useSearchPosts, useFilmDetail)
│   │   ├── useSearchPosts.js
│   │   └── useFilmDetail.js
│   ├── App.jsx           # Main App component with routing
│   ├── index.jsx         # Entry point
│   ├── index.css         # Global styles
│   ├── tailwind.config.js # Tailwind configuration
│   └── package.json      # Project dependencies
```

## Contributing

Contributions are welcome! Please read our [Code of Conduct](CODE_OF_CONDUCT.markdown) for guidelines on how to engage with the community. To contribute:

- Fork the repository.
- Submit issues or pull requests with enhancements (e.g., pagination, detailed film pages).

## License

This project is licensed under the [MIT License](LICENSE.txt), allowing free use, modification, and distribution with the inclusion of the copyright notice.

## Acknowledgments

- Built and inspired by my original web app, Rinema (https://rinemaa.paramadina.ac.id).
- API data sourced from my custom Rinema API.

## Future Improvements

- Add pagination for large film lists.
- Enhance the film detail page with interactive features (e.g., rating submission).
- Improve error handling with user-friendly messages.
