import app, { Component, on } from "apprun";
import { movies } from "../api";
import { IMovie } from "../models";
import Movies from "../components/movie-list";
import Header from "../components/header";
import Footer from "../components/footer";

declare interface IState {
  movies: Array<IMovie>;
  filterText: string;
}

class HomeComponent extends Component {
  state: IState = {
    movies: [],
    filterText: ""
  };

  view = state => {
    const filteredMovies = this.state.movies.filter(movie => {
      return (
        movie.title
          .toLowerCase()
          .indexOf(this.state.filterText.toLowerCase()) !== -1
      );
    });

    return (
      <div>
        <Header
          filterText={this.state.filterText}
          handler={e => this.run("on-search", e)}
        />
        <main role="main">
          <div className="album py-5 bg-light">
            <div className="container page">
              <div className="row">
                <Movies movies={filteredMovies} component={this} />
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  };

  updateState = async state => {
    try {
      let feed;
      feed = await movies.getAll();

      return {
        ...state,
        movies: feed.movies
      };
    } catch ({ errors }) {
      return { ...state, errors, movies: [] };
    }
  };

  @on("#/")
  root = async state => await this.updateState(state);

  @on("on-search")
  search = (state, e) => {
    console.log(e.target.value);
    this.setState({ ...this.state, filterText: e.target.value });
  };
}

export default new HomeComponent().mount("my-app");
