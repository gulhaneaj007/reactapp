import React, { useState, useMemo } from "react";
import "./App.css";
function App() {
  const [count, setcount] = useState(0);
  const [item, setitem] = useState(10);


  const multcontMemo=useMemo(  function multicount()
  {
    console.warn("multicount")
    return count*5
  },[count])

  return (
    <div className="App container">
      <br></br>
      <h1>useMemo Hooks in React JS</h1>
      <h2>Count : {count}</h2>
      <h2>Count : {item}</h2>
      <h2>multicount : {multcontMemo}</h2>
      <button onClick={() => setcount(count + 1)}>Update count</button>
      <br />
      <br />
      <button onClick={() => setitem(item * 10)}>Update item</button>
    </div>
  );
}

export default App;
