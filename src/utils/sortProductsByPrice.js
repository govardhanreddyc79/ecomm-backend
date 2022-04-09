export const sortProductsByPrice = ( sortby, items) => {
    if (sortby === "LOW_TO_HIGH")
        return [...items].sort((item1, item2) => item1.price - item2.price);
    if (sortby === 'HIGH_TO_LOW')
        return [...items].sort((item1, item2) => item2.price - item1.price);
    return items;
}