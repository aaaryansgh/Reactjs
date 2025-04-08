const root=document.getElementById("root");
const parents=React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child1"},[React.createElement("h1",{id:"heading1"},"Hello World!"),
        React.createElement("h2",{id:"heading2"},"Hello World!"),]
        
));
ReactDOM.createRoot(root).render(parents);

//created a h1 tag with text "Hello World!" React.createElement(type, props, children)"
//create a root element in the div with id root ReactDOM.createRoot(container).render(element)
//render the h1 element in the root element ReactDOM.render(element, container[, callback])