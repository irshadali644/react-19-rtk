import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slice'
import productsReducers from './productSlice'
const store = configureStore({
    reducer:{
        cart : cartReducer,
        products: productsReducers
    }
})

export default store;