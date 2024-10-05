import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)


// Notes:

// Props are something we can pass to a component. Since a component is just a normal JavaScript function, props are simply regular arguments passed to the function.

// Config Driven UI is essentially about controlling how our website looks using data or configurations, which come from the backend. We write our UI once, and then, based on the data coming from the backend, our UI changes accordingly.

// An example of a config-driven UI is when offers are available in some states or countries but not in others. These changes are made based on data or configurations received from the backend.

// Hooks is a normal JS Utility functions that is given to us by React.

// There are two very important react hooks:
// - useState() - Helps to generate super powerful variables in react.
// - useEffect() 

// Whenever a state variable updates, react re-render the component.

// React keeps the UI in sync with the data. In our data layer, when we have a local variable state, as soon as the data layer updates, our UI layer will update. E.g., as soon as the local state variable updates, React will re-render the component.

// ------------------------------------------------------------------------------------------------------

// Monolith architecture, we used to have one large project that contained smaller components, such as the API, UI, database, authentication, and notifications, all within the same project and written in a single tech stack.

// Microservice architecture is the direction the world is moving towards. In this architecture, we have different services for different tasks, such as backend, UI, authentication, database, SMS sending, and email notifications. All these services combine to form a large application.

// All these microservices communicate with each other depending on the use cases. We have separate back-end and UI projects, etc., and this is known as the separation of concerns and the single responsibility principle.

// In microservices, we can have different tech stacks for different components. All these services run on their own specific ports, and these ports can be mapped to a domain name, like foodorderingapp.com/api. This way, all these APIs are deployed under the same URL.