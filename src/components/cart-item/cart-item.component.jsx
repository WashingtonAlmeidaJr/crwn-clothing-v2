import {CartItemContainer} from './cart-item.styles';

const CartItem=({cartItem})=>{
    const {name,quantity,imageUrl,price}=cartItem

    return(
        <CartItemContainer className='cart-item-container'>
            <img src={imageUrl} alt=''/>

            <div className="item-details">
                <span className='name'>{name}</span>
                <span className='price'>{quantity}x${price}</span>
            </div>
        </CartItemContainer>
    )

}

export default CartItem