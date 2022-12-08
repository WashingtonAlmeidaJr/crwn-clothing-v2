import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import { CartContext } from "../../context/cart.context";
import { CheckoutContainer } from "./checkout.styles";

const Checkout = () => {
const {cartItems,cartTotal}=useContext(CartContext)

return (
<CheckoutContainer> 
    <div className='checkout-header'>
        <div className="header-block">
            Product
        </div>
        <div className="header-block">
            Description
        </div>
        <div className="header-block">
            Quantity
        </div>
        <div className="header-block">
            Price
        </div>
        <div className="header-block">
            Remove
        </div>
    </div>
    {cartItems.map((cartItem)=>{
        return(
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        )
    })}
    <span className='total'>Total: ${cartTotal}</span>
</CheckoutContainer>
);
};
export default Checkout;
