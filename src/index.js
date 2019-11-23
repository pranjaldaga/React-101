import React from "react";
import ReactDOM from "react-dom";

const fname = "Pranjal";
const lname = "Daga";
const num = 42;
const year = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {`${fname} ${lname}`}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
