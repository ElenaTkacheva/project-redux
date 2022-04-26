
import './App.css';
import Dishes from './Components/DishesComponents/Dishes';
import AllCategories from './Components/Filter/AllCategories';
import Cart from './Components/Cart/Cart';
import { useState } from "react";
import StripeContainer from "./Stripe/StripeContainer";

function App() {
  const [showCreditCard, setShowCreditCard] = useState(false);
  return (
    <div>
      {showCreditCard ? (
        <StripeContainer />
      ) : (
        <div className=" container">
          <div className="navbar">
            <div className="name">
              <img className="avatar" src="./avatar.jpg" alt="avatar"></img>
              <h1>SUSHI SHOP</h1>
            </div>
            <div className="cart-navbar">
              <AllCategories />
            </div>
          </div>
          <div className="row">
            <Dishes />
            <div className="column">
              <Cart />
              <button className="add" onClick={() => setShowCreditCard(true)}>
                Pay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
