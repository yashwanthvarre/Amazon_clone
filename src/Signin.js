import React from 'react'
import './SignIn.css';
import Image from './images/download.png';
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className = "Login">
              
            <Link to = "/">
                <img
                    className="Login_logo" 
                    src = {Image}/>
            </Link>
            <div className = "Login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Username</h5>
                    <input type="text"/>

                    <h5>Email</h5>
                    <input type="text"/>

                    <h5>Password</h5>
                    <input type="password"/>

                    <h5>Re-enter Password</h5>
                    <input type="password"/>

                </form>
                <Link to = "/">
                    <button className="login_register_account">Sign-in</button> 
                </Link>
                     
            </div>

        </div>
    )
}

export default Login
