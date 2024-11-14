import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cartSlice" // Imported cartReducer from 'cartSlice.js'

const appstore = configureStore({// Slices
    reducer: { 
        cart: cartReducer 
    }
})

export default appstore

// Notes 

// configureStore - This will give us the store for our React application.

// After this, provided this store to our application in 'App.js'

// After this, slice is created which is 'cartSlice.js'

// Here, there is a single main reducer, and inside it, there are smaller slice reducers.

// To read data from it, we have used the selector hook in 'Header.js'.