import React from 'react'
import './Login.css';
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
                    <h5>Email</h5>
                    <input type="text"/>

                    <h5>Password</h5>
                    <input type="password"/>
                    <Link to = "/">
                        <button className="login_signin_button">SignIn</button>
                    </Link>

                </form>

                <p>
                    By continuing, you agree to Amazon's 
                    clones conditions  of Use and Privacy Notice.
                </p> 
                <Link to = "/Sign__up">
                    <button className="login_register_account">Create Amazon account</button> 
                </Link>
            </div>

        </div>
    )
}

export default Login
