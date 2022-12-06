import { MinusCircle, PlusCircle, Trash } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
const { removeItemToCheckout, removeItemToCart, addItemToCart } =
useContext(CartContext);

const trashItemHandler=()=>{
    removeItemToCheckout(cartItem)
}
const addItemHandler=()=>{
    addItemToCart(cartItem)
}
const minusItemHandler=()=>{
    removeItemToCart(cartItem)
}

const { name, imageUrl, price, quantity } = cartItem;

return (
<div className="checkout-item-container">
    <div className="image-container">
    <img src={imageUrl} alt="" />
    </div>
    <span className="name">{name}</span>
    <span className="arrow">
    {<MinusCircle size={20} onClick={minusItemHandler} />}
    </span>
    <span className="value">{quantity}</span>
    <span className="arrow">
    {<PlusCircle size={20} onClick={addItemHandler} />}
    </span>
    <span className="price">{price}</span>
    <div className="remove-button">
    <Trash size={20} onClick={trashItemHandler} />
    </div>
</div>
);
};

export default CheckoutItem;
