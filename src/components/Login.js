import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import ErrorMessage from "./ErrorMessage";

const schema = yup.object().shape({
	userName: yup.string().required("Username is required"),
	password: yup.string().required("Password is required")
});

export default function Login() {
    console.log("Brukernavn og passord er \"admin\"")

    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    const history = useHistory();

    const onSubmit = (data, event) => {
        //av en eller annen grunn MÅ jeg ha data i argumenter
        if (event.target[0].value === "admin" && event.target[1].value === "admin") {
            history.push("/login");
            history.replace("/enquiries");
        } else {
            return false;
        }
    };

    return (
        <div className="col-6 col-md-8 col-sm-12 container login">
            <h1 className="login__title">Welcome back</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Username {errors.userName && <ErrorMessage text={errors.userName.message}/>}
                <input 
                    className="col-12" 
                    type="text"
                    name="userName"
                    ref={register({required:true})}
                /></label>
                <label>Password {errors.password && <ErrorMessage text={errors.password.message}/>}
                <input 
                    className="col-12" 
                    type="password"
                    name="password"
                    ref={register({required:true})}
                /></label>
                <button 
                    className="btn btn--success btn--big"
                    type="submit"
                >
                    <p>Log in</p>
                </button>
            </form>
        </div>
    )  
}