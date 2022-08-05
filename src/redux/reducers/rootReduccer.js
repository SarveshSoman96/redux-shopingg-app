import { combineReducers } from "redux";
import { setAllProducts, selectedItem } from "./productReducer";

const rootReducer = combineReducers({
    allProducts: setAllProducts,
    selectedItem
})

export default rootReducer;