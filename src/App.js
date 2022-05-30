import React from "react";
import { Table } from "react-bootstrap";
// import { Alert, Button,Spinner } from 'react-bootstrap';
import "./App.css";
function App() {
  const student = [
    { name: "ajinkya", email: "ajinkya@test.com", no: 7884546 },
    { name: "rahul", email: "rahul@test.com", no: 5656556 },
    { name: "vinayak", email: "vinayak@test.com", no: 1338788 },
    { name: "Suhas", email: "Suhas@test.com", no: 5555688 },
  ];
 
  student.map((key) => {
    console.log("my name is :", key);
    return true;
  });

  return (
    <>
     
      <div className="App container">
        <h1>Handle array with list</h1>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Sr no</th>
              <th> Name</th>
              <th>Email</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {student.map((data,ind) => (
              <>
                <tr>
                <td>{ind}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.no}</td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default App;
