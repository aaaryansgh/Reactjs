import { useState,useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header=()=>{
    const [isLogin,setisLogin]=useState(false);
    
    const handleLogin=()=>{
        setisLogin(!isLogin);
    }
    const data=useContext(UserContext);
    const onlineStatus=useOnlineStatus();
    const cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems);
    
    return (
        <div className="flex flex-wrap justify-between bg-black text-white m-4 mx-35 px-2 rounded-4xl">
            <div className="Logo-container flex items-center p-2 m-2">
                <h1 className="text-3xl font-bold cursor-pointer">khao</h1><span className="text-amber-600 text-3xl font-bold">N</span><h1 className="text-3xl font-bold">click</h1>
            </div>
            <div className="nav-items flex flex-wrap items-center cursor-pointer">
                <ul className="flex gap-5 mr-10">
                  
                    <li className="hover:text-amber-600">
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li className="hover:text-amber-600 ">
                        <Link className="link" to="/about">About</Link>
                    </li>
                    <li className="hover:text-amber-600 ">
                        <Link className="link" to="/contact">Contact</Link>
                    </li>
                    <li className="hover:text-amber-600 ">
                        <Link className="link" to="/grocery-store">Grocery</Link>
                    </li>
                    <li>Cart({cartItems.length})</li>
                    <li>{onlineStatus?"🟢 Online":"🔴 Offline"}</li>
                    {isLogin?(
                        <>
                          <p>{data.loggedInUser}</p>
                          <button className="cursor-pointer hover:text-red-700" onClick={handleLogin}>Logout</button>
                        </>
                        
                    ):<button className="login-btn cursor-pointer hover:text-amber-600 " onClick={handleLogin}>Login</button>}
                </ul>
                
            </div>
        </div>
    )
}

export default Header;
// The Header component is a functional component that renders a header section for a website.