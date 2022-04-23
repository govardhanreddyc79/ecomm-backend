import { useWishlist, useCart } from "context";
import { Link } from "react-router-dom";

export const WishlistCard = ({productItem}) => {
    
    const { wishlistDispatch } =useWishlist();
    const { cartState, cartDispatch } = useCart();
    const { cartProducts } = cartState;

 
    const {productName, price, imageSource, imageAlt, _id} = productItem
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
            {
            cartProducts?.some(item => item._id === _id) ?
                (<Link to="/cart" ><button 
                className="btn solid-btn submit"
                >Go to Cart</button></Link>)
                :
                (<button 
                    className="btn solid-btn submit"
                    onClick={() => cartDispatch({ type: "ADD_TO_CART", payload:productItem})}
                    >Move to Cart</button>)
            }
           
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