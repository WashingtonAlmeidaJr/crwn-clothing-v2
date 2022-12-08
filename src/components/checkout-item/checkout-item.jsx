import { MinusCircle, PlusCircle, Trash } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { CheckoutContainer } from "./checkout-item.styles";

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
<CheckoutContainer>
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
</CheckoutContainer>
)
}
export default CheckoutItem
