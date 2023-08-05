import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Comics from "./comics/Comics";
import Characters from "./characters/Characters";
import News from "./stories/News";
import Comic from "./comics/Comic";
import Character from "./characters/Character";
import Error404 from "./Error404";
import Creator from "./creators/Creator";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error404 />,
    children: [
      {
        path: "marvel",
        element: <App />,
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
