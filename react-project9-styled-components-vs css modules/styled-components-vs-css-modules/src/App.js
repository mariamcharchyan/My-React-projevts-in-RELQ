import logo from './logo.svg';
import './App.css';
import Button from './Button'
function App() {
  return (
    <div className="App">
      <Button color='green'> button </Button>
      <Button > button </Button>
      <Button color='yellow'> button </Button>
      {/* background={true} sa nuynn e inch vor background */}
      <Button background> button </Button>
    </div>
  );
}

export default App;
