import { createBrowserRouter } from "react-router";
import Homelayout from "../layouts/Homelayout";
import Homepage from "../page/Homepage";
import CategoryNews from "../page/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
    children: [
      {
        path: "",
        element: <Homepage></Homepage>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader:()=>fetch("/news.json")
      },
    ],
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
