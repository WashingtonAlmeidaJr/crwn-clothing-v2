import Button from '../button/button.component'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import { ProductCardContainer } from './product-card.styles'

const ProductCard=({product})=>{
    const {name,price,imageUrl}=product
    const {addItemToCart}=useContext(CartContext)

    const addProductToCart=()=>addItemToCart(product)
    
    return(
        <ProductCardContainer>
            <img src={imageUrl}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button type='inverted' onClick={addProductToCart}>Add to cart</Button>
        </ProductCardContainer>

    )
}

export default ProductCard