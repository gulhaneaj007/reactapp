import React, {  useRef } from "react";
import "./App.css";
function App() {
  var inputRef=useRef(null)
  function handleinput(){
    console.warn("function called")
    inputRef.current.value="100"
    inputRef.current.style.color="red"
    inputRef.current.style.backgroundColor="Yellow"
    // inputRef.current.style.display="none"



    inputRef.current.focus()

  }
  return (
    <div className="App container">
      <h1 className="display-2">useRef Hooks in React JS</h1>
      <input type="text" ref={inputRef} />
      <br />
      <button onClick={handleinput} className="btn btn-sm btn-success my-2">
        Click Me
      </button>
      
    </div>
  );
}

export default App;
