import React from "react";
import Userchild from "./Userchild";
import "./App.css";
function App() {
  // const user = [
  //   { name: "Ajinkya", email: "ajinkya@test.com.", no: 7884546 },
  //   { name: "Vindayak", email: "rahul@test.com.", no: 5656556 },
  //   { name: "Rahul", email: "vinayak@test.co.", no: 1338788 },
  //   { name: "Arvind", email: "Suhas@test.com.", no: 5555688 },
  // ];
function parentAlert(param){
  alert(param.Name+' '+param.email)
}
  return (
    <>
      <div className="App container">
       <h1>Lifting state Up</h1>
        <Userchild alert={parentAlert}/>
      </div>
    </>
  );
}

export default App;
