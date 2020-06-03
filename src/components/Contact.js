import React, {
    useState
} from "react";
import { Link } from "react-router-dom";

import ErrorMessage from "./ErrorMessage";

export default function Contact() {
    const [formState,setFormState] = useState({
        formSubmitted: false
    });

    const [formErrors, setFormErrors] = useState({
        errors: {
            name: false,
            email: false,
            message: false
        }
    });

    function updateStateErrors(index, value) {
        //kopier nåværende state objekt
        //finn indexen til input som har tilkalt funksjonen
        //deretter oppdater state.data kopien sin verdi
        //(variabel heter det samme slik at objektet i state alltid heter data)
        //https://stackoverflow.com/a/49502115
        let data = formErrors.errors;
        data[index] = value;
        
        //oppdater state med ny data array
        setFormErrors({errors: data});
    }
    
    function onSubmit(event) {
        //email regex hentet fra http://regexlib.com/displaypatterns.aspx
        let emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        
        //sjekk om navn er tomt
        if (event.target[0].value === undefined || event.target[0].value === "") {
            event.preventDefault();
            updateStateErrors("name", true);
            return false
        } else {
            if (formErrors.errors.name) {
                updateStateErrors("name", false);
            }
        }
        //sjekk om input er valid e-post
        if (!emailRegex.test(event.target[1].value)) {
            event.preventDefault();
            updateStateErrors("email", true);
            return false
        } else {
            if (formErrors.errors.email) {
                updateStateErrors("email", false);
            }
        }
        //sjekk om message er tomt
        if (event.target[2].value === undefined || event.target[2].value === "") {
            event.preventDefault();
            updateStateErrors("message", true);
            return false
        } else {
            if (formErrors.errors.name) {
                updateStateErrors("message", false);
            }
        }
        setTimeout(function() {
            setFormState({formSubmitted: true});
        },100);
        console.log("onsubmit kalt!");
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
                {formState.formSubmitted ? 
                <>
                <h1>Thank you for your message!</h1>
                <p>We've sent a confirmation to your e-mail and we will contact you as soon as possible</p>
                </>
                :
                <>
                <h1 className="contact__title">How can we help?</h1>
                <form 
                    method="POST" 
                    action="/contact-success.php"
                    onSubmit={onSubmit}
                    className="contact__form"
                    target="hiddenframe"
                >
                    <label>Full name <span>* </span>{formErrors.errors.name && <ErrorMessage text={"Name is required"}/>}
                    <input 
                        className="col-12 contact__form__input" 
                        autoComplete="off"
                        type="text" 
                        name="clientName" 
                        id="clientName"
                    /></label>
                    <label>E-mail <span>* </span>{formErrors.errors.email && <ErrorMessage text={"E-mail is required and must be valid"}/>}
                    <input 
                        className="col-12 contact__form__input" 
                        type="text" 
                        name="email" 
                        id="email"
                    /></label>
                    <label>Message <span>* </span>{formErrors.errors.message && <ErrorMessage text={"Message is required"}/>}
                    <textarea
                        name="message" 
                        id="message" 
                        className="col-12 contact__form__textarea" 
                    /></label>
                    <button 
                        type="submit" 
                        className="col-xs-12 btn btn--success btn--big contact__form__btn"
                    >
                        <p>Send message</p>
                    </button>
                </form>
                </>
                }
                {/* https://stackoverflow.com/a/30666118 */}
                <iframe name="hiddenframe" className="hidden__frame" title="Hidden frame"/>
            </div>
        </div>
    )
}