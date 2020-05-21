import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AccountMenu(props) {
    let menuRef = React.createRef();
    
    const [state, setState] = useState({
        active: false
    });

    //https://stackoverflow.com/a/42630743
    function toggleClass() {
        const currentState = state.active;
        if (currentState === true) {
            menuRef.blur();
            console.log(currentState);
        } 
        if (currentState === false) {
            menuRef.focus();
            console.log(currentState);
        }
        setState({active: !currentState});
        console.log(menuRef);
    }

    return (
        <>
        <div className="col-12 account__menu">
            <h1 className="account__menu__title">{props.title}</h1>
            <img className="account__menu__icon" onClick={toggleClass} src="#" alt="Menu"/>
        </div>
        <div className="col-12 account__menu__list--wrap">
            <ul 
                className={state.active ? "account__menu__list": "account__menu__list account__menu__list--hidden"}
                ref={(referance) => menuRef = referance}
                onBlur={toggleClass}
                tabIndex="1"
            >
                <li><Link to="/enquiries">Enquiries</Link></li>
                <li><Link to="/messages">Messages</Link></li>
                <li><Link to="/addestablishment">Add establishment</Link></li>
                <li><Link to="/addestablishment">Log out</Link></li>
            </ul>
        </div>
        </>
    )
}