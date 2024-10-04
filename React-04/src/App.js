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