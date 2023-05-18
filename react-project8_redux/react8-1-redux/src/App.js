import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state)
  console.log(data);
  return (
    <div className="App">
      <button onClick={() => dispatch({type:"INCREMENT_COUNT"})}>Click+</button>
      <p>{data.count}</p>
      <button onClick={() => dispatch({type:"DICREMENT_COUNT"})}>Click-</button>
      <p>name: {data.name}</p>
      <p>age: {data.age}</p>
      <p>phoneNumber: {data.phoneNumber}</p>
    </div>
  );
}

export default App;
