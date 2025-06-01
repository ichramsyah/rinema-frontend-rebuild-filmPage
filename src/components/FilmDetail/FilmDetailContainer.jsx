import { useParams } from 'react-router-dom';
import useFilmDetail from '../../hooks/useFilmDetail';
import FilmDetailPresenter from './FilmDetailPresenter';

function FilmDetailContainer() {
  const { id } = useParams(); // Ambil ID dari URL
  const { film, loading, error } = useFilmDetail(id);

  return <FilmDetailPresenter film={film} loading={loading} error={error} />;
}

export default FilmDetailContainer;
