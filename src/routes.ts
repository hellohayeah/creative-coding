import Home from "./components/Home";
import Work from "./components/Work";

const routes = [
  { path: "/work/:id", name: "Work", Component: Work },
  { path: "/", name: "Home", Component: Home },
];

export default routes;
