const initialState = {cartProducts:[], cartProductsCount:0}
    
export const cartReducer = ( state = initialState, {type, payload}) => {
    
    switch(type){
        case "ADD_TO_CART":
            return {
                ...state,
                cartProducts : 
                    [...state.cartProducts, {...payload, quantity: 1}],
                cartProductsCount:state.cartProductsCount + 1,
                totalPrice: state.totalPrice + payload.price
                }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartProducts : 
                    [...state.cartProducts.filter(item => item._id !== payload._id)],
                cartProductsCount:state.cartProductsCount - 1,
                totalPrice: state.totalPrice - (payload.price*payload.quantity)
            }
        case "INCREASE_QUANTITY":
            return {
                ...state,
                cartProducts : 
                    state.cartProducts.map((item) => item._id === payload._id ? {...item, quantity: item.quantity + 1} : item ),
                totalPrice: state.totalPrice + payload.price
            }
        case "DECREASE_QUANTITY":
            return {
                ...state,
                cartProducts : 
                    state.cartProducts.map((item) => item._id === payload._id ? {...item, quantity: item.quantity - 1} : item ),
                totalPrice: state.totalPrice - payload.price
            }
        default:
            throw new Error("Action Not Found in Cart Reducer")
        
    }

};