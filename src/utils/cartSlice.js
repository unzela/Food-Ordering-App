import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem : (state, action) => {
            state.items.push(action.payload); //mutating the state
            console.log(state);  //returns proxy object, hence use current
            console.log(current(state));
        },
        removeItem : (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            //RTK - either Mutate the existing  state or return a new State
            state.items.length = 0; // []
            //return { items: [] }; // Or this new object will be replaced inside originalState = { items: [] }
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;