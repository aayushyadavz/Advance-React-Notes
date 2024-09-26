const parent = React.createElement( // and this parent is an object not some html element
    "div", 
    { id: "parent" }, 
    [
        React.createElement("div", { id: "child1" }, [
            React.createElement("h1", {}, "I'm the h1"),
            React.createElement("h2", {}, "I'm the h2")
        ]),
        React.createElement("div", { id: "child2"}, [
            React.createElement("h1", {}, "I'm the h1"),
            React.createElement("h2", {}, "I'm the h2"),
        ])
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent) // while it is rendering on to the DOM it converts itself into that html

// The HTML structure will look like this :
/* 
<div id="parent">
    <div id="child1">
        <h1>I'm the h1</h1>
        <h2>I'm the h2</h2>
    </div>
    <div id="child2">
        <h1>I'm the h1</h1>
        <h2>I'm the h2</h2>
    </div>
</div>
*/