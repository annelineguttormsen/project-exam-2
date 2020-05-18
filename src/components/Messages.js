import React from "react";
import { Link, useHistory } from "react-router-dom";

import AccountMenu from "./AccountMenu";

export default function Messages() {
    const history = useHistory();

    //sjekk om bruker er logget inn
    if (localStorage.getItem("loggedIn")) {
        console.log("Bruker er logget inn");
    } else {
        history.replace("/login");
    }
    return (
        <div className="col-6 col-md-8 col-sm-12 account container">
             <div className="col-12 breadcrumbs">
                <ul>
                    <li className="breadcrumbs__link"><Link to="/">Home</Link></li><span>></span>
                    <li className="breadcrumbs__link"><Link to="/messages">Messages</Link></li>
                </ul>
            </div>
            <AccountMenu title="Messages"/>
        </div>
    )
}