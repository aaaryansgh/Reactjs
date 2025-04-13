import { useState,useEffect } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{
    const [btnName,setBtnName]=useState('login');
    const handleLogin=()=>{
        setBtnName(btnName==='login'?'logout':'login');
    }
    const onlineStatus=useOnlineStatus();
    return (
        <div className="header">
            <div className="Logo-container">
                <h1 className="logo">khaoNclick</h1>
            </div>
            <div className="nav-items">
                <ul>
                  
                    <li>
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="link" to="/about">About</Link>
                    </li>
                    <li>
                        <Link className="link" to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link className="link" to="/grocery-store">Grocery</Link>
                    </li>
                    <li>{onlineStatus?"🟢 Online":"🔴 Offline"}</li>
                    <button className="login-btn" onClick={handleLogin}>{btnName}</button>
                </ul>
                
            </div>
        </div>
    )
}

export default Header;
// The Header component is a functional component that renders a header section for a website.