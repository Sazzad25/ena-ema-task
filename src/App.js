import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import ClientServices from "./components/ClientServices";
import Wishlist from "./components/Wishlist";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/client-services",
      element: <ClientServices></ClientServices>,
    },
    {
      path: "/wishlist-show",
      element: <Wishlist></Wishlist>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
