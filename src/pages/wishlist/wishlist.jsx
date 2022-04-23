import { Navbar, WishlistCard } from "components";
import { useWishlist } from "context";
import { Link } from "react-router-dom";
import "./wishlist.css";


export const Wishlist = () => {
    const { wishlistState, wishlistDispatch } = useWishlist();
    const { wishlistProducts, wishlistProductsCount} = wishlistState;

    return (
        <div>
            <Navbar />
            <main className="wishlist-container">
            
                {
                    wishlistProductsCount > 0 && 
                    <div className="clear-wishlist">
                        <button className="btn solid-btn danger btn-width"
                        onClick={() => wishlistDispatch({type:"CLEAR_WISHLIST"})}
                        >Clear Wishlist</button>
                    </div>
                    
                }
                
            <div className="cart">
                <div className="wishlist-cards">
                {
                    wishlistProductsCount > 0 ?
                    (wishlistProducts?.map((product) => {
                        return (
                            <WishlistCard productItem = {product}/>
                        )
                    })
                    )
                    :
                    (<div className="cart-empty">
                        <h1>Wishlist is Empty</h1>
                        <Link className = "cart-empty-link" to="/products">Add Products</Link>
                    </div>)

                }
                </div>

                
            </div> 

            </main>
        </div>
    )
}