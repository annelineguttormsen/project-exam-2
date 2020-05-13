import React from "react";
import { Link } from "react-router-dom";
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
                onSubmit={handleSubmit(onSubmit)}
            >
                <label htmlFor="establishmentName">Establishment name <span>*</span>
                <input 
                    className="col-12" 
                    type="text" 
                    name="establishmentName" 
                    id="establishmentName"
                    ref={register({required:true})}
                /></label>
                {errors.establishmentName && <ErrorMessage text={errors.establishmentName.message}/>}
                <label htmlFor="establishmentEmail">Establishment e-mail <span>*</span>
                <input 
                    className="col-12" 
                    type="text" 
                    name="establishmentEmail" 
                    id="establishmentEmail"
                    ref={register({required:true})}
                /></label>
                {errors.establishmentEmail && <ErrorMessage text={errors.establishmentEmail.message}/>}
                <label htmlFor="imageUrl">Image URL <span>*</span>
                <input 
                    className="col-12" 
                    type="text" 
                    name="imageUrl" 
                    id="imageUrl"
                    ref={register({required:true})}
                /></label>
                {errors.imageUrl && <ErrorMessage text={errors.imageUrl.message}/>}
                <label htmlFor="price">Price per person per night <span>*</span>
                <input 
                    className="col-12" 
                    type="text" 
                    name="price" 
                    id="price"
                    ref={register({required:true})}
                /></label>
                {errors.price && <ErrorMessage text={errors.price.message}/>}
                <label htmlFor="maxGuests">Maximum number of guests <span>*</span>
                <input 
                    className="col-12" 
                    type="text" 
                    name="maxGuests" 
                    id="maxGuests"
                    ref={register({required:true})}
                /></label>
                {errors.maxGuests && <ErrorMessage text={errors.maxGuests.message}/>}
                <label htmlFor="googleLat">Google Maps coordinates latitude <span>*</span>
                <input 
                    className="col-12" 
                    type="text" 
                    name="googleLat" 
                    id="googleLat"
                    ref={register({required:true})}
                /></label>
                {errors.googleLat && <ErrorMessage text={errors.googleLat.message}/>}
                <label htmlFor="googleLong">Google Maps coordinates longitude <span>*</span>
                <input 
                    className="col-12" 
                    type="text" 
                    name="googleLong" 
                    id="googleLong"
                    ref={register({required:true})}
                /></label>
                {errors.googleLong && <ErrorMessage text={errors.googleLong.message}/>}
                <label htmlFor="description">Property description <span>*</span>
                <textarea 
                    className="col-12" 
                    name="description" 
                    id="description"
                    ref={register({required:true})}
                /></label>
                {errors.description && <ErrorMessage text={errors.description.message}/>}
                <label>Does your property offer self catering? <span>*</span></label>
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
                {errors.selfCatering && <ErrorMessage text={errors.selfCatering.message}/>}
                <br/>
                <label>ID</label>
                <input type="number" name="id" id="id" min="1" defaultValue="1"/>
                <button className="btn btn--success btn--big" type="submit"><p>Set up property</p></button>
            </form>
        </div>
    )
}