export const NewDealsCard = ({dealItem}) => {
    const {dealName, imageSource, imageAlt, link, discount} = dealItem
    console.log(imageSource)
    return(
        <div className="new-arrivals">
        <img className ="deal-image" src={imageSource} alt={imageAlt}/>
        <div>
            <h3>Available at {discount}% OFF</h3>
            <a className = "cat-item margin-top" href="./ProductListing/productListing.html" target="_blank">
                <i className="fa-solid fa-share"></i> {dealName} </a>
        </div>    

    </div>
    )
}