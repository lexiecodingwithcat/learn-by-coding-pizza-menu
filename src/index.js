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
      {/* {numPizza > 0 && (
        <ul className="pizzas">
          {/* in general,we often pass an object */}
      {/* when maping, each item needs a key  */}
      {/* {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}
      {/* using ternaries */}
      {numPizza > 0 ? (
        // <React.Fragment></React.Fragment>: allows return two elements seperately without creating new HTML element
        //no need to use <div></div> to wrap everything inside 
        <React.Fragment>
        <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious. </p>
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
        </React.Fragment>
      ) : (
        <p>We are still working on our menu. Please come back later😊</p>
      )}
    </main>
  );
}
//function should start with uppercase
//PROPS: allows the data pass from parents to children
//we can destruct props using {}
function Pizza({pizzaObj}) {
  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt="spinaci pizza" />
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.price + 3}</span>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  //this react.createElement is the function JSX called in behind
  //JSX is a high-level abstraction and make code east to see and understand
  // return React.createElement("footer", null, "We're currently open!");
  // if (!isOpen) {
  //   return (
  //     <p>
  //       We are happy to welcome you between {openHour}:00 and {closeHour}:00
  //     </p>
  //   );
  // }
  return (
    <footer className="footer">
      {/* react will not render the true or false value, but will render 0 */}
      {/* <div className="order">
        <p>We are open until {closeHour}:00. Come visit us or order online!</p>
        
      </div> */}
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}
function Order({closeHour}) {
  return (
    <div className="order">
      <p>
        We are open until {closeHour}:00. Come visit us or order online!
      </p>
      <button className="btn">Order now</button>
    </div>
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
