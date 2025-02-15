import { createContext, useContext, useEffect, useReducer } from "react";
import {useContextProducts} from './ProductsContext'
import reducer from '../reducers/filterReducer'

const FilterContext = createContext();

const initialState ={
    isLoading: false,
    filter_products : [],
    all_products : [],
    grid_view : true, 

}

export const FilterContextProvider = ({children}) => {
    const {products} = useContextProducts();
    const [state, dispatch] = useReducer(reducer, initialState);

    const setGridView = () => {
        return dispatch({type: "SET_GRID_VIEW"})
    }

useEffect ( () => {
    dispatch({type: "FILTER_LOADING"})
    dispatch({
        type : "LOAD_FILTER_PRODUCTS",
        payload : products
    })
}, [products] )

    return (
        <FilterContext.Provider value={{...state,  setGridView }}   >
           {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}