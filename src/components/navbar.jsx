export const Navbar = () => {
    return(
        <nav className="nav space-around">
          <div>
              <a className="nav-header" href="#">The Sports Adda</a>
          </div>
          <div>
              <input type="text" placeholder="Find here" className="search" />
          </div>
          <div className="nav-links margin-left">
             <a href="./Authentication/login.html">
              <button className="btn solid-btn submit">Login</button>  
          </a>
              <a className="nav-item" href="./CartManagement/cartManagement.html">
                  <i className="nav-icon fa-solid fa-cart-shopping"></i>
              </a>
              <a className="nav-item" href="./Wishlist/wishlist.html">
                  <i className="nav-icon fa-solid fa-heart"></i>
              </a>
          </div>
        </nav>
    )
};
