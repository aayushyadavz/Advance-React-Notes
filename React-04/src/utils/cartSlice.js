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
        removeItems: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload) 
            // filter Keeps Elements That Return true and returns a new array
            // e.g. - For { id: 2, name: "Burger" }: 2 !== 2 → false (removes the item).
        },
        clearCart: (state) => {
            state.items.length = 0
        }
    }
})

// We will export our actions as well as reducers
export const {addItems, removeItems, clearCart} = cartSlice.actions
export default cartSlice.reducer