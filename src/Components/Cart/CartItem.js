import dataDishes from "../../data/dataDishes";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {

    const dishes = dataDishes.find(item => item.id === cartItem.dishId);
    const dispatch = useDispatch();
    return (
      <div className="cartItem" key={cartItem.id}>
        <h4>{dishes.name}</h4>
        <p>{cartItem.quantity} portion(s)</p>
        <p>$ {dishes.price * cartItem.quantity}</p>
        <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
          <img className="bin" src="bin_delete.svg" alt="bin" />
        </span>
      </div>
    );
}

export default CartItem;