import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "reducer";

const WishlistContext = createContext();

const useWishlist = () => useContext(WishlistContext);

const WishlistProvider = ({children}) => {

const [wishlistState, wishlistDispatch ] = useReducer(wishlistReducer, {
        wishlistProducts : [],
        wishlistProductsCount:0
})

    return(
        <WishlistContext.Provider value = {{wishlistState, wishlistDispatch}}>
            { children }
        </WishlistContext.Provider>
    )
}

export { WishlistProvider, useWishlist};