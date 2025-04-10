import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


const AppLayout=()=>{
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}
const root= ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
root.render(<AppLayout />);




















//created a h1 tag with text "Hello World!" React.createElement(type, props, children)"
//create a root element in the div with id root ReactDOM.createRoot(container).render(element)
//render the h1 element in the root element ReactDOM.render(element, container[, callback])