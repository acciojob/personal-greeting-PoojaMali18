
import React from "react";
import {useState} from "react"
import './../styles/App.css';

const App = () => {

   const [name,setName] = useState("");
  
  
    

  return (
    <div>
        {/* Do not remove the main div */}
       <form>
        <label>Enter your name:</label>
        <input onChange={(e)=>setName(e.target.value)} placeholder="enter name"></input>
        </form>     
      <h1>Hello {name}</h1>
    </div>
  )
}

export default App
