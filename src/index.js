import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    //return should only return one element
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = {color:"red", fontSize: "40px"}
  //<h1 style={style}> OR <h1 style={{color:"red", fontSize: "40px"}}>
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizza = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={6} />
      {/* render a list, map the array and pass the props to the pizza */}
      {/* only when the array has pizzas, then render */}
      {numPizza > 0 && (
        <ul className="pizzas">
          {/* in general,we often pass an object */}
          {/* when maping, each item needs a key  */}
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )}
    </main>
  );
}
//function should start with uppercase
//PROPS: allows the data pass from parents to children
function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt="spinaci pizza" />
      <h3>{props.pizzaObj.name}</h3>
      <p>{props.pizzaObj.ingredients}</p>
      <span>{props.pizzaObj.price + 3}</span>
    </li>
  );
}

function Order() {
  return <button className="btn">Order now</button>;
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  //this react.createElement is the function JSX called in behind
  //JSX is a high-level abstraction and make code east to see and understand
  // return React.createElement("footer", null, "We're currently open!");
  return (
    <footer className="footer">
      {/* react will not render the true or false value, but will render 0 */}
      {isOpen && (
        <div className="order">
          <p>
            We are open until {closeHour}:00. Come visit us or order online!
          </p>
          <Order />
        </div>
      )}
    </footer>
  );
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
