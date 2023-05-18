import './App.css';
import {useState} from 'react'
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const onDelete=(todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id))
  }

  const onAdd =(text) => {
    setTodos([
      ...todos,
      {
        id: Math.random(),
        text:text,
        isCompleted: false
      }
    ])
  }

  return (
    <div className="App">
      <TodoForm onAdd={onAdd}/>
      <TodoList todos={todos} onDelete={onDelete} />
    </div>
  );
}

export default App;