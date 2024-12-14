import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./components/Login";
import Testing from "./components/Testing";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Testing />,
    errorElement: <h1>Erro</h1>,
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
