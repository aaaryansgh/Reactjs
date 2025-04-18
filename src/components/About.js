import User from './User';
import UserClass from './UserClass';
import React from 'react';

class About extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div>
                <h1>About Us</h1>
                <p>This is the about page of our restaurant website.</p>          
                <UserClass />
            </div>
            </div>
        )
    }
}
export default About;
// The About component is a functional component that renders an about page for a website.