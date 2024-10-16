import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError()
    console.log(err);
    
    return (
        <div>
            <h1>Opps!!</h1>
            <h1>Something went wrong!</h1>
            <h1>{err.status}: {err.statusText}</h1>
        </div>
    )
}

export default Error

// Notes:

// React Router DOM provides access to an important hook (useRouteError). This hook gives more information about any errors that occur during routing.