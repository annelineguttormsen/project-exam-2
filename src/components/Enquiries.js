import React, { 
    useState, 
    useEffect 
} from "react";
import {
    Link, 
    useHistory 
} from "react-router-dom";

import AccountMenu from "./AccountMenu";
import EnquiriesArticle from "./EnquiriesArticle";

export default function Enquiries() {
    const history = useHistory();

    const [state, setState] = useState({
        enquiries: []
    });

    //sjekk om bruker er logget inn
    if (localStorage.getItem("loggedIn") === "true") {
        console.log("Bruker er logget inn");
    } else {
        history.replace("/login");
    }

    useEffect(
        function() {
            fetch("/enquiries.json")
            .then(response => response.json())
            .then(responseJSON => {
                setState({enquiries: responseJSON});
            })
            .catch(function(err) {
                console.log("noe gikk galt", err);
            });
        }, []
    );

    return (
        <div className="col-6 col-md-8 col-sm-12 account container">
             <div className="col-12 breadcrumbs">
                <ul>
                    <li className="breadcrumbs__link"><Link to="/">Home</Link></li><span>></span>
                    <li className="breadcrumbs__link"><Link to="/enquiries">Enquiries</Link></li>
                </ul>
            </div>
            <AccountMenu title="Enquiries"/>
            <div className="enquiries">
                {state.enquiries.map(index => 
                    <EnquiriesArticle
                        property={index["establishment"]}
                        client={index["clientName"]}
                        email={index["email"]}
                        checkin={index["checkin"]}
                        checkout={index["checkout"]}
                    />)
                }
            </div>
        </div>
    )
}