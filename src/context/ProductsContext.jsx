import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios';
import reducer from '../reducers/ProductsReducer'

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products"
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
}

const AppProvide = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //  Get All Products 
    const getProducts = async (url) => {
        
        
        dispatch({type: "API_LOADING"})
    try {
            const response = await axios.get(url);
            const products = await response.data
            dispatch({
                type: "API_DATA",
                payload: products
            })
       

    } catch (error) {
        dispatch({ type: "API_ERROR" })
    }
}

    useEffect(() => {
        getProducts(API)
    }, [])

//  Get Single Product 

 const getSingleProduct = async (url) => {
    dispatch({type: "SINGLE_API_LOADING"})
    try {
            const response = await axios.get(url);
            const singleProduct = await response.data
            
            
            dispatch({
                type: "SINGLE_PRODUCT_DATA",
                payload: singleProduct
            })
       

    } catch (error) {
        dispatch({ type: "SINGLE_PRODUCT_ERROR" })
    }
 }




    return <AppContext.Provider value={{ ...state, getSingleProduct}} >
        {children}
    </AppContext.Provider>
}

const useContextProducts = () => {
    return useContext(AppContext)
}



export { AppProvide, AppContext, useContextProducts }