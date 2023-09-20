import Home from "../../pages/Home/Home.jsx";
import Types from "../../pages/Types/Types";
import Viewpokemon from "../../pages/ViewPokemon/ViewPokemon";

export const paths = Object.freeze({
  HOME: "/",
  VIEW_POKEMON: "/View-pokemon",
  TYPES: "/Types",
});
export const ROUTES = Object.freeze([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: paths.VIEW_POKEMON,
    element: <Viewpokemon />,
  },
  {
    path: paths.TYPES,
    element: <Types />,
  },
]);
