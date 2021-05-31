import Home from "./components/Home";
import Work from "./components/Work";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/work/:id", name: "Work", Component: Work },
];

export default routes;
