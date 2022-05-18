import { Link } from "react-router-dom"

export const NewDealsCard = ({dealItem}) => {
    const {dealName, imageSource, imageAlt, link} = dealItem
    return(
        <div className="hp-category">
        <img className ="category-image" src={imageSource} alt={imageAlt}/>
        <Link className = "category-item-title" to={link}>{dealName}</Link> 

    </div>
    )
}