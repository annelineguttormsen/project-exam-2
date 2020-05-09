import React from "react";
import { Link } from "react-router-dom";

import AccountMenu from "./AccountMenu";

export default function AddEstablishment() {
    return (
        <div className="col-6 col-md-8 col-sm-12 account container">
             <div className="col-12 breadcrumbs">
                <ul>
                    <li className="breadcrumbs__link"><Link to="/">Home</Link></li><span>></span>
                    <li className="breadcrumbs__link"><Link to="/addestablishment">Add Establishment</Link></li>
                </ul>
            </div>
            <AccountMenu title="Add Establishment"/>
            <label>Establishment name <span>*</span></label>
            <input className="col-12" type="text"/>
            <label>Establishment e-mail <span>*</span></label>
            <input className="col-12" type="text"/>
            <label>Image URL <span>*</span></label>
            <input className="col-12" type="text"/>
            <label>Price per person per night<span>*</span></label>
            <input className="col-12" type="text"/>
            <label>Maximum number of guests <span>*</span></label>
            <input className="col-12" type="text"/>
            <label>Google Maps coordinates latitude <span>*</span></label>
            <input className="col-12" type="text"/>
            <label>Google Maps coordinates longitude <span>*</span></label>
            <input className="col-12" type="text"/>
            <label>Property description<span>*</span></label>
            <textarea className="col-12" />
            <label>Does your property offer self catering? <span>*</span></label>
            <br/>
            <label><input type="radio" name="selfcatering" value="true" checked/>Yes</label>
            <label><input type="radio" name="selfcatering" value="false"/>No</label>
            <button className="btn btn--success btn--big"><p>Set up property</p></button>
        </div>
    )
}