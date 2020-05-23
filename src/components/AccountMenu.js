import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import menuIcon from "./../menu_icon.svg";

export default function AccountMenu(props) {
    const menuRef = useRef();
    
    const [state, setState] = useState({
        active: false
    });

    //https://stackoverflow.com/a/42630743
    function toggleClass() {
        const currentState = state.active;
        if (currentState === true) {
            setTimeout(function(){
                menuRef.current.blur();
            });
        } 
        else if (currentState === false) {
            setTimeout(function(){
                menuRef.current.focus();
            });
        }
        setTimeout(() => {
            setState({active: !currentState});
        },10);
    }

    return (
        <>
        <div className="col-12 account__menu">
            <h1 className="account__menu__title">{props.title}</h1>
            <img 
                className="account__menu__icon" 
                onMouseDown={state.active ? console.log("hei") : toggleClass}
                src={menuIcon} 
                alt="Menu"
            />
        </div>
        <div className="col-12 account__menu__list--wrap">
            <ul 
                className={state.active ? "account__menu__list": "account__menu__list account__menu__list--hidden"}
                ref={menuRef}
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