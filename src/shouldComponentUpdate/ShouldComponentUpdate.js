import React, { Component } from "react";

export default class ShouldComponentUpdate extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }; 
  }
  shouldComponentUpdate()  
  {
      console.warn("should  component update",this.state.count);
      if(this.state.count>5 && this.state.count<10){
      return true;
      }
  } 
 

  render() {
    return (
      <>
        <h1>should Component Update {this.state.count}</h1>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update Counter</button>
      </>
    );
  }
}
