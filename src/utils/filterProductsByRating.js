export const filterProductsByRating = ( productRating, items) => {
    return [...items].filter((item => item.rating >= productRating))
    
}