import app from "apprun";

const HeaderComponent = props => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Movie
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbarsExample07"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#/add-new">
                  Add New
                </a>
              </li>
            </ul>

            <form className="form-inline my-2 my-md-0">
              <input
                className="form-control"
                placeholder="Search"
                value={props.filterText}
                onchange={props.handler}
                type="text"
              />
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
