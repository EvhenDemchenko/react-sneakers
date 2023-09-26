import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
    cartState: "close",
    searchedValue: ''
} 

export const sneakersReducer = createSlice({
    name: 'sneakers',
    initialState,
    reducers : {
        setItems : (state, action) =>{
            state.items = action.payload
        },
        setCartState : (state, action) =>{
            state.cartState = action.payload
        },
        setSearchedValue : (state, action) =>{
            state.searchedValue = action.payload
        }
    },
   
})

export const {setItems, setCartState , setSearchedValue} = sneakersReducer.actions
export default sneakersReducer.reducer