////////---1------------componentnery propsov-----------------------------------------------
//import './App.css';

// function Component1 (props){
//   return <Component2 name = {props.name} />
// }

// function Component2 (props){
//   return <div>component2 {props.name}</div>
// }

// function App() {
//   return (
//     <div className="App">
//       <Component1 name = "John" />
//     </div>
//   );
// }

// export default App;


////////---2------------componentnery createContext, useContext-ov---------------------------
// import './App.css';
// import {createContext, useContext} from 'react'

// const Context = createContext()

// function Component1 (){
//   return <Component2/>
// }

// function Component2 (){
//   const name = useContext(Context)
//   return <div>component2 {name}</div>
// }

// function App() {
//   return (
//     <div className="App">
//       <Context.Provider value={"John"}>
//         <Component1/>
//       </Context.Provider>
//     </div>
//   );
// }

// export default App;


////////---2------------componentnery createContext, useContext-ov---arandzin faylerov----------
import './App.css';
import Context from './Context';
import Component1 from './Component1';
import { useState } from 'react';


function App() {
  const [count, setSount] = useState(0);
  return (
    <div className="App">
      <button onClick={()=>setSount(count+1)}>+1</button>
      <Context.Provider value={count}>
        <Component1/>
      </Context.Provider>
    </div>
  );
}

export default App;
