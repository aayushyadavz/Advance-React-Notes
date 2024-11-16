import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart", // name of the slice
    initialState: { // initial state of the slice
        items: []
    },
    reducers: { 
        // writing reducers functions corresponding to each actions
        addItems: (state, action) => { // addItems is a action and inside it there is a reducer function which is modifies the state based on the action
            state.items.push(action.payload)
        },
        removeItems: (state) => {
            state.items.pop()
        },
        clearCart: (state) => {
            state.items.length = 0
        }
    }
})

// We will export our actions as well as reducers
export const {addItems, removeItems, clearCart} = cartSlice.actions
export default cartSlice.reducer