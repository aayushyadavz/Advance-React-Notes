import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import RestaurantsMenu from "./components/RestaurantsMenu";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {
    // Modifying UserContext
    // Suppose a Authentication
    // const [username, setUsername] = useState()

    // useEffect(() => {
    //     // Suppose we make an API call and we send the username password
    //     const data = { 
    //         name: "Ayush" 
    //     }
    //     setUsername(data.name)
    // }, [])

    return (
        // When we wrap these inside UserContext.Provider, anywhere inside our app where the context provider is used, the value will be this new value (Ayush Yadav) instead of default value (Default User).
        // <UserContext.Provider value={ { loggedInUser: username, setUsername } }> 
            <div className="app">
                {/* <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}> */}
                    <Header />
                {/* </UserContext.Provider> */}
                <Outlet />
            </div>
        // </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />, // Parent 
        children: [ // These are childrens of AppLayout
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            },
            {
                path: "/menu/:resId",
                element: <RestaurantsMenu />
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)


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

// -----------------------------------------------------------------------------------------------------------------

// Monolith architecture, we used to have one large project that contained smaller components, such as the API, UI, database, authentication, and notifications, all within the same project and written in a single tech stack.

// Microservice architecture is the direction the world is moving towards. In this architecture, we have different services for different tasks, such as backend, UI, authentication, database, SMS sending, and email notifications. All these services combine to form a large application.

// All these microservices communicate with each other depending on the use cases. We have separate back-end and UI projects, etc., and this is known as the separation of concerns and the single responsibility principle.

// In microservices, we can have different tech stacks for different components. All these services run on their own specific ports, and these ports can be mapped to a domain name, like foodorderingapp.com/api. This way, all these APIs are deployed under the same URL.

// -----------------------------------------------------------------------------------------------------------------
// Routing :

// The createBrowserRouter function takes in a configuration, which is an array of objects. Each object defines a different path and what should happen on that path.

// The RouterProvider will provide the routing configuration to our app.

// The Outlet component inside AppLayout will be filled with the appropriate children whenever there is a change in the path, according to the path.

// Single Page Applications (SPAs) are React apps that load a single page and use components to change views without reloading the entire page. It’s all about swapping components in and out for a smooth user experience. (Client-Side Routing)

// Server-Side Routing: We make a network call, and a page is retrieved from the server.
// Client-Side Routing: We do not make any network calls when navigating to different pages (as happens here).

// -----------------------------------------------------------------------------------------------------------------

// Parcel bundles all component files into a single JavaScript file in the dist folder, which grows as more components are added. This can slow down the app's initial load time, as everything must be rendered from one file.

// To overcome this, there is a process called "chunking," also known as "code splitting" or "dynamic bundling." It means breaking our app into smaller chunks or bundles, which is useful in large-scale applications.

// When our app bundle size increases, we can reduce it using techniques like code splitting, chunking, lazy loading, on-demand loading, and dynamic imports. These methods ensure that code is loaded only when requested, rather than all at once.

// -----------------------------------------------------------------------------------------------------------------

// Tailwind CSS -

// When we run npx tailwind init, we are executing Tailwind CSS, which creates a tailwind.config.js file. This is the configuration file for our Tailwind CSS setup.

// .postcssrc is a configuration file for PostCSS. The code inside it indicates that Parcel needs .postcssrc to read and understand Tailwind CSS.

// The `content` attribute inside `tailwind.config.js` contains an array with file extensions. These are the extensions where we can use Tailwind CSS.