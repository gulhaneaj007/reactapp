import React from "react";
// import { Table } from "react-bootstrap";
import User from "./User";
import "./App.css";
function App() {
  const user = [
    {name: "Ajinkya", email: "ajinkya@test.com.",no: 7884546},
    {name: "Vindayak",email: "rahul@test.com.",no: 5656556},
    {name: "Rahul",email: "vinayak@test.co.",no: 1338788},
    {name: "Arvind",email: "Suhas@test.com.",no: 5555688},
  ];
  return (
    <>
      <div className="App container">
        <h1>Component in loop</h1>
        
        {
          user.map((item,index)=>
             <User   data={item}/>
            

          )
        }
      </div>
    </>
  );
}

export default App;
