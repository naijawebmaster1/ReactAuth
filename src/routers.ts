import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Dashboard from "./dashboard/Dashboard";
import Login from "./auth/Login";
import Register from "./auth/Register";
import PageNotFound from "./404"
export const publicRoutes = [
  { route: "/", component: Main },
  { route: "*", component: PageNotFound },
];
export const privateRoutes = [
  { route: "/dashboard", component: Dashboard },
];
export const authRoutes = [
  { route: "/login", component: Login },
  { route: "/register", component: Register },
];
