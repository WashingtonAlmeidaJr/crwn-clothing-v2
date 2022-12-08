import { CategoryItemContainer } from "./category-item.styles"

const CategoryItem=({category})=>{
    const {id,title,imageUrl}=category
    return(
        <CategoryItemContainer key={id}>
          <img className="background-image" src={imageUrl} alt=""/>
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop now!</p>
          </div>
        </CategoryItemContainer>
    )
}

export default CategoryItem