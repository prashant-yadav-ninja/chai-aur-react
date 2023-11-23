import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// function Myapp() {
//   return (
//     <>
//       <h1>Chai in myapp</h1>
//       <h2>from direct function</h2>
//     </>
//   );
// }

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "click me to visit google",
// };

// const userName = 'prashant'

// const reactElement = React.createElement(
//   'a',
//   {href:'https://google.com',target:'_blank'},
//   'click me to go to google.com'
//    userName
// )

// const anotherElement = (
//   <a href='https://google.com' target='_blank'>visit to google</a>
// )

ReactDOM.createRoot(document.getElementById("root")).render(
  // anotherElement
  // reactElement
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
