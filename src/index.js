import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello, React!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//in strict mode, the react will render components twice in order to find the bugs
//and also check if we are using out dated react API
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
