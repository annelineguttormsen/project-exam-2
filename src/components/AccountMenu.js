import React from "react";
import { Link } from "react-router-dom";

export default function AccountMenu(props) {
    return (
        <div className="col-12 account__menu">
            <h1>{props.title}</h1>
            <ul>
                <li><Link to="/enquiries">Enquiries</Link></li>
                <li><Link to="/messages">Messages</Link></li>
                <li><Link to="/addestablishment">Add establishment</Link></li>
            </ul>
        </div>
    )
}