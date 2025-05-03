import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";

// console.log(react);

// React Element
const react_h1 = React.createElement("h1", null, "Hello react")
const react_p = React.createElement("p", null, "Hi react")
const react_main = React.createElement("main", null, react_h1, react_p)
const react_fragment = React.createElement(Fragment, null, react_h1, react_p)

console.log(react_fragment);


console.log(react_h1);

function Card() {
  return react_fragment
}


console.log(Card());


// ReactDOM
const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(Card())


// HTML DOM 
const html_h1 = document.createElement('h1');
html_h1.textContent = 'Hello World';
document.body.appendChild(html_h1);