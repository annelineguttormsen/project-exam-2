import React, { useState, useEffect } from "react";
import { 
    Link,
    useParams
} from "react-router-dom";

import ResultsArticle from "./ResultsArticle";

export default function Results() {
    let establishments = require("./establishments.json");
    console.log(establishments);

    let { id } = useParams();
    console.log("parametre for siden er ", id);

    let searchTerm = id.match(/search=(.*)&&fromDate/)[1];
    let fromDate = id.match(/fromDate=(.*)&&toDate/)[1];
    let toDate = id.match(/toDate=(.*)&&adults/)[1];
    let adults = id.match(/adults=(.*)&&children/)[1];
    let children = id.match(/children=(.*)/)[1];
    console.log(searchTerm, fromDate, toDate, adults, children);

    let [state, setState] = useState({
        establishments: []
    });

    function setLS(event, name) {
        let value = event.target.value;
        localStorage.setItem(name,value);
    }

    function filterArray() {
        let filteredArray = establishments;
        console.log("filteredarray før filter: ", filteredArray);
        filteredArray = filteredArray.filter((i) => {
            if (i.establishmentName.toLowerCase().indexOf(searchTerm)!== -1) {
                return i;
            }
        });
        console.log("filtered array etter: ", filteredArray);
        setState({establishments: filteredArray});
    }

    useEffect( 
        function() {
            filterArray();
        },[]
    ); 

    return (
        <div className="col-6 col-md-8 col-sm-12 container">
            <div className="col-12 breadcrumbs">
                <ul>
                    <li className="breadcrumbs__link"><Link to="/">Home</Link></li><span>></span>
                    <li className="breadcrumbs__link"><Link to="/results">Search results</Link></li>
                </ul>
            </div>
            <div className="col-12 small__search">
                <form className="col-12 small__search__form">
                    <input 
                        className="col-12 small__search__form__input"  
                        type="text" 
                        placeholder="Hotel" 
                        defaultValue={searchTerm}
                        onChange={(event) => setLS(event, "searchTerm")}
                    />
                    <input 
                        className="col-6 small__search__form__input" 
                        type="date" 
                        defaultValue={fromDate}
                        onChange={(event) => setLS(event, "fromDate")}
                    />
                    <input 
                        className="col-6 small__search__form__input" 
                        type="date" 
                        defaultValue={toDate}
                        onChange={(event) => setLS(event, "toDate")}
                    />
                    <input 
                        className="col-5 small__search__form__select" 
                        type="number"
                        name="Adults"
                        min="1"
                        max="10"
                        defaultValue={adults}
                    />
                    <input 
                        className="col-5 small__search__form__select" 
                        type="number"
                        name="Children"
                        min="1"
                        max="10"
                        defaultValue={children}
                    />
                </form>
            </div>
            <h1>Search results for '{searchTerm}'</h1>
            <div className="col-12 results">
                {/*
                    state.establishments.map(
                        i => <ResultsArticle
                            establishmentName={i.establishmentName}
                            price={i.price}
                            maxGuests={i.maxGuests}
                        />
                    )
                */}
            </div>
        </div>
    )  
}