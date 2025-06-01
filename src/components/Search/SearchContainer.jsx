import useSearchPosts from '../../hooks/useSearchPosts';
import SearchPresenter from './SearchPresenter';

function SearchContainer() {
  const { query, results, loading, error, genres, sortMode, selectedGenreId, handleInputChange, handleSortChange, handleGenreChange } = useSearchPosts();

  return (
    <SearchPresenter
      query={query}
      results={results}
      loading={loading}
      error={error}
      genres={genres}
      sortMode={sortMode}
      selectedGenreId={selectedGenreId}
      handleInputChange={handleInputChange}
      handleSortChange={handleSortChange}
      handleGenreChange={handleGenreChange}
    />
  );
}

export default SearchContainer;
