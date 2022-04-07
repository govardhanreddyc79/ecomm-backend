import { createContext, useContext, useReducer} from "react";

const filterContext = createContext();

const useFilterReducer = () => useContext(filterContext)

const FilterProvider = ({children}) => {

    const filterReducer = ({state, action}) => {
        console.log(action)
        switch(action.type){
            case "LOW_TO_HIGH":
                return {
                    ...state,
                    sortBy: action.type
                };
            case "HIGH_TO_LOW":
                return {
                    ...state,
                    sortBy: action.type
                };
            default:
                return state;
        }
    }

    const [ state, dispatch ] = useReducer(filterReducer,{
        sortBy :"",
    });
    

    return (
        <filterContext.Provider value = {{state, dispatch}}>
            {children}
        </filterContext.Provider>
    )
}


export { FilterProvider, useFilterReducer}