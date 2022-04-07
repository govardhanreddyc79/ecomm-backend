import "./App.css";
import React from "react"
import {Home, Products} from "pages";
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
      </Routes>
      
    </div>
    
  );
}

export default App;
