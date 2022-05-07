import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <nav className="nav space-around">
          <div> 
              <Link className="nav-header" to="/">The Sports Adda</Link>
          </div>
          <div>
              <input type="text" placeholder="Find here" className="search" />
          </div>
          <div className="nav-links margin-left">
             <a href="./Authentication/login.html">
              <button className="btn solid-btn submit">Login</button>  
          </a>
              <Link className="nav-item" to="/cart">
                  <i className="nav-icon fa-solid fa-cart-shopping" /></Link>
              
              <Link className="nav-item" to="/wishlist">
                  <i className="nav-icon fa-solid fa-heart" /></Link>
              
          </div>
        </nav>
    )
};
