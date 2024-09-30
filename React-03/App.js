import React from "react"
import ReactDOM from "react-dom/client"

const Title = () => <h1 className="heading">Title</h1>

const para = <p>Paragraph</p>

const Heading = () => (
    <div className="container">
        <Title /> 
        <h1 className="heading">Heading</h1>
        {para}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Heading />) // Rendering a functional component

// Notes :

// Created two scripts in package.json: one for running the project in development mode and another for building it for production.

// The command npm run start or npm start is equivalent to npx parcel index.html & The command npm run build is equivalent to npx parcel build index.html

// JSX - JSX is different from React. JSX is a convention where we merge HTML and JavaScript. JSX is not HTML inside JavaScript; it is a syntax that looks like HTML.

// Babel is installed by Parcel, and it converts JSX code into code that React, JavaScript engines, and browsers can understand.

// JSX is converted into React.createElement, which returns an object. Using the render method, it is then converted into an HTML element. The conversion from JSX to React.createElement is done by Babel.

// There are two ways of creating react components,
// (i) Class based components (old)
// (ii) Functional components (new) - it's a simple JS function which returns some JSX code or a function which is returning a React Element or a bunch of React Elements is a functional component.

// A component inside another component is known as component composition.