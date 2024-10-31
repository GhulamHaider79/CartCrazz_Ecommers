

function filterReducer(state, action ) {
 
    switch (action.type) {
            case "FILTER_LOADING":
            return{
                 ...state,
                 isLoading: true,
            };
            case "LOAD_FILTER_PRODUCTS" :
                
                return{
                    ...state,
                    isLoading: false,
                    filter_products : [...action.payload],
                    all_products : [...action.payload],
               };
               case "SET_GRID_VIEW":
                return {
                    ...state,
                    isLoading: false,
                    grid_view : true,
                }
                
           
        default:
            return state 
    }

}

export default filterReducer