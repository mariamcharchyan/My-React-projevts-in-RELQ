import './App.css';
import InpBuutP from './InpBuutP';
import Texst from './Texst'; 
import List from './MyList';
import ButtonState from './Hooks.js';
import HookUseMemoe from './HookUseMemo'

const myList = ['Peter', 'Sachin', 'Kevin', 'Dhoni', 'Alisa'];
function App() {
  return (
    <div className="App">
      <Texst name='start'/>  
      <InpBuutP />
      <Texst name='completion' />
      <List myList = {myList}/>
      <ButtonState />
      <HookUseMemoe />

    </div>
  );
}

export default App;

