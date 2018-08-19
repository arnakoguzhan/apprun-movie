import app from 'apprun';
import { IMovie } from '../models';

function Movie(props) {
  const movie = props.movie as IMovie;

  return <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img className="card-img-top" src={movie.cover} />
        <div className="card-body">
          <p className="card-text">{movie.title}</p>
        </div>
      </div>
    </div>
}

export default function ({ movies, component }: { movies: Array<IMovie>, component }) {
  return movies.length
    ? movies.map(movie => <Movie movie={movie} component={component}></Movie>)
    : <div className="movie-preview">No data</div>
}