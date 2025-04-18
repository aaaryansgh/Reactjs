import React, { lazy, Suspense, useEffect,useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/ContactUs";
import Error from "./components/Error";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import Appstore from "./utils/Appstore";

// [chunking, code splitting, lazy loading, dynamic bundling]
const Grocery=lazy(()=>import("./components/Grocery")); //lazy loading
const Slotmenu=lazy(()=>import("./components/Slotmenu"));
const AppLayout=()=>{
     //authentication code written 
     const [userName,setUserName]=useState();

     useEffect(()=>{
        const data={
            name:"Aryan"
        }
        setUserName(data.name)
    },[])

  
    
    return (
        <Provider store={Appstore}>
            <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
                <div>
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>  
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
            {
                path:"/resturant/:resname/:id",
                element:<Suspense fallback={<Shimmer />}><Slotmenu /></Suspense>
            }
            
        ],
        errorElement:<Error />,
    },
   
])
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);




















//created a h1 tag with text "Hello World!" React.createElement(type, props, children)"
//create a root element in the div with id root ReactDOM.createRoot(container).render(element)
//render the h1 element in the root element ReactDOM.render(element, container[, callback])