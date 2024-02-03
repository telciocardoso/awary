import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from '../Main';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    
    const navigate = useNavigate();
        
    const onButtonClick = () => {
        navigate('/Home');
    }
   

    return (

    <div className={"cardLogin"}>
  
        <br />
        
            <input
                value={email}
                placeholder="Enter your email here"
                onChange={ev => setEmail(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{emailError}</label>
        
        <br />
        
            <input
                value={password}
                placeholder="Enter your password here"
                onChange={ev => setPassword(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{passwordError}</label>
  
        <br />
        
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Log in"} />
     
    </div>
    );
}

export default Login