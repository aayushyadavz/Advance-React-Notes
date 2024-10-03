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