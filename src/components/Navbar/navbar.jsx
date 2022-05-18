import { Link, useNavigate} from "react-router-dom";
import { useCart, useWishlist } from "../../context";
import "./navbar.css";

export const Navbar = () => {
    const token = localStorage.getItem("token");
    const { cartState } = useCart();
    const { wishlistState } = useWishlist();
    const { cartProductsCount } = cartState;
    const { wishlistProductsCount } = wishlistState;

    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem("token");
        navigate('/')
    }
    return(
        <nav className="nav space-around nav-pos">
          <div> 
              <Link className="nav-header logo-title" to="/">The Sports Adda</Link>
          </div>
          <div>
              <input type="text" placeholder="Find here ..." className="search nav-search" />
          </div>    
          <div className="nav-links margin-left">
              { token ? (<Link to="/">
                <button className="btn solid-btn submit-btn" onClick={logoutHandler}>Logout</button></Link> )
                :
                <Link to="/login">
                <button className="btn solid-btn submit-btn">Login</button></Link>
                
            }
              <Link className="nav-item" to={ token ? "/cart":"/login"}>
                  <i className="nav-icon fa-solid fa-cart-shopping" />
                  <span className="nav-item-count">{token ? cartProductsCount : 0}</span></Link>
              
              <Link className="nav-item" to={ token ? "/wishlist":"/login"}>
                  <i className="nav-icon fa-solid fa-heart" />
                  <span className="nav-item-count">{ token ? wishlistProductsCount : 0}</span>
                  </Link>
              
          </div>
        </nav>
    )
};
