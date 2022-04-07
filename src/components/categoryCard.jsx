import { Link } from "react-router-dom"

export const CategoryCard = ({categoryItem}) => {
    const {categoryName, imageSource, imageAlt, link} = categoryItem
    return(
        <div className="category">
            <img className ="cat-image" src={imageSource} alt={imageAlt} />
            <Link className = "cat-item" to={link}>{categoryName}</Link>
      
        </div>
    )
}