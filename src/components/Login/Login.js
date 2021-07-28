import React, { useState } from 'react';
import "./Login.styles.css"

function Login(props) {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassowrd] = useState("");

    const emailHandler = (e) => {
        setEnteredEmail(e.target.value)
    }
    const passwordHandler = (e) => {
        setEnteredPassowrd(e.target.value)
    };
    const formHandler = (e) => {
        e.preventDefault();
        setEnteredEmail("")
        setEnteredPassowrd("")
        props.onLogin();
    }

    return (
        <div className="Login">
            <form onSubmit={formHandler}>
                <label htmlFor="email">Enter Email</label>
                <input type="email" id="email" value={enteredEmail} onChange={emailHandler} />
                <label htmlFor="password">Enter Password</label>
                <input type="password" id="password" value={enteredPassword} onChange={passwordHandler} />
                <button type="submit" >Login</button>
            </form>
        </div>
    )
}

export default Login
