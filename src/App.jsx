import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import ReelsPage from "./components/ReelsPage";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/reels",
        element: <ReelsPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
const App = () => {
  return (
    <div className="">
      <RouterProvider router={appRoutes} />
    </div>
  );
};

export default App;
