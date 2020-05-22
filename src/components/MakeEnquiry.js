import React, { useState } from "react";
import { 
    Link,
    useParams,
    useHistory
} from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import ErrorMessage from "./ErrorMessage";

let establishments = require("./establishments.json");

const schema = yup.object().shape({
	clientName: yup.string().required("Name is required"),
    email: yup.string().email("E-mail must be valid").required("E-mail is required")
});

export default function MakeEnquiry() {
    let { id } = useParams();
    const history = useHistory();

    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    let [state, setState] = useState({
        data: []
    });

    let hotelId, fromDate, toDate;

    try {
        hotelId = id.match(/id=(.*)&fromDate/)[1];
        fromDate = id.match(/fromDate=(.*)&toDate/)[1];
        toDate = id.match(/toDate=(.*)/)[1];
    } catch(err) {
        history.replace("/404");
    }

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <div className="col-6 col-md-8 col-sm-12 makeenquiry container">
            <div className="col-12 breadcrumbs">
                <ul>
                    <li className="breadcrumbs__link"><Link to="/">Home</Link></li><span>></span>
                    <li className="breadcrumbs__link"><Link to={"/makeenquiry/" + id}>Make enquiry</Link></li>
                </ul>
            </div>
            <h1>Your booking</h1>
            <form
                method="POST" 
                action="enquiry-success.php"
                onSubmit={handleSubmit(onSubmit)}
            >
                <label>Establishment
                <input
                    className="col-12 makeenquiry__input makeenquiry__input--disabled" 
                    name="establishment"
                    type="text"
                    value={hotelId}
                /></label>
                <label>Check-in
                <input
                    className="col-12 makeenquiry__input" 
                    name="checkin"
                    type="date"
                    value={fromDate}
                /></label>
                <label>Check-out
                <input
                    className="col-12 makeenquiry__input" 
                    name="checkout"
                    type="date"
                    value={toDate}
                /></label>
                <h2>Contact information</h2>
                <label>Full name <span>* </span>{errors.clientName && <ErrorMessage text={errors.clientName.message}/>}
                <input 
                    className="col-12 makeenquiry__input" 
                    name="clientName"
                    type="text" 
                    placeholder="John Smith"
                    ref={register({required:true})}
                    // defaultValue={search}
                    // onChange={(event) => updateInput(event, "search")}
                /></label>
                <label>E-mail <span>* </span>{errors.email && <ErrorMessage text={errors.email.message}/>}
                <input 
                    className="col-12 makeenquiry__input"  
                    name="email"
                    type="text" 
                    placeholder="js@gmail.com"
                    ref={register({required:true})}
                    // defaultValue={search}
                    // onChange={(event) => updateInput(event, "search")}
                /></label>
                <button 
                    className="btn btn--success"
                    type="submit"
                >
                    <p>Make booking</p>
                </button>
            </form>
        </div>
    )
}