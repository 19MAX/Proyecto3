import "./App.css";
import Cards from "./components/card/Cards";
import AddCharacter from "./components/add/Add";
import Edit from "./components/edit/Edit";
import See from "./components/see+/See";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Cards />
    },
    {
      path: "/add",
      element: <AddCharacter />
    },
    {
      path: "/update/:id",
      element: <Edit />
      // errorElement: <ErrorPage />,
    },
    {
      path: "/view/:id",
      element: <See />
      // errorElement: <ErrorPage />,
    }
  ])
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={route}></RouterProvider>
      </header>
    </div>
  );
}

export default App;

