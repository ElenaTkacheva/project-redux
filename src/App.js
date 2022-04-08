
import './App.css';
import Dishes from './Components/DishesComponents/Dishes';
import AllCategories from './Components/Filter/AllCategories';
import Cart from './Components/Cart/Cart';

function App() {
  return (
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
        <Cart />
      </div>
    </div>
  );
}

export default App;
