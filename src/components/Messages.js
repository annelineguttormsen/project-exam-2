import React, {
    useState,
    useEffect
} from "react";
import { 
    Link, 
    useHistory 
} from "react-router-dom";

import AccountMenu from "./AccountMenu";
import MessagesArticle from "./MessagesArticle";

export default function Messages() {
    const history = useHistory();
    const [state, setState] = useState({
        messages: []
    });

    useEffect(
        function() {
            fetch("/contact.json")
            .then(response => response.json())
            .then(responseJSON => {
                setState({messages: responseJSON});
            })
            .catch(function(err) {
                console.log("noe gikk galt", err);
            });
        }, []
    );

    //sjekk om bruker er logget inn
    if (localStorage.getItem("loggedIn") === "true") {
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
            <div className="messages">
                {state.messages.map(index => 
                    <MessagesArticle
                    client={index["clientName"]}
                    email={index["email"]}
                    message={index["message"]}
                    />)
                }
            </div>
        </div>
    )
}