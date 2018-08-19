import app from 'apprun';

import './components/header';
import './components/home';
import './components/new-movie';

app.on('#', (route, ...p) => {
  app.run(`#/${route || ''}`, ...p);
})