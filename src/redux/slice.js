import { createSlice } from "@reduxjs/toolkit"
import reducer from "./productSlice";
const initialState = {
    //value:0,
    // items: [],
        items : localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')) : [],
}
const addToCart = createSlice( {
    name :'cart',
    initialState,
    reducers : {
        addItem : (state,action) => {
            //state.value+=1;
            console.log(action.payload);
            state.items.push(action.payload);
            localStorage.setItem('cart',JSON.stringify(state.items))
        },
         removeItem : (state,action) => {
          const cartData = state.items.filter(items => items.id!=action.payload.id);
          state.items = cartData;
          localStorage.setItem('cart',JSON.stringify(cartData))
        },
         clearAllItems : (state) => {
            state.items = [];
        }
    }
})
export const {addItem,removeItem,clearAllItems} = addToCart.actions;
export default addToCart.reducer;

reducers : {
    addItem : (state,action) => {
        console.log(action.payload);
        state.items.push(action.payload);
        localStorage.setItem('cart',JSON.stringify(state.items))
    }
}

removeItem : (state) => {
 state.value > 0 ? state.value-=1:null;
}