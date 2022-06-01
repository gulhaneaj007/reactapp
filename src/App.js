import React, { createRef, Component } from "react";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.inputRef=createRef()
  }
componentDidMount(){
  // console.warn(this.inputRef)
  // console.warn(this.inputRef.current.value="1000")

}
getval() {
  console.warn(this.inputRef.current.value)
  this.inputRef.current.style.color="red"
  this.inputRef.current.style.backgroundColor="black"

}

  render() {
    return (
      <div className="App container">
        <h1>Ref in React JS</h1>
        <input type="text" ref={this.inputRef}/>
        <button onClick={()=>this.getval()}>Check ref</button>
      </div>
    );
  }
}

export default App;
