import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import ErrorMessage from "./ErrorMessage";
import AccountMenu from "./AccountMenu";

const schema = yup.object().shape({
	establishmentName: yup.string().required("Title of establishment is required"),
    establishmentEmail: yup.string().email("E-mail must be valid").required("E-mail is required"),
    imageUrl: yup.string().required("URL is required"),
    price: yup.number().typeError("Price must be a number").required("Price is required").positive(),
    maxGuests: yup.number().typeError("Max number of guests must be a number").required("Max number of guests is required").positive(),
    googleLat: yup.number().typeError("Google latitude must be a number").required("Google Latitude is required"),
    googleLong: yup.number().typeError("Google longitude must be a number").required("Google Longitude is required"),
    description: yup.string().required("Description is required"),
	selfCatering: yup.boolean().required("Self catering must be answered")
});

export default function AddEstablishment() {
    const history = useHistory();

    //sjekk om bruker er logget inn
    if (localStorage.getItem("loggedIn") === "true") {
        console.log("Bruker er logget inn");
    } else {
        history.replace("/login");
    }

    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(event) {
        console.log(event);
    }

    return (
        <div className="col-6 col-md-8 col-sm-12 account container">
             <div className="col-12 breadcrumbs">
                <ul>
                    <li className="breadcrumbs__link"><Link to="/">Home</Link></li><span>></span>
                    <li className="breadcrumbs__link"><Link to="/addestablishment">Add Establishment</Link></li>
                </ul>
            </div>
            <AccountMenu title="Add Establishment"/>
            <form 
                method="POST" 
                action="add-establishments-success.php"
                target="hiddenframe"
                // onSubmit={handleSubmit(onSubmit)}
            >
                <label htmlFor="establishmentName">Establishment name <span>* </span>{errors.establishmentName && <ErrorMessage text={errors.establishmentName.message}/>}
                <input 
                    className="col-12" 
                    type="text" 
                    name="establishmentName" 
                    id="establishmentName"
                    ref={register({required:true})}
                /></label>
                <label htmlFor="establishmentEmail">Establishment e-mail <span>* </span>{errors.establishmentEmail && <ErrorMessage text={errors.establishmentEmail.message}/>}
                <input 
                    className="col-12" 
                    type="text" 
                    name="establishmentEmail" 
                    id="establishmentEmail"
                    ref={register({required:true})}
                /></label>
                <label htmlFor="imageUrl">Image URL <span>* </span>{errors.imageUrl && <ErrorMessage text={errors.imageUrl.message}/>}
                <input 
                    className="col-12" 
                    type="text" 
                    name="imageUrl" 
                    id="imageUrl"
                    ref={register({required:true})}
                /></label>
                <label htmlFor="price">Price per person per night <span>* </span>{errors.price && <ErrorMessage text={errors.price.message}/>}
                <input 
                    className="col-12" 
                    type="text" 
                    name="price" 
                    id="price"
                    ref={register({required:true})}
                /></label>
                <label htmlFor="maxGuests">Maximum number of guests <span>* </span>{errors.maxGuests && <ErrorMessage text={errors.maxGuests.message}/>}
                <input 
                    className="col-12" 
                    type="text" 
                    name="maxGuests" 
                    id="maxGuests"
                    ref={register({required:true})}
                /></label>
                <label htmlFor="googleLat">Google Maps coordinates latitude <span>* </span>{errors.googleLat && <ErrorMessage text={errors.googleLat.message}/>}
                <input 
                    className="col-12" 
                    type="text" 
                    name="googleLat" 
                    id="googleLat"
                    ref={register({required:true})}
                /></label>
                <label htmlFor="googleLong">Google Maps coordinates longitude <span>* </span>{errors.googleLong && <ErrorMessage text={errors.googleLong.message}/>}
                <input 
                    className="col-12" 
                    type="text" 
                    name="googleLong" 
                    id="googleLong"
                    ref={register({required:true})}
                /></label>
                <label htmlFor="description">Property description <span>* </span>{errors.description && <ErrorMessage text={errors.description.message}/>}
                <textarea 
                    className="col-12" 
                    name="description" 
                    id="description"
                    ref={register({required:true})}
                /></label>
                <label>Does your property offer self catering? <span>* </span></label>{errors.selfCatering && <ErrorMessage text={errors.selfCatering.message}/>}
                <br/>
                <label>
                    <input 
                        type="radio" 
                        name="selfCatering" 
                        id="true" 
                        value="true"/>Yes
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="selfCatering" 
                        id="false" 
                        value="false"
                    />No
                </label>
                
                <br/>
                <label>ID</label>
                <input type="number" name="id" id="id" min="1" defaultValue="1"/>
                <button className="btn btn--success btn--big" type="submit"><p>Set up property</p></button>
            </form>
            {/* https://stackoverflow.com/a/30666118 */}
            <iframe name="hiddenframe" className="hidden__frame" title="Hidden frame"/>
        </div>
    )
}