import logo from './logo.svg';
import './App.css';
import Aragadranq1 from './Aragadranq1.js';
import Aragadranq2 from './Aragadranq2.js';
import Aragadranq3 from './Aragadranq3.js';
import Aragadranq4 from './Aragadranq4.js';
import Fetch from './Fetch';
import ClassComponent1 from './ClassComponents';
import ClassComponent2 from './ClassComponent2';
import GetCount from './GetCount';


function App() {  
  return (
    <div className="App">
      <h1>Aragadranqner</h1>
      <Aragadranq1 age={27} />
      <Aragadranq2 />
      <Aragadranq3 />
      <Aragadranq4 />
      <Fetch />
      <ClassComponent1 />
      <ClassComponent2 />
      <GetCount />

    </div>
  );
}

export default App;