import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import works from "./works.json";
import Home from "./components/Home";
import Work from "./components/Work";

const App: FC = () => {
  return (
    <Switch>
      <Route
        exact
        path="/work/:id"
        render={({ match }) => (
          <Work {...works[parseInt(match.params.id) - 1]} />
        )}
      />
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default App;
