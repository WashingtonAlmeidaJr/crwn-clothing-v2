import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";
import { CartIconContainer } from "./cart-icon.styles";


const CartIcon = () => {
  const {isCartOpen,setIsCartOpen}=useContext(CartContext)
  const toggleCartOpen=()=>setIsCartOpen(!isCartOpen)
  const {cartCount}=useContext(CartContext)

  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{cartCount}</span>
    </CartIconContainer>
  );
};

export default CartIcon;
