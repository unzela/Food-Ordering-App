import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const appStore = configureStore({
    reducer : {                 //App's reducer which consists of multiple reducres from multiple slices
        cart : cartSlice
    }
});

export default appStore;