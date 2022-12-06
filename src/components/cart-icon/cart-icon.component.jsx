import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const {isCartOpen,setIsCartOpen}=useContext(CartContext)
  const toggleCartOpen=()=>setIsCartOpen(!isCartOpen)
  const {cartCount}=useContext(CartContext)

  return (
    <div className='cart-icon-container'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count' onClick={toggleCartOpen}>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
