import React from "react";
import { Link } from "react-router-dom";
import logo from "./../logo.svg";

export default function Footer() {
    return (
        <div className="col-12 footer container">
            <img className="footer__logo" alt="Holidaze" src={logo}/>
            <ul className="footer__list">
                <li className="footer__list__element"><Link to="/contact">Contact us</Link></li>
                <li className="footer__list__element"><Link to="#">Terms of Use</Link></li>
                <li className="footer__list__element"><Link to="/login">Account</Link></li>
            </ul>
        </div>
    )
}