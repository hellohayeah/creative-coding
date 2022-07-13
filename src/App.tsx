import { FC } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import routes from "./routes";

const App: FC = () => {
  let location = useLocation();

  return (
    <div className="app">
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={300} classNames="fade">
          <Routes location={location}>
            {routes.map((route) => (
              <Route
                key={route.path}
                {...route}
                element={<route.Component />}
              />
            ))}
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default App;
