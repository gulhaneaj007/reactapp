import React, { useRef, useState } from "react";
import Child from "./Child";
import "./App.css";
function App() {
  function updateInput() {
    inputRef.current.value = "1000";
    inputRef.current.style.color = "red";
    inputRef.current.style.backgroundColor = "Yellow";
    inputRef.current.focus();
  }

  function submitFrom(e){
    e.preventDefault()
    console.warn("input field 1 value :", UnctrldRef1.current.value )
    console.warn("input field 2 value :", UnctrldRef2.current.value )
    let txt = document.getElementById("input3").value
    console.warn("input field 3 value :", txt )
  }

  


  //  Controlled Component
  const [val, setval] = useState("0000");

  let inputRef = useRef(null);

  let UnctrldRef1 = useRef(null);
  let UnctrldRef2 = useRef(null);


  return (
    <>
      <div className="App container-fluid" style={{ border: "solid 1px" }}>
        <p className="display-6">forwordRef Hooks in React JS</p>
        <Child ref={inputRef} />
        <br />
        <br />
        <button onClick={updateInput} className="btn btn-sm btn-success">Update Input</button>
      </div>

      {/* Controlled Component */}
      <div className="App container-fluid" style={{ border: "solid 1px" }}>
        <p className="display-6">Controlled Component</p>
        <input type="text" value={val} onChange={(e) => setval(e.target.value)} />
        <h3>value : {val}</h3>
        <br />
        <br />
      </div>


      {/*Un-Controlled Component */}
      <div className="App container-fluid" style={{ border: "solid 1px" }}>
        <p className="display-6">Un-Controlled Component</p>
        <form onSubmit={submitFrom}>
          <label>input 1</label>
          <input type="text" ref={UnctrldRef1} /><br /><br />
          <label>input 2</label>
          <input type="text" ref={UnctrldRef2} /><br /><br />
          <label>input 3</label>
          <input type="text" id="input3" /><br /><br />
           <button  className="btn btn-sm btn-success">Submit</button>
        </form>
        <br /><br />
      </div>

      {/*Higher Order component*/}
      <div className="App container-fluid" style={{ border: "solid 1px" }}>
      <p className="display-6">Higher Order component (HOC)</p>
        <HOCRed  cmp={Counter}/>
        <HOCGreen  cmp={Counter}/>
        <HOCBlue  cmp={Counter}/>
      </div>
     
    </>
  );

  function Counter()//HOC
  {
    const [count,setCount]=useState(0)
    return( 
      <>
          <h3>{count}</h3>
          <button onClick={()=>setCount(count+1)} className="btn btn-sm btn-primary">Update</button>
      </>
    )
  }

  function HOCRed(props)
  {
    return<h2 style={{backgroundColor:"red"}}><props.cmp/></h2>
  }

  function HOCGreen(props)
  {
    return<h2 style={{backgroundColor:"green"}}><props.cmp/></h2>
  }

  function HOCBlue(props)
  {
    return<h2 style={{backgroundColor:"blue"}}><props.cmp/></h2>
  }


}

export default App;
