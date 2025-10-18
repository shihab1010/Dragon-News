import { createBrowserRouter } from "react-router";
import Homelayout from "../layouts/Homelayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
  },
  {
    path: "/auth",
    element: <h1>Authentication layout</h1>,
  },
  {
    path: "/news",
    element: <h1>News layout</h1>,
  },
  {
    path: "/*",
    element: <h1>Error-404</h1>,
  },
]);
export default router;
