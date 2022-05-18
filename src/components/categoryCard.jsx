import { Link } from "react-router-dom"

export const CategoryCard = ({categoryItem}) => {
    const {categoryName, imageSource, imageAlt, link} = categoryItem
    return(
        <div className="hp-category">
            <img className ="category-image" src={imageSource} alt={imageAlt} />
            <Link className = "category-item-title" to={link}>{categoryName}</Link>
      
        </div>  
    )
}