import React from "react";
import { Link } from "react-router-dom";

export default function AccountMenu(props) {
    return (
        <>
        <div className="col-12 account__menu">
            <h1 className="account__menu__title">{props.title}</h1>
            <img className="account__menu__icon" src="#"/>
        </div>
        <div className="col-12 account__menu__list--wrap">
            <ul className="account__menu__list account__menu__list--hidden">
                <li><Link to="/enquiries">Enquiries</Link></li>
                <li><Link to="/messages">Messages</Link></li>
                <li><Link to="/addestablishment">Add establishment</Link></li>
                <li><Link to="/addestablishment">Log out</Link></li>
            </ul>
        </div>
        </>
    )
}