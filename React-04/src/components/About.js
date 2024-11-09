import User from "./User"
import React from "react"

class About extends React.Component {
    constructor(props){
        super(props)

        // console.log("Parent constructor");
        
    }

    componentDidMount(){ 
        // console.log("Parent component did mount");
    }

    render() {
        // console.log("Parent render");
        
        return (
            <div>
                <h1>This is Swiggy Clone Website</h1>
                <User />
            </div>
        )
    }
}

export default About

// Notes:

// Lifecycle of a parent-child relationship,

/* (i) In React class components, the lifecycle follows this order:
 
    - Parent constructor is called first.
    - Parent render is executed.
    - Child constructor is called.
    - Child render is executed.
    - Child componentDidMount runs. (Now, child has been mounted successfully)
    - Finally, Parent componentDidMount runs.

    This sequence ensures the child is mounted before the parent completes its lifecycle. */

/* (ii) When rendering two instances of the same component, the React class component lifecycle works as follows:

    ---------- RENDER PHASE (Of the Parent) ------------
    - Parent constructor is called.
    - Parent render is executed.
    ---------- RENDER PHASE (Of the childs) ------------
    - First Child constructor runs.
    - First Child render runs.
    - Second Child constructor runs.
    - Second Child render runs.
    ---- COMMIT PHASE (Of the childs and parent) -------
    - First Child componentDidMount runs.
    - Second Child componentDidMount runs.
    - Finally, Parent componentDidMount runs.

This sequence ensures both child components are mounted before the parent completes its lifecycle. */