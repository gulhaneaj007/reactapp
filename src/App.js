import React,{useRef} from "react";
import Child from "./Child";
import "./App.css";
function App() {

  function updateInput(){
    inputRef.current.value="1000"
    inputRef.current.style.color="red"
    inputRef.current.style.backgroundColor="Yellow"
    inputRef.current.focus()
   }

  let inputRef=useRef(null)
  return (
    <div className="App container-fluid"  style={{border:"solid 1px"}}>
      <p className="display-6">forwordRef Hooks in React JS</p>
      <Child ref={inputRef}/>
      <br/>
      <br/>
      <button onClick={updateInput} className="btn btn-sm btn-success">Update Input</button>
      
    </div>
  );
}

export default App;
