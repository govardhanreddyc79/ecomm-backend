import { Navbar, CartProductCard } from "components";
import { useCart } from "context/cart-context";
import { Link } from "react-router-dom";
import "./cart.css";


export const Cart = () => {
    const { cartState } = useCart();
    const { cartProducts, totalPrice, cartProductsCount } = cartState;

    return (
        <div>
        <Navbar />

        <main class="cart">
            <div className="flex-column column-gap">
            {
                cartProducts?.map((product) => {
                    console.log(product)
                    return (
                        <CartProductCard cartProduct = {product}/>
                    )
                })
            }
            
            </div>
            {console.log(cartProducts, totalPrice)}
            { cartProducts.length > 0 ?
                (<div className="price-details">
                    <h3>PRICE DETAILS</h3>
                    <hr></hr>
                    <div className="space-between">
                        <p>Price ( {cartProductsCount} items)</p>
                        <p>Rs. { totalPrice * 2}</p>
                    </div>
                    <div className="space-between">
                        <p>Discount</p>
                        <p>Rs. {totalPrice}</p>
                    </div>
                    <div className="space-between">
                        <p>Delivery Charges</p>
                        <p>Rs. 499</p>
                    </div>
                    <hr></hr>
                    
                    <div className="space-between total-price">
                        <p>TOTAL AMOUNT</p>
                        <p>Rs. {totalPrice + 499}</p>
                    </div>
                    <hr></hr>
                    <p>You will save Rs. {totalPrice} on this order</p>
                    <button className="btn solid-btn submit btn-width">PLACE ORDER</button>
                    
                </div> )
                :
                (<div className="cart-empty">
                    <h1>Cart is Empty</h1>
                    <Link className = "cart-empty-link" to="/products">Add Products</Link>
                    </div>)
    }

    </main> 
    </div>
    )



}