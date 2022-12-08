import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card.component'
import { CategoriesContext } from '../../context/categories.context'
import { CategoryContainer } from './category.styles'

const Category=()=>{
    const {category}=useParams()
    const {categoriesMap}=useContext(CategoriesContext)
    const [products,setProducts]=useState(categoriesMap[category])
    
    useEffect(()=>{
        setProducts(categoriesMap[category])
    },[category,categoriesMap])

    return(
        <CategoryContainer>
        <h2 className='title'>{category}</h2>
        
        <div className='category-container'>
            {   products &&
                products.map((product)=><ProductCard key={product.id} product={product}/>)
            }
            {console.log(products)}
        </div>
        
        </CategoryContainer>
    )
}

export default Category