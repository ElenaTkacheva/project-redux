const ChangeQuantity = ({ quantity, setQuantity }) => {

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const removeQuantity = () => {
        if(quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }
    return (
      <div className="quantity-block">
        <button onClick={ addQuantity } className="quantityButton">+</button>
        {quantity}
        <button onClick={ removeQuantity } className="quantityButton">-</button>
      </div>
    );
}

export default ChangeQuantity;