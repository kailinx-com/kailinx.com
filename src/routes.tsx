import { createBrowserRouter } from "react-router-dom";
import { SiteLayout } from "./components/SiteLayout";
import AboutPage from "./About/AboutPage";
import HomePage from "./Home/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
]);
