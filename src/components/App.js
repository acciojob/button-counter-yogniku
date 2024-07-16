
import React from "react";
import './../styles/App.css';
import { useState } from "react";
const App = () => {
  let[count,setData]=useState(0)
 
     
       
  function updateData() {
    setData(prevCount => prevCount + 1)
  }
  return(
<div className="App">
  
  <p>button cliked {count} times</p>
  <button onClick={updateData}>click me</button>
    </div>
  )
}

export default App
