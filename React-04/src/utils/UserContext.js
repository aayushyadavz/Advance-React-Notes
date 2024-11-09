import { createContext } from "react"

const UserContext = createContext({
    loggedInUser: "Default User"
})

export default UserContext

// Notes:

// React Context

// When we use Context, we can avoid props drilling. Context provides a global place to store our data, allowing any component to access it directly.