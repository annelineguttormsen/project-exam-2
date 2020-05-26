import React, {
    useState, 
    useRef 
} from "react";
import { 
    useHistory
} from "react-router-dom";

import menuIcon from "./../menu_icon.svg";

export default function AccountMenu(props) {
    const menuRef = useRef();
    const history = useHistory();
    
    const [state, setState] = useState({
        active: false
    });

    //https://stackoverflow.com/a/42630743
    function toggleClass() {
        console.log("toggleclass tilkalt");
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
        setState({active: !currentState})
    }

    function logOut() {
        console.log("Logg ut");
        localStorage.setItem("loggedIn", false);
        history.replace("/login");
    }

    //menyen forsvinner så fort at <Link> ikke fungerer
    //og å sette timeout på setstate ødelegger toggleclass funksjonen
    //og man kan ikke sette transition på display eller visibility
    //det gjør meg trist for det ødelegger den smoothe animasjonen
    function menuLink(url) {
        history.push(url);
        history.replace(url);
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
                <li onClick={() => menuLink("/enquiries")}>Enquiries</li>
                <li onClick={() => menuLink("/messages")}>Messages</li>
                <li onClick={() => menuLink("/addestablishment")}>Add establishment</li>
                <li onClick={logOut}><span>Log out</span></li>
            </ul>
        </div>
        </>
    )
}