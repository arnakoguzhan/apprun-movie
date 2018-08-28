import app, { Component, on } from "apprun";
import Header from "../components/header";
import Footer from "../components/footer";
import { movies, serializeObject } from "../api";

class HomeComponent extends Component {
  view = state => {
    return (
      <div>
        <Header />

        <main role="main">
          <div className="row justify-content-center">
            <form
              onsubmit={e => this.run("add-movie", e)}
              className="text-center border border-light p-5"
            >
              <p className="h4 mb-4">Add new movie</p>
              <input
                type="text"
                name="title"
                id="title"
                className="form-control mb-4"
                placeholder="Title"
              />
              <input
                type="text"
                name="cover"
                id="cover"
                className="form-control mb-4"
                placeholder="Cover Image url"
              />
              <button className="btn btn-info btn-block" type="submit">
                Submit
              </button>
            </form>
          </div>
        </main>

        <Footer />
      </div>
    );
  };

  @on("#/add-new")
  add_new = state => {
    return state;
  };

  @on("add-movie")
  add_movie = async (state, e) => {
    try {
      e.preventDefault();
      const response = await movies.create(serializeObject(e.target));
      if (response) {
        document.location.hash = "#/";
        return;
      }
    } catch (e) {
      return { ...state, errors: [e.message] };
    }
  };
}

export default new HomeComponent().mount("my-app");
