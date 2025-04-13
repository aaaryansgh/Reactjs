import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/ContactUs";
import Error from "./components/Error";
import Shimmer from "./components/Shimmer";


//chunking
// Code Splitting
// lazy loading
// Dynamic bundling
const Grocery=lazy(()=>import("./components/Grocery"));
//import Grocery from "./components/Grocery";
const AppLayout=()=>{
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/grocery-store",
                element:<Suspense fallback={<Shimmer />}><Grocery /></Suspense>,
            },
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/about",
                element:<About />,
            },
            {
                path:"/contact",
                element:<Contact />,
            },
            
        ],
        errorElement:<Error />,
    },
   
])
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);




















//created a h1 tag with text "Hello World!" React.createElement(type, props, children)"
//create a root element in the div with id root ReactDOM.createRoot(container).render(element)
//render the h1 element in the root element ReactDOM.render(element, container[, callback])