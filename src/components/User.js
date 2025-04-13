import { useState } from "react";
const User=(props)=>{
  const [count]=useState(0);

    return(
        <div className="user-container">
            <div className="user-card">
                <h1>Count: {count}</h1>
                <h2>Name: {props.name}</h2>
                <p>Location: Pune,IN</p>
                <p>Contact: @aaaryansgh</p>
            </div>
            <div className="user-card">
                <h2>Name: Rajeev</h2>
                <p>Location: Delhi,IN</p>
                <p>Contact: @rajeev</p>
            </div>
            <div className="user-card">
                <h2>Name: Ansh</h2>
                <p>Location: Delhi,IN</p>
                <p>Contact: @ansh</p>
            </div>
            <div className="user-card">
                <h2>Name: Pranjal</h2>
                <p>Location: Banglore,IN</p>
                <p>Contact: @pranjal</p>
            </div>
        </div>
    )
}
export default User;