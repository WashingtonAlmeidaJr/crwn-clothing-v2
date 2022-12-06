import { createContext, useEffect, useState } from "react";

const addCartItem=(cartItems,productToAdd)=>{
  //find if cartItems contains productToAdd
  const existingCartItem=cartItems.find(
    (cartItem)=>cartItem.id===productToAdd.id)
  //if Found, increment quantity
  if(existingCartItem){
    return cartItems.map(
      (cartItem)=>
      cartItem.id===productToAdd.id
      ?{...cartItem,quantity:cartItem.quantity+1}
      :cartItem
    )
  }
  //return new array with modified cartItems/new cart item
  return[...cartItems,{...productToAdd,quantity:1}]
}

const removeCartItem=(cartItems,cartItemToRemove)=>{
  //find the cart item to remove
  console.log('here i m')
  const existingCartItem=cartItems.find(
    (cartItem)=>cartItem.id===cartItemToRemove.id)
  //check if quantity is equal to 1, if it is, remove that item from cart
  if(existingCartItem.quantity===1){
    return cartItems.filter(cartItem=>cartItem.id!==cartItemToRemove.id)
  }
  //return back cart items with matching cart item with reduce quantity
    return cartItems.map(
      (cartItem)=>
      cartItem.id===cartItemToRemove.id
      ?{...cartItem,quantity:cartItem.quantity-1}
      :cartItem
    )
}

const removeCheckoutItem=(cartItem,checkoutItemToRemove)=>{
  return cartItem.filter(cartItem=>cartItem.id!==checkoutItemToRemove.id)
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems:[],
  addItemToCart:()=>{},
  removeItemFromCart:()=>{},
  cartCount:0,
  cartTotal:0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems,setCartItems]=useState([])
  const [cartCount,setCartCount]=useState(0)
  const [cartTotal,setCartTotal]=useState(0)

  
  useEffect(()=>{
  const newCartCount=cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
  setCartCount(newCartCount)
  },[cartItems]
  //increment the quantity on the cart icon
  )

  useEffect(()=>{
  const newCartTotal=cartItems.reduce((total,cartItem)=>total+cartItem.quantity*cartItem.price,0)
  setCartTotal(newCartTotal)
  },[cartItems]
  //Total component bellow the itens checkout
  )

  const addItemToCart=(productToAdd)=>{
    setCartItems(addCartItem(cartItems,productToAdd))
  }
  const removeItemToCart=(cartItemToRemove)=>{
    setCartItems(removeCartItem(cartItems,cartItemToRemove))
  }
  const removeItemToCheckout=(checkoutItemToRemove)=>{
    setCartItems(removeCheckoutItem(cartItems,checkoutItemToRemove))
  }

  const value = { isCartOpen,setIsCartOpen,addItemToCart,cartItems,cartCount,removeItemToCart,removeItemToCheckout,cartTotal };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
