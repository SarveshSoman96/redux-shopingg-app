export const allProducts = (productList) => {
    return{
        type: "All_PRODUCTS",
        payload: productList
    }
};

export const selectedProduct = (productId) => {
    return{
        type: "SELECTED_PRODUCT",
        payload: productId
    }
}; 

export const removeProduct = () => {
    return {
        type: "REMOVE_PRODUCT"
    }
};