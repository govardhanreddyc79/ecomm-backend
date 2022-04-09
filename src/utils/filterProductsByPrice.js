export const filterProductsByPrice = (priceRange, items) => {
    return [...items].filter((item) => item.price <= priceRange)
}