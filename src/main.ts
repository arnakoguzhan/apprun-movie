import app from "apprun";

import "./containers/Home";
import "./containers/AddMovie";

app.on("#", (route, ...p) => {
  app.run(`#/${route || ""}`, ...p);
});
