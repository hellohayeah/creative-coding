import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import works from "./works";
import Home from "./components/Home";
import Work from "./components/Work";

const App: FC = () => (
  <Switch>
    <Route
      exact
      path="/work/:id"
      render={({ match }) => (
        <Work {...works[works.length - parseInt(match.params.id)]} />
      )}
    />
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default App;
