import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error404 from "./Error404";
import MarvelHomePage from "./MarvelHomePage";
import Character from "./characters/Character";
import Characters from "./characters/Characters";
import Comic from "./comics/Comic";
import Comics from "./comics/Comics";
import Creator from "./creators/Creator";
import News from "./stories/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: "marvel",
        element: <MarvelHomePage />,
        errorElement: <Error404 />,
        children: [
          { path: "stories", element: <News /> },
          { path: "comics", element: <Comics /> },
          { path: "comics/:id", element: <Comic /> },
          { path: "characters", element: <Characters /> },
          { path: "characters/:id", element: <Character /> },
          { path: "creators/:id", element: <Creator /> },
        ],
      },
    ],
  },
]);

export default router;
