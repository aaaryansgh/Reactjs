import React from "react"
import { useState } from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"",
                location:"",
            }
        }
    }
    async componentDidMount(){
        const data= await fetch("https://api.github.com/users/aaaryansgh")
        const json=await data.json()
        console.log(json);
        this.setState({userInfo:json})
    }
    render(){
        const {name,location,avatar_url}=this.state?.userInfo;
        return(
        <div className="user-container">
            <div className="user-card">
                <div className="avatar-container">
                  <img className="avatar-img" src={avatar_url} />
                </div>
                <h2>Name: {name}</h2>
                <p>Location: {location}</p>
            </div>
        </div>
        )
    }
}
export default UserClass;