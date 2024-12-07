import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./components/Login";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
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
