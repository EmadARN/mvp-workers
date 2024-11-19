import { useRoutes } from "react-router-dom";
import routes from "./Routes";

export default function App() {
  let router = useRoutes(routes);
  return router;
}
