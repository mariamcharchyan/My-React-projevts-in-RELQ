import './App.css';
import React, {useState, useMemo} from 'react'

function App() {
    const[state, setState] = useState([]);
    const[count, setCount] = useState(0);

    const number = useMemo(() => getCount(count), [count]);

    return (
        <div className='App'>
          <h3>GetCount: </h3>
          <button onClick={() => setState([...state, "New ToDo"])}> Add ToDo</button>
          {state.map((element, index) => { return <p key={index}> {element} </p>})}
          <div>
            <button onClick={() => setCount(count + 1)}> +1 </button>
            <p>{count}</p>
          </div>
        </div>
    )
}

const getCount = (count) =>  {
        console.log(count)
    }
export default App