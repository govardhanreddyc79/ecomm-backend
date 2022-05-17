import { useCart, useWishlist } from "../context";
import { Link } from "react-router-dom";

export const ProductCard = ({productItem}) => {
    const token = localStorage.getItem("token");
    const {wishlistDispatch} = useWishlist();
    const { cartState, cartDispatch } = useCart();
    const { cartProducts, cartProductsCount } = cartState;

 
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
        <div className="link-div">
        {
            cartProducts.some(item => item._id === _id ) && cartProductsCount > 0 ?
            (<Link to="/cart">
                <button 
                className="btn solid-btn submit-btn cart-btn"
                >Go to Cart</button></Link>
            )
            :
            token ?  (
                <button 
                className="btn solid-btn submit-btn cart-btn"
                onClick={() => cartDispatch({ type: "ADD_TO_CART", payload:productItem})}
                >Add to Cart</button>
            )
            :
            (
                <button 
                className="btn solid-btn submit-btn cart-btn"
                onClick={() => cartDispatch({ type: "ADD_TO_CART", payload:productItem})}
                disabled>Add to Cart</button>
            )
            

        }

        </div>
        <span className="wishlist-icon flex-center">
            <i onClick={() => wishlistDispatch({ type: "MOVE_TO_WISHLIST", payload:productItem})}
            className="fa-solid fa-heart"></i>
        </span>
     
    </div>
    )
}