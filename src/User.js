import React,{PureComponent} from "react";
import "./App.css";
// class App extends React.PureComponent {  //or you can use like this
class User extends PureComponent {

  render() {
      console.warn("User component check rerendering")
    return (
      <div className="App container"><br></br>
        <h1>User Component :{this.props.count}</h1>
      </div>
    );
  }
}

export default User;
//check console
