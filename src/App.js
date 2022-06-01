import React from "react";
import "./App.css";
import User from "./User";
// class App extends React.PureComponent {  //or you can use like this
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }

  render() {
    return (
      <div className="App container"><br></br>
        <User count={this.state.count}/>
        <button onClick={()=>this.setState({count:1})}>Update Count</button>
      </div>
    );
  }
}

export default App;
//check console
//
