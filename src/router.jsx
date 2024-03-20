import { createBrowserRouter } from "react-router-dom";
import Typography from "@mui/material/Typography";
import MainLayout from "./layouts/MainLayout";
import SignIn from "./pages/login/SignIn";
import Home from "./pages/home/Home";
import Income from "./pages/Income";
import Accountancy from "./pages/Accountancy";
import Treasury from "./pages/Treasury";
import Credits from "./pages/Credits";
import Reports from "./pages/Reports";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/mesadeentradas", element: <Income /> },
      { path: "/contaduria", element: <Accountancy /> },
      { path: "/tesoreria", element: <Treasury /> },
      { path: "/creditos", element: <Credits /> },
      { path: "/reportes", element: <Reports /> },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

export default router;
