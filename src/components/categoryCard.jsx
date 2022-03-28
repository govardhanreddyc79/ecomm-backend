export const CategoryCard = ({categoryItem}) => {
    const {categoryName, imageSource, imageAlt, link} = categoryItem
    return(
        <div className="category">
            <img className ="cat-image" src={imageSource} alt={imageAlt} />
            <a className = "cat-item" href={link} target="_blank">{categoryName}</a>
      
        </div>
    )
}