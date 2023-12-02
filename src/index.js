import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css";
import "./styles.css"
const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: true,
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
        <div className="container">


            <Header />
            <Manu />
            <Footer />
        </div >
    )
}

function Header() {
    const style = { color: "red", fontSize: "48px", textTransform: "uppercase" }
    return (
        <header className="header">

            <h1  >Fast React Pizza Co.</h1>
        </header>
    )
}
function Manu() {

    const pizzas = pizzaData;
    // const pizzas = []

    const numpizza = pizzas.length
    return (<main className="menu">

        <h2>Our menu</h2>

        {numpizza > 0 ? (
            <>

                <p>
                    Authentic Italian Cuisine. 6 creative dishes to chose from. All from our stone oven. All organic,All delicious
                </p>
                <ul className="pizzas">
                    {pizzaData.map((pizza) => <Pizza pizzaObj={pizza} key={pizza.name} />)}
                </ul>
            </>
        ) : <p>
            We're working still on our manu. please come back later :)
        </p>}

        {/* <Pizza name='Pizza Spinaci'
            ingredients='Tomato, mozarella, spinach, and ricotta cheese'
            photoName='pizzas/spinaci.jpg' price={100} />
        <Pizza name='Pizza funghi' ingredients='Tomato, mashrooms,spinch'
            photoName='pizzas/funghi.jpg' price={222} /> */}
    </main>)
}
function Pizza({ pizzaObj }) {
    // const { pizzaObj } = props
    console.log(pizzaObj)
    // if (pizzaObj.soldOut) return null;
    return <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`} >
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div>

            <h2>{pizzaObj.name} </h2>
            <p> {pizzaObj.ingredients}</p>
            <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price + 3}</span>
        </div>

    </li >
}
function Footer() {
    const hour = new Date().getHours()
    const openHour = 9
    const closeHor = 22
    const isOpen = hour >= openHour && hour <= closeHor;
    console.log(isOpen)
    // if (hour >= openHour && hour <= closeHore) alert("We're currently open")
    // else alert("sorry we're closed")
    // console.log("hours", hour)
    // if (!isOpen)
    //     return (
    //         <p>We're happy to welkcome you between {openHour}:00. and {closeHor}:00.</p>
    //     );
    return (
        <footer className="footer">
            {isOpen ? (<Order openHour={openHour} closeHor={closeHor} />) : <p>We're happy to welkcome you between {openHour}:00. and {closeHor}:00.</p>}
        </footer>
    );

    // return React.createElement("footer", null, "We're currently open!")
}
function Order(props) {
    console.log(props)
    const { openHour, closeHor } = props
    return (
        <div className="order">
            <p>We're open from {openHour}:00. to {closeHor}:00. come visit us or order online. </p>
            <button className="btn" >Order Now</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>

        <App />
    </React.StrictMode>
)