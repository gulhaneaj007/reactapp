import React from "react";

export default function Userchild(props) {

    const data={Name: "Ajinkya Gulhane",email:"ajinkya@gmail.com"}
  return (
    <div>
      <h2>User component</h2>
      <button onClick={()=>props.alert(data)}>Click me</button>
    </div>
  );
}


