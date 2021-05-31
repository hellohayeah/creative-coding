import { FC } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import routes from "./routes";

const App: FC = () => {
  let location = useLocation();

  return (
    <div className="app">
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={300} classNames="fade">
          <Switch location={location}>
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path} children={<Component />} />
            ))}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default App;
