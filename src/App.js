import React from "react";
import { Table } from "react-bootstrap";
// import { Carousel } from 'react-bootstrap';
import "./App.css";
function App() {
  const result = [
    { name: "Ajinkya", email: "ajinkya@test.com.", no: 7884546 },
    { name: "Vindayak", email: "rahul@test.com.", no: 5656556 },
    { name: "Rahul", email: "vinayak@test.co.", no: 1338788 },
    { name: "Arvind", email: "Suhas@test.com.", no: 5555688 },
  ];

  // result.map((key) => {
  //   console.log("my name is :", key);
  //   return true;
  // });

  return (
    <>
      <div className="App container">
        <h1>Handle array with list</h1>
        {/* <Carousel>
          {result.map((key)=>(
            <Carousel.Item>
              <img className="d-block w-100" src="https://images.ctfassets.net/hrltx12pl8hq/4N1NeoHTaT8nI0x7p1jCGk/5a6054a5046b7749a6b78ad3ca1eb57f/water-splash-clr-shutterstock_258421805.jpg?fit=fill&w=480&h=270&fm=webp" alt="First slide" />
              <Carousel.Caption>
                <h3>{key.name} : slide lable</h3>
                <p>{key.email}</p>
              </Carousel.Caption>
            </Carousel.Item>

          ))}
          
        </Carousel> */}

        <Table striped bordered variant="dark" size="sm">
          <thead>
            <tr>
              <th>Sr No</th>
              <th> Name</th>
              <th>Email</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {result.map((data, i) => (
              <tr key={i}>
                <td>{i}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.no}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default App;
