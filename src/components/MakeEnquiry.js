import React, {
    useEffect,
    useState
} from "react";
import { 
    Link,
    useParams,
    useHistory
} from "react-router-dom";

import ErrorMessage from "./ErrorMessage";

export default function MakeEnquiry() {
    let { id } = useParams();
    const history = useHistory();

    const [state, setState] = useState({
        ca: []
    });

    const [formState,setFormState] = useState({
        formSubmitted: false
    });

    const [formErrors, setFormErrors] = useState({
        errors: {
            establishment: false,
            fromDate: false,
            toDate: false,
            name: false,
            email: false
        }
    });

    //globale variabler
    let hotelId, fromDate, toDate;

    try {
        hotelId = id.match(/id=(.*)&fromDate/)[1];
        fromDate = id.match(/fromDate=(.*)&toDate/)[1];
        toDate = id.match(/toDate=(.*)/)[1];
    } catch(err) {
        history.replace("/404");
    }

    useEffect(
        function() {
            fetch("/establishments.json")
            .then(response => response.json())
            .then(responseJSON => {
                let currentArticle = responseJSON.find(i => i.id === hotelId);
                setState({ca: currentArticle});
            })
            .catch(function(err) {
                console.log("noe gikk galt", err);
            });
        }, []
    );

    function updateStateErrors(index, value) {
        //kopier nåværende state objekt
        //finn indexen til input som har tilkalt funksjonen
        //deretter oppdater state.data kopien sin verdi
        //(variabel heter det samme slik at objektet i state alltid heter data)
        //https://stackoverflow.com/a/49502115
        let data = formErrors.errors;
        data[index] = value;
        
        //oppdater state med ny data array
        setFormErrors({errors: data});
    }
    
    function onSubmit(event) {
        //email regex hentet fra http://regexlib.com/displaypatterns.aspx
        let emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        let dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        
        //test om  er tomme
        if (event.target[0].value === undefined || event.target[0].value === "") {
            event.preventDefault();
            updateStateErrors("establishment", true);
            return false
        } else {
            if (formErrors.errors.establishment) {
                updateStateErrors("establishment", false);
            }
        }
        //sjekk om date input er en dato
        if (!dateRegex.test(event.target[1].value)) {
            event.preventDefault();
            updateStateErrors("fromDate", true);
            return false
        } else {
            if (formErrors.errors.fromDate) {
                updateStateErrors("fromDate", false);
            }
        }
        if (!dateRegex.test(event.target[1].value)) {
            event.preventDefault();
            updateStateErrors("toDate", true);
            return false
        } else {
            if (formErrors.errors.toDate) {
                updateStateErrors("toDate", false);
            }
        }
        //sjekk om navn er tomt
        if (event.target[3].value === undefined || event.target[3].value === "") {
            event.preventDefault();
            updateStateErrors("name", true);
            return false
        } else {
            if (formErrors.errors.name) {
                updateStateErrors("name", false);
            }
        }
        //sjekk om input er valid e-post
        if (!emailRegex.test(event.target[4].value)) {
            event.preventDefault();
            updateStateErrors("email", true);
            return false
        } else {
            if (formErrors.errors.email) {
                updateStateErrors("email", false);
            }
        }
        setTimeout(function() {
            setFormState({formSubmitted: true});
        },100);
    }

    return (
        <div className="col-6 col-md-8 col-sm-12 makeenquiry container">
            <div className="col-12 breadcrumbs">
                <ul>
                    <li className="breadcrumbs__link"><Link to="/">Home</Link></li><span>></span>
                    <li className="breadcrumbs__link"><Link to={"/makeenquiry/" + id}>Make enquiry</Link></li>
                </ul>
            </div>
            {formState.formSubmitted ? 
            <>
            <h1>Thank you for your booking!</h1>
            <p>We have sent you an e-mail with more details about your booking, if you have any more questions please head over to <Link to="/contact">our contact us page</Link>.</p>
            </>
             : 
            <>
            <h1>Your booking</h1>
            <form
                method="POST" 
                action="/enquiry-success.php"
                target="hiddenframe"
                onSubmit={onSubmit}
            >
                <label>Establishment <span>* </span>{formErrors.errors.establishment && <ErrorMessage text={"Establishment is required"}/>}
                <input
                    className="col-12 makeenquiry__input makeenquiry__input--disabled" 
                    name="establishment"
                    type="text"
                    value={state.ca["establishmentName"]}
                    disabled
                    required
                /></label>
                <label>Check-in <span>* </span>{formErrors.errors.fromDate && <ErrorMessage text={"Check-in is required"}/>}
                <input
                    className="col-12 makeenquiry__input" 
                    name="checkin"
                    type="date"
                    defaultValue={fromDate}
                    required
                /></label>
                <label>Check-out <span>* </span>{formErrors.errors.toDate && <ErrorMessage text={"Check-out is required"}/>}
                <input
                    className="col-12 makeenquiry__input" 
                    name="checkout"
                    type="date"
                    defaultValue={toDate}
                    required
                /></label>
                <h2>Contact information</h2>
                <label>Full name <span>* </span>{formErrors.errors.name && <ErrorMessage text={"Name is required"}/>}
                <input 
                    className="col-12 makeenquiry__input" 
                    name="clientName"
                    type="text" 
                    placeholder="John Smith"
                /></label>
                <label>E-mail <span>* </span>{formErrors.errors.email && <ErrorMessage text={"E-mail is required and must be valid"}/>}
                <input 
                    className="col-12 makeenquiry__input"  
                    name="email"
                    type="text" 
                    placeholder="jonathan.smithsonian@gmail.com"
                /></label>
                <button 
                    className="btn btn--success"
                    type="submit"
                >
                    <p>Make booking</p>
                </button>
            </form>
            </>
            }
            {/*slutt på conditional operator (?)*/}
            {/* https://stackoverflow.com/a/30666118 */}
            <iframe name="hiddenframe" className="hidden__frame" title="Hidden frame"/>
        </div>
    )
}