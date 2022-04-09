export const ProductCard = ({productItem}) => {

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
        <div className="btn-flex-column">
            <button 
            className="btn solid-btn submit btn-width"
            >Add to Cart</button>
            <button className="btn solid-btn secondary btn-width">Move to Wishlist</button>
        </div>
        
        <span className="badge-icon flex-center">
            <i className="fa-solid fa-heart"></i>
        </span>

    </div>
    )
}