import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products',async () => {
    const res = await fetch('https://dummyjson.com/products');
    const jsonResp = await res.json();
    console.log(jsonResp,'Alii')
    return jsonResp.products
})
const initialState = {
    items : [],
    state: undefined,
    error : null
}
const productsSlice = createSlice({
    name : 'productsSlice',
    initialState,
    extraReducers:(builder) => {
        builder.addCase(fetchProducts.fulfilled,(state, action) => {
            state.status = 'succeeded',
            state.items =   action.payload
            
        });

    }
})

export default productsSlice.reducer