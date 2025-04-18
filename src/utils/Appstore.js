import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "./CardSlice";
const Appstore=configureStore({
    reducer:{
        cart:CardReducer,
    }
})

export default Appstore;