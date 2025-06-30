import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Browse from "./components/Browse";


function App() {


  const appRouter = createBrowserRouter([
    {
    path: "/",
    element: <Login/>,
    },
    {
    path: "/browse",
    element: <Browse/>,
    },

  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
