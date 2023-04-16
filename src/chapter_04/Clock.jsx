
import React from "react";
import ReactDOM from "react-dom/client";


function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>현재 시간은 {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}



export default Clock