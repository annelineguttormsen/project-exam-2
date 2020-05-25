import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import ErrorMessage from "./ErrorMessage";

const schema = yup.object().shape({
	clientName: yup.string().required("Name is required"),
    email: yup.string().email("E-mail must be valid").required("E-mail is required"),
	message: yup.string().required("Message is required")
});

export default function Contact() {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit() {
        console.log("onsubmit har blitt tilkalt");
    }
    return (
        <div className="col-12 contact">
            <div className="col-6 col-md-8 col-sm-12 container">
                <div className="breadcrumbs">
                    <ul>
                        <li className="breadcrumbs__link"><Link to="/">Home</Link></li><span>></span>
                        <li className="breadcrumbs__link"><Link to="/contact">Contact us</Link></li>
                    </ul>
                </div>
                <h1 className="contact__title">How can we help?</h1>
                <form 
                    method="POST" 
                    action="contact-success.php"
                    //onSubmit={handleSubmit(onSubmit)}
                    className="contact__form"
                    target="hiddenframe"
                >
                    <label>Full name <span>* </span>{errors.clientName && <ErrorMessage text={errors.clientName.message}/>}
                    <input 
                        className="col-12 contact__form__input" 
                        autoComplete="off"
                        type="text" 
                        name="clientName" 
                        id="clientName"
                        ref={register({required:true})}
                    /></label>
                    <label>E-mail <span>* </span>{errors.email && <ErrorMessage text={errors.email.message}/>}
                    <input 
                        className="col-12 contact__form__input" 
                        type="text" 
                        name="email" 
                        id="email"
                        ref={register({required:true})}
                    /></label>
                    <label>Message <span>* </span>{errors.clientName && <ErrorMessage text={errors.message.message}/>}
                    <textarea
                        name="message" 
                        id="message" 
                        className="col-12 contact__form__textarea" 
                        ref={register({required:true})}
                    /></label>
                    <button 
                        type="submit" 
                        className="btn btn--success btn--big contact__form__btn"
                    >
                        <p>Send message</p>
                    </button>
                </form>
                {/* https://stackoverflow.com/a/30666118 */}
                <iframe name="hiddenframe" className="hidden__frame" title="Hidden frame"/>
            </div>
        </div>
    )
}