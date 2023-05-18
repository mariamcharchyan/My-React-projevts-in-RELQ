import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state)
  // console.log(data);

  //Առաջադրանք 3
  const list = data.inputVal!=="" ? data.filtList : data.list 
  

  return (
    <div className="App">
      
      <hr/><h4>Առաջադրանք 1</h4>

      <button onClick={() => dispatch({type:"INCREMENT_COUNT"})}>Click+</button>
      <p>{data.count}</p>
      <button onClick={() => dispatch({type:"DICREMENT_COUNT"})}>Click-</button>
      <p>name: {data.name}</p>
      <p>age: {data.age}</p>
      <p>phoneNumber: {data.phoneNumber}</p>
      
      <hr/><h4>Առաջադրանք 2</h4>

      <input onChange={(evt)=>dispatch({type:"CHANGE_TEXT", payload: evt.target.value})} />
      <p>{data.text}</p>

      <hr/><h4>Առաջադրանք 3</h4>

      <div>
        <input onChange={(evt)=>dispatch({type:"FILTER_TEXT", payload: evt.target.value})} />
        <ul>
        {list.map((val,i)=><li key={i}>{val}</li>)}
          {/* {data.list.map((val, i) => {
              return <li key={i}>{val}</li>;
            })
          } */}
        </ul>
      </div>

    </div>
  );
}

export default App;
