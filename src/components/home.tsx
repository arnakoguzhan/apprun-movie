import app, { Component, on } from 'apprun';
import { movies } from '../api';
import { IMovie } from '../models';
import Movies from './movie-list';

declare interface IState {
  movies: Array<IMovie>
}

class HomeComponent extends Component {
  state: IState = {
    movies: []
  };

  view = (state) => {
    return <div className="album py-5 bg-light">
      <div className="container page">
        <div className="row">
            <Movies movies={state.movies} component={this} />
        </div>
      </div>
    </div>
  }

  updateState = async (state) => {
    try {
      let feed;
      feed = await movies.getAll();

      return {
        ...state,
        movies: feed.movies,
      }
    } catch ({ errors }) {
      return { ...state, errors, movies: [] }
    }
  }

  @on('#/')  root = async (state) => await this.updateState(state)
  @on('#/feed')  movies = async (state) => await this.updateState(state)

}

export default new HomeComponent().mount('my-app')

