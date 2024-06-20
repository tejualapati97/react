import logo from "./logo.svg";
import "./App.css";
import Timer from "./components/Timer";
import TodoList from "./components/TodoList";
import DataFetching from "./components/DataFetching";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Header/>,
      children:[
      {
        path:"/",
        element:<Timer/>,
        errorElement:<NotFound/>
      },
      {
        path:"/todos",
        element:<TodoList/>
      },
      {
        path:"/fetching",
        element:<DataFetching/>
      }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
