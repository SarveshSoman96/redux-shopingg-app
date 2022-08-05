const allProductsState = {
    products: []
}

export const setAllProducts = (state = allProductsState, {type, payload}) => {
    switch (type){
        case "All_PRODUCTS":
            return {
                ...state,
                products: payload
            }
            default:
                return state
    }
};

const product = {};

export const selectedItem = (state = product, {type, payload}) => {
    switch (type){
        case "SELECTED_PRODUCT":
            return {
                ...state,
                ...payload
            }
        case "REMOVE_PRODUCT":
            return {}
        default:
            return state
    }
};

