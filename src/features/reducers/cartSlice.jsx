import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const findProduct = state.find(el => el.id === action.payload.id)
            if (findProduct) {
                toast.error(`This product is already in your cart`, {id: "123"})
            }
            else{
                action.payload.qty = 1
                state.push(action.payload)
                toast.success("New product added to cart",{id: "123"} )
            }
        },
        changeInCart: (state, action) => {
            state.forEach((cart,i) => {
                if(cartSlice.id === action.payload.id){
                    state[i].qty = action.payload.qty
                }
            })
        },
        removeFromCart: (state, action) => {
            state.splice(action.payload, 1)
            toast.success("New product removed from cart",{id: "123"} )
        } 
    }
})
export const {addToCart, changeInCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer
