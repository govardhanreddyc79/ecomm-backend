import { Link } from "react-router-dom"

export const NewDealsCard = ({dealItem}) => {
    const {dealName, imageSource, imageAlt, link, discount} = dealItem
    return(
        <div className="new-arrivals">
        <img className ="deal-image" src={imageSource} alt={imageAlt}/>
        <div>
            <h3>Available at {discount}% OFF</h3>
            <Link className = "cat-item margin-top" to={link}>
                <i className="fa-solid fa-share"></i> {dealName} </Link>
        </div>    

    </div>
    )
}