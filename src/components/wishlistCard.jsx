import { useWishlist } from "context";
import { Link } from "react-router-dom";

export const WishlistCard = ({productItem}) => {
    
    const { wishlistDispatch } =useWishlist();

 
    const {productName, price, imageSource, imageAlt} = productItem
    return(
        <div className="flex-coloumn product product-card">
        <div className="product-image-div">
            <img className="wish-product-image" src={imageSource} alt={imageAlt} />
        </div>
        <div className="product-description"> 
            <p>{productName}</p>
            <p>Rs.{price}</p>
        </div>
        <div className="link-div flex-coloumn">
            <Link to="/cart" ><button 
            className="btn solid-btn submit"
            >Go to Cart</button></Link>
        </div>
        
        <span className="badge-icon flex-center">
        <i class="fa-solid fa-circle-xmark"
                onClick={() => wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload:productItem})}
                >
                </i>
        </span>

    </div>
    )
}