import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cart.context'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { DropdownContainer } from './cart-dropdown.styles.jsx'

const CartDropdown =()=>{
const {cartItems}=useContext(CartContext)

    return(
    <DropdownContainer className='cart-dropdown-container'>
        <div className='cart-items'>
            {cartItems.map((item)=>{
               return(<CartItem key={item.id} cartItem={item}/>) 
            })}
        </div>
        <Link className="nav-link" to="/checkout">
            <Button>GO TO CHECK OUT</Button>
        </Link>
        
    </DropdownContainer>
        
    )

}

export default CartDropdown