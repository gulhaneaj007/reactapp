import React from "react";
import { Table } from "react-bootstrap";
import "./App.css";
function App() {
  const result = [
    { name: "Ajinkya", email: "ajinkya@test.com.", no: 7884546,Address :
      [{HN:'10',city:"pune",country :"India"},
        {HN:'20',city:"noida",country :"India"},
        {HN:'40',city:"mumbai",country :"India"}
      ] 
    },
    { name: "Vindayak", email: "rahul@test.com.", no: 5656556,Address :
      [{HN:'50',city:"delhi",country :"India"},
      {HN:'40',city:"mumbai",country :"India"},
      {HN:'20',city:"noida",country :"India"}
      ] 
    },
    { name: "Rahul", email: "vinayak@test.co.", no: 1338788,Address :
      [{HN:'50',city:"delhi",country :"India"},
      {HN:'40',city:"mumbai",country :"India"},
      {HN:'10',city:"pune",country :"India"}
      ]
    },
    { name: "Arvind", email: "Suhas@test.com.", no: 5555688,Address :
      [{HN:'40',city:"mumbai",country :"India"},
        {HN:'20',city:"noida",country :"India"}
      ]
    }
  ];
  return (
    <>
      <div className="App container">
        <h1>Handle array with list</h1>
        <Table striped variant="dark" >
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Address</th>
              <th> Name</th>
              <th>Email</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {result.map((item, i) => (
              <tr key={i}>
                <td>{i+1}</td>
                <td style={{textAlign:"left"}}>
                  {/* <Table striped variant="dark" > */}
                    {/* <tbody> */}
                      {
                        item.Address.map((arr_data,j)=>
                        <tr key ={j}>
                          <td>House No :- {arr_data.HN}, City :-{arr_data.city}, Country  :-{arr_data.country}</td>
                        </tr>
                        )
                      }
                    {/* </tbody> */}
                  {/* </Table> */}
                </td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.no}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default App;
