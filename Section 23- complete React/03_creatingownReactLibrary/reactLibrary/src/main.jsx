import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Assuming your main component is `App`


// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   Children: "Click me to visit Google", // Fixed typo for better readability
// };
//react mai ye nhi chalega aise object banana usko kya pata type kya hai children kya hai isliye

const reactElement = React.createElement(
  "a",
  {href:"https://google.com" , target:"_blank"},
  "click to visit google "
)



 
ReactDOM.createRoot(document.getElementById('root').render(
  <App/>
))
