import { ADMIN_ROUTE, CAKES_ROUTE, CAKE_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from "./utils/consts";
import Admin from "./pages/Admin";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import Cakes from "./pages/Cakes";
import Cake from "./pages/Cake";

export const adminRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  }
]

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Main
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: CAKES_ROUTE,
    Component: Cakes
  },
  {
    path: CAKE_ROUTE,
    Component: Cake
  }
]