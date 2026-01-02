import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Page404 from "./pages/404";
import AboutMe from "./pages/AboutMe";
import HelpYou from "./pages/HelpYou";
import Home from "./pages/Home";
import HowTo from "./pages/HowTo";
import { routes } from "./routes";

// Mapa string -> componente (evita los ternarios)
const componentMap = {
  Home,
  AboutMe,
  HelpYou,
  HowTo,
};

function App() {
  return (
    <>

      <Router basename="/">
        <Switch>
          {routes.map((r) => {
            const Component = componentMap[r.component];
            if (!Component) return null;

            return (
              <Route
                exact
                key={r.path}
                path={r.path}
                component={Component}
              />
            );
          })}

          <Route path="*" component={Page404} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
