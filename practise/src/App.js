import logo from "./logo.svg";
import "./App.css";
import Timer from "./components/Timer";
import TodoList from "./components/TodoList";
import DataFetching from "./components/DataFetching";

function App() {
  return (
    <div className="App">
      <Timer />
      <br />
      <br />
      <TodoList /> <br /> <br />
      <DataFetching />
    </div>
  );
}

export default App;
