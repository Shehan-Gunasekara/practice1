import React from "react";
import ReactDOM from "react-dom";

const currentdate = new Date();
const time = currentdate.getHours();
let greeting;

const cusStyle = {
  color: ""
};

if (time < 12) {
  greeting = "Good morning!";
  cusStyle.color = "red";
} else if (time < 18) {
  greeting = "Good afternoon!";
  cusStyle.color = "green";
} else {
  greeting = "Good evening!";
  cusStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="st" style={cusStyle}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
