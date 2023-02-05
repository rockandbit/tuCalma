import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import page404 from "./pages/404";
import AboutMe from "./pages/AboutMe";
import HelpYou from "./pages/HelpYou";
import HowTo from "./pages/HowTo";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/"}`}
          component={Home}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/quien-soy"}`}
          component={AboutMe}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/puedo-ayudar"}`}
          component={HelpYou}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/como-lo-hacemos"}`}
          component={HowTo}
        />
        {/* <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/journal-single-post" }` }
                    component={ JournalSinglePost }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/search-results" }` }
                    component={ SearchResults }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/works" }` }
                    component={ Works }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/ui" }` }
                    component={ UserInterface }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/works-inside" }` }
                    component={ WorksInside }
                /> */}
        <Route exact component={page404} />
      </Switch>
    </Router>
  );
}

export default App;
