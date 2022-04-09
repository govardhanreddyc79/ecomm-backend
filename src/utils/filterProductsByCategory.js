export const filterProductsByCategory = ( bats, balls, pads, gloves, items) => {
    let categoryList = []
    if( !bats && !balls && !pads && !gloves){
        return items
    }
    if(bats){
        let newList = items.filter((item) => item.categoryName.toLowerCase() === 'bats')
        categoryList.push(...newList)
    }
    if(balls){
        let newList =items.filter((item) => item.categoryName.toLowerCase() === 'balls') 
        categoryList.push(...newList)
    }
    if(pads){
        let newList =items.filter((item) => item.categoryName.toLowerCase() === 'pads') 
        categoryList.push(...newList)
    }
    if(gloves){
        let newList =items.filter((item) => item.categoryName.toLowerCase() === 'gloves') 
        categoryList.push(...newList)
    }
    return categoryList;
    
};