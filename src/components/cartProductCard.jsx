import { Link } from "react-router-dom";
import { useCart, useWishlist } from "../context";

export const CartProductCard = ({cartProduct}) => {
    const {productName, imageSource, imageAlt, price, quantity, _id} = cartProduct;

    const { cartDispatch } = useCart();
    const { wishlistState, wishlistDispatch } = useWishlist();
    const { wishlistProducts, wishlistProductsCount } = wishlistState;
    console.log(wishlistProducts, wishlistProductsCount)
    return (
    
            <div className="flex-row product-container">
                <div className="cart-image-div">
                    <img className="cart-image" src={imageSource} alt={imageAlt}></img>
                </div>
                <div className="product-description-cart">
                    <h2>{productName}</h2>
                    <div className="price">
                        <span className="price-bold"> Rs. {price} </span>
                        <span className="text-strike"> {price * 2} </span>
                    </div>
                    <div>50% off</div>
                    <div className="quantity">
                        
                            <label htmlFor="quantity" >Quantity : 
                            { cartProduct.quantity !== 1 ?
                                (<button onClick={() => cartDispatch({type:"DECREASE_QUANTITY",payload:cartProduct})}>-</button>)
                                :
                                (<button>-</button>)
                                }
                            <span> {quantity} </span>

                            { cartProduct.quantity !== 0 ?
                            (<button onClick={() => cartDispatch({type:"INCREASE_QUANTITY",payload:cartProduct})}>+</button>)
                            :
                            (<button>+</button>)
                            }
                            </label>
                   
                    </div>

                    <button className="btn solid-btn submit btn-width"
                    onClick={() => cartDispatch({type:"REMOVE_FROM_CART",payload:cartProduct})}
                    >Remove From Cart</button>

                    {
                        wishlistProducts?.some(item => item._id === _id) && wishlistProductsCount > 0 ?
                        (<Link to="/wishlist"><button className="btn solid-btn secondary btn-width">Go to Wishlist</button></Link>)
                        
                        :

                        (
                        <button className="btn solid-btn secondary btn-width"
                        onClick={() => wishlistDispatch({type:"MOVE_TO_WISHLIST",payload:cartProduct})}
                        >Move to Wishlist</button>
                        )

                    }
                    

                </div>
            </div>
    )
}