import React from "react";
import logo from "./../logo.svg";

export default function Header() {
    return (
        <div className="col-12 header container">
            <img className="header__logo" alt="Holidaze" src={logo}/>
            <button className="btn header__btn">Contact us</button>
        </div>
    )
}