import React from "react";
import ReactDOM from "react-dom";

const fname = "Pranjal";
const lname = "Daga";
const num = 42;

ReactDOM.render(
  <div>
    <h1>Hello {`${fname} ${lname}`}!</h1>
    <p>Life is {num}</p>
  </div>,
  document.getElementById("root")
);
