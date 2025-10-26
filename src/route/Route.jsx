import { createBrowserRouter } from "react-router";
import Homelayout from "../layouts/Homelayout";
import Homepage from "../page/Homepage";
import CategoryNews from "../page/CategoryNews";
import Login from "../page/Login";
import Register from "../page/Register";
import Authlayout from "../layouts/Authlayout";
import NewsDetails from "../page/NewsDetails";
import PrivateRoute from "../components/PrivateRoute";

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
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: (
          <div className="flex items-center justify-center min-h-screen">
            <span className="loading loading-spinner loading-md"></span>
          </div>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <Authlayout></Authlayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-md"></span>
      </div>
    ),
  },
  {
    path: "/*",
    element: (
      <h1 className="text-5xl font-bold text-center min-h-screen">Error-404</h1>
    ),
  },
]);
export default router;
