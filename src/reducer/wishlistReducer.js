
const initialState = { wishlistProducts:[], wishlistProductsCount:0};

export const wishlistReducer = ( state = initialState, {type, payload}) => {
    
    switch(type){
        case "MOVE_TO_WISHLIST":
            console.log(state.wishlistProducts)
            return{
                ...state,
                wishlistProducts:
                        [...state.wishlistProducts, payload],
                wishlistProductsCount: state.wishlistProductsCount + 1,
            }
        case "REMOVE_FROM_WISHLIST":
            return {
                ...state,
                wishlistProducts:
                [...state.wishlistProducts.filter(item => item._id !== payload._id)],
                wishlistProductsCount: state.wishlistProductsCount - 1
            }
        default:
            throw new Error("Action Not Found in Wishlist Reducer")
    }
}
