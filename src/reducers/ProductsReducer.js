

function ProductsReducer(state, action ) {
   
    switch (action.type) {
        case "API_LOADING":
            return{
                 ...state,
                 isLoading: true,
            };
            case "API_DATA" :
                const featureProducts = action.payload.filter((element) =>{
                        return element.featured === true;
                } );
                return{
                    ...state,
                    isLoading: false,
                    products: action.payload,
                    featureProducts: featureProducts,
               };
                
            case "API_ERROR" :
            return{
                 ...state,
                 isLoading: false,
                 isError: true,
            };
            case "SINGLE_API_LOADING":
            return{
                 ...state,
                 isSingleLoading: true,
            };
            case "SINGLE_PRODUCT_DATA":
            return{
                 ...state,
                 isSingleLoading: false,
                 singleProduct: action.payload,
            };
            case "SINGLE_PRODUCT_ERROR":
                return{
                     ...state,
                     isLoading: false,
                     isError: true,
                };
            
    
        default:
            return state 
    }
 
}

export default ProductsReducer