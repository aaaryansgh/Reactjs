import { useState,useEffect } from "react";
import { Link } from "react-router";
import { useLocation } from "react-router";
const Header=()=>{
    const [btnName,setBtnName]=useState('login');
    const location=useLocation();
    useEffect(()=>{
        console.log(location);
    },[location])

    const handleLogin=()=>{
        setBtnName(btnName==='login'?'logout':'login');
    }
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
                    <li>Cart</li>
                    <button className="login-btn" onClick={handleLogin}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
// The Header component is a functional component that renders a header section for a website.