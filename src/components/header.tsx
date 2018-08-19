import app, { Component } from 'apprun';

class HeaderComponent extends Component {
  state = {}
  view = state => {
    return <ul className="nav navbar-nav">
    <li className="active"><a href="#/">Home</a></li>
    <li><a href="#/new">Add new</a></li>
  </ul>
  }

}

export default new HeaderComponent().start('header')