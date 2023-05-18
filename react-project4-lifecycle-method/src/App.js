import './App.css';
import Example from './Example';
import { useState } from 'react';

function App() {

  const [show,setShow] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        Clik
      </button>
      {
        show === true ? <Example /> : null
      }
      
    </div>
  );
}

export default App;
