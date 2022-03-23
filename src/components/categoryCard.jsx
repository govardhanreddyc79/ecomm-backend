export const CategoryCard = ({category}) => {
    const [imageSource, imageAlt, link ] = category
    return(
        <div className="category">
            <img className ="cat-image" src ={imageSource} alt={imageAlt} />
            <a className = "cat-item" href={link} target="_blank">Bats</a>
      
        </div>
    )
}