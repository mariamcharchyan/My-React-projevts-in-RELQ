import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import "./App.css";
import { useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="">
      <Routes>
        <Route
          path="/"
          element={
            isLogged ? (
              <Home setIsLogged={setIsLogged} isLogged={isLogged} />
            ) : (
              <Login setIsLogged={setIsLogged} isLogged={isLogged} />
            )
          }
        />
        <Route
          path="/login"
          element={<Login/>}
        />
      </Routes>
    </div>
  );
}

export default App;
