import App from "../App";
import CharacterDetails from "../components/CharacterDetails";
import Error404 from "../components/Error404";

export const MyRoutes = [
    { path: "/", element: <App /> },
  { path: "/:id", element: <CharacterDetails /> },
  { path: "*", element: <Error404 /> },
  { path: "/error404", element: <Error404 /> },
];