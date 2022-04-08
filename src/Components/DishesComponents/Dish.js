import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    return (
      <div key={dish.id} className="cards">
        <div key={dish.id} className="card">
          <h2>{dish.name}</h2>
          <img className="dish-img" src={`./${dish.img}.jpg`} alt="dish" />
          <h4 className="price">$ {dish.price}</h4>
          <p>{dish.description}</p>
        </div>
        <div className="buttons">
            <ChangeQuantity quantity={ quantity } setQuantity={ setQuantity } />
            <button className="add" onClick={() => {dispatch(addItemToCart({dish, quantity}))}}>ADD TO CARD</button>
        </div>
      </div>
    );
}

export default Dish;