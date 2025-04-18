import { createSlice } from "@reduxjs/toolkit";

const CardSlice= createSlice({
    //takes configuration object
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItems:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItems:(state)=>{
            state.items.pop();
        },
        clearItems:(state)=>{
            state.items=[];
        }
    }
})
export default CardSlice.reducer;
export const {addItems,removeItems,clearItems}=CardSlice.actions;