import React from "react";

export default function Login() {
    return (
        <div className="col-6 col-md-8 col-sm-12 container login">
            <h1 className="login__title">Welcome back</h1>
            <form>
                <label>Username</label>
                <input className="col-12" type="text"/>
                <label>Password</label>
                <input className="col-12" type="password"/>
                <button className="btn btn--success btn--big"><p>Log in</p></button>
            </form>
        </div>
    )  
}