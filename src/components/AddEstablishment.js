import React, {
    useState,
    useEffect
} from "react";
import { 
    Link, 
    useHistory 
} from "react-router-dom";

import ErrorMessage from "./ErrorMessage";
import AccountMenu from "./AccountMenu";

export default function AddEstablishment() {
    const history = useHistory();

    //sjekk om bruker er logget inn
    if (localStorage.getItem("loggedIn") === "true") {
        console.log("Bruker er logget inn");
    } else {
        history.replace("/login");
    }
    const [state, setState] = useState ({
        id : 1
    });

    const [formState,setFormState] = useState({
        formSubmitted: false
    });

    const [formErrors, setFormErrors] = useState({
        errors: {
            establishment: false,
            email: false,
            imageUrl: false,
            price: false,
            maxGuests: false,
            googleLat: false,
            googleLong: false,
            description: false,
            selfCatering: false,
            id: false
        }
    });

    useEffect(
        function() {
            fetch("/establishments.json")
            .then(response => response.json())
            .then(responseJSON => {
                let newId = responseJSON.length + 1;
                setState({id: newId});
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
        let numberRegex = /^\d{1,3}(\.|\,)*\d*$/;
        let intRegex = /^\d{1,3}$/;
        
        //establishmentname
        if (event.target[0].value === undefined || event.target[0].value === "") {
            event.preventDefault();
            updateStateErrors("establishment", true);
            return false
        } else {
            if (formErrors.errors.establishment) {
                updateStateErrors("establishment", false);
            }
        }
        //epost
        if (!emailRegex.test(event.target[1].value)) {
            event.preventDefault();
            updateStateErrors("email", true);
            return false
        } else {
            if (formErrors.errors.email) {
                updateStateErrors("email", false);
            }
        }
        //imageurl
        if (event.target[2].value === undefined || event.target[2].value === "") {
            event.preventDefault();
            updateStateErrors("imageUrl", true);
            return false
        } else {
            if (formErrors.errors.imageUrl) {
                updateStateErrors("imageUrl", false);
            }
        }
        //price
        if (!numberRegex.test(event.target[3].value)) {
            event.preventDefault();
            updateStateErrors("price", true);
            return false
        } else {
            if (formErrors.errors.price) {
                updateStateErrors("price", false);
            }
        }
        //maxguests
        if (!intRegex.test(event.target[4].value)) {
            event.preventDefault();
            updateStateErrors("maxGuests", true);
            return false
        } else {
            if (formErrors.errors.maxGuests) {
                updateStateErrors("maxGuests", false);
            }
        }
        //googlelat
        if (!numberRegex.test(event.target[5].value)) {
            event.preventDefault();
            updateStateErrors("googleLat", true);
            return false
        } else {
            if (formErrors.errors.googleLat) {
                updateStateErrors("googleLat", false);
            }
        }
        //googlelong
        if (!numberRegex.test(event.target[6].value)) {
            event.preventDefault();
            updateStateErrors("googleLong", true);
            return false
        } else {
            if (formErrors.errors.googleLong) {
                updateStateErrors("googleLong", false);
            }
        }
        //description
        if (event.target[7].value === undefined || event.target[7].value === "") {
            event.preventDefault();
            updateStateErrors("description", true);
            return false
        } else {
            if (formErrors.errors.description) {
                updateStateErrors("description", false);
            }
        }
        if (event.target[8].checked === false && event.target[9].checked === false) {
            event.preventDefault();
            updateStateErrors("selfCatering", true);
            return false
        } else {
            if (formErrors.errors.selfCatering) {
                updateStateErrors("selfCatering", false);
            }
        }
        setTimeout(function() {
            setFormState({formSubmitted: true});
        },100);
    }

    return (
        <div className="col-6 col-md-8 col-sm-12 account container">
             <div className="col-12 breadcrumbs">
                <ul>
                    <li className="breadcrumbs__link"><Link to="/">Home</Link></li><span>></span>
                    <li className="breadcrumbs__link"><Link to="/addestablishment">Add Establishment</Link></li>
                </ul>
            </div>
            <AccountMenu title="Add Establishment"/>
            {formState.formSubmitted ? 
            <>
            <h1>Property successfully added</h1>
            <p></p>
            </>
            :
            <>
            <form 
                method="POST" 
                action="/add-establishments-success.php"
                target="hiddenframe"
                onSubmit={onSubmit}
            >
                <label htmlFor="establishmentName">Establishment name <span>* </span>{formErrors.errors.establishment && <ErrorMessage text={"Establishment name is required"}/>}
                <input 
                    className="col-12" 
                    type="text" 
                    name="establishmentName" 
                    id="establishmentName"
                /></label>
                <label htmlFor="establishmentEmail">Establishment e-mail <span>* </span>{formErrors.errors.email && <ErrorMessage text={"E-mail is required and must be valid"}/>}
                <input 
                    className="col-12" 
                    type="text" 
                    name="establishmentEmail" 
                    id="establishmentEmail"
                /></label>
                <label htmlFor="imageUrl">Image URL <span>* </span>{formErrors.errors.imageUrl && <ErrorMessage text={"Image URL is required"}/>}
                <input 
                    className="col-12" 
                    type="text" 
                    name="imageUrl" 
                    id="imageUrl"
                /></label>
                <label htmlFor="price">Price per person per night <span>* </span>{formErrors.errors.price && <ErrorMessage text={"Price is required and must be a number"}/>}
                <input 
                    className="col-12" 
                    type="text" 
                    name="price" 
                    id="price"
                /></label>
                <label htmlFor="maxGuests">Maximum number of guests <span>* </span>{formErrors.errors.maxGuests && <ErrorMessage text={"Number of guests is required and must be a whole number"}/>}
                <input 
                    className="col-12" 
                    type="text" 
                    name="maxGuests" 
                    id="maxGuests"
                /></label>
                <label htmlFor="googleLat">Google Maps coordinates latitude <span>* </span>{formErrors.errors.googleLat && <ErrorMessage text={"Latitude is required and must be a number"}/>}
                <input 
                    className="col-12" 
                    type="text" 
                    name="googleLat" 
                    id="googleLat"
                /></label>
                <label htmlFor="googleLong">Google Maps coordinates longitude <span>* </span>{formErrors.errors.googleLong && <ErrorMessage text={"Longitude is required and must be a number"}/>}
                <input 
                    className="col-12" 
                    type="text" 
                    name="googleLong" 
                    id="googleLong"
                /></label>
                <label htmlFor="description">Property description <span>* </span>{formErrors.errors.description && <ErrorMessage text={"Description is required"}/>}
                <textarea 
                    className="col-12" 
                    name="description" 
                    id="description"
                /></label>
                <label>Does your property offer self catering? <span>* </span>{formErrors.errors.selfCatering && <ErrorMessage text={"Self catering must be filled out"}/>}
                </label>
                <br/>
                <label className="label__radio">
                    <input 
                        type="radio" 
                        name="selfCatering" 
                        id="true" 
                        value="true"
                    />Yes
                </label>
                <label className="label__radio">
                    <input 
                        type="radio" 
                        name="selfCatering" 
                        id="false" 
                        value="false"
                    />No
                </label>
                <br/>
                <input 
                    type="hidden" 
                    name="id" 
                    id="id" 
                    value={state.id}
                />
                <button className="btn btn--success btn--big" type="submit"><p>Set up property</p></button>
            </form>
            </>
            }
            {/* https://stackoverflow.com/a/30666118 */}
            <iframe name="hiddenframe" className="hidden__frame" title="Hidden frame"/>
        </div>
    )
}