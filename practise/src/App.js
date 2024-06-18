import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
     <Timer/><br/><br/>
     <TodoList/>
    </div>
  );
}

export default App;
