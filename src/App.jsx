import "./App.css";
import React from "react"
import Home from "./pages/home/home";
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      
    </div>
    
  );
}

export default App;
