import React from "react"
import UserContext from "../utils/UserContext"

class User extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            userInfo: {}
        }

        // console.log("Child constructor");
    }

    async componentDidMount(){
        const response = await fetch("https://api.github.com/users/aayushyadavz")
        const data = await response.json()

        // console.log(data);

        this.setState({
            userInfo: data
        })

        // console.log("Child component did mount");
        
    }

    componentDidUpdate() {
        // console.log("Child component did update");
    }
    
    render() {
        // console.log("Child render");
        
        const { name, location, avatar_url } = this.state.userInfo

        return (
            <div className="user">
                <img src={avatar_url} style={ {width: "100px"} }/>
                {/* Accessing UserContext in class based components */}
                <UserContext.Consumer>
                    {(data) => <p>{data.loggedInUser}</p>}
                </UserContext.Consumer>
                <h3>Name : {name}</h3>
                <h3>Location : {location}</h3>
            </div>
        )
    }
}

export default User

// Notes:

// A class-based component is a class that has a render method which returns some JSX.

// React.Component is essentially a class provided by React, and the user is inheriting some properties from it.

// super(props) allows this.props to be used inside the User component. It lets the User component inherit and use features from React.Component.

// this.state is a large object, and the count is sent from this.setState, so React will not modify the other values defined in this.state.

// Lifecycle Diagram link: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

// After mounting, the updating phase begins when setState is called. This updates the state variable, causing React to trigger the render function again. React will then update the DOM, and all data will be refreshed. Following this, componentDidUpdate is called.

/*
    -------- Mounting Phase ----------
    Parent constructor
    Parent render
    Child constructor
    Child render
    Parent componentDidMount
    Child componentDidMount
    -------- Updating Phase ----------
    (when setState is called in the Parent or Child)
    Child render
    Child componentDidUpdate
*/