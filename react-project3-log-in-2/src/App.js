import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/LoginForm/LoginForm';
import { useState } from 'react';
import LoggedIn from './Components/Loggedin/Loggedin';

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {isLoggedIn ? (
        <LoggedIn setIsLoggedIn={setIsLoggedIn}/>
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn}/>
      )}
    </div>
  );
}

export default App;
