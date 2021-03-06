import { createContext, useContext, useReducer} from "react";
import { filterReducer } from "reducer";

const FilterContext = createContext();

const useFilter = () => useContext(FilterContext)

const FilterProvider = ({children}) => {

    const [ state, dispatch ] = useReducer(filterReducer,{
        sortBy :"",
        rating: 0,
        categories: {bats:false, balls:false, pads:false, gloves:false},
        price:2000
        
    });
    
    return (
        <FilterContext.Provider value = {{state, dispatch}}>
            {children}
        </FilterContext.Provider>
    )
}


export { FilterProvider, useFilter}