import { createContext, useContext, useReducer} from "react";
import { cartReducer } from "reducer";

const CartContext = createContext();

const useCart = () => useContext(CartContext)

const CartProvider = ({children}) => {

    const [ cartState, cartDispatch ] = useReducer(cartReducer,{
        cartProducts:[],
        cartProductsCount:0,
        totalPrice:0
        
    });
    
    return (
        <CartContext.Provider value = {{cartState, cartDispatch}}>
            {children}
        </CartContext.Provider>
    )
}


export { CartProvider, useCart}