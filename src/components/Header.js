import React from "react";
import logo from "./../logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="col-12 header container">
            <Link to="/"><img className="header__logo" alt="Holidaze" src={logo}/></Link>
            <button className="btn header__btn"><Link to="/contact">Contact us</Link></button>
        </div>
    )
}