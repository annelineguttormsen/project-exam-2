import React, { useState, useEffect } from "react";
import { 
    Link,
    useParams
} from "react-router-dom";

import ResultsArticle from "./ResultsArticle";
let establishments = require("./establishments.json");

export default function Results() {
    console.log("establishments filen", establishments);

    let { id } = useParams();

    let search = id.match(/search=(.*)&fromDate/)[1];
    //bytt _ til mellomrom
    search = search.replace(/_/g, " ");
    let fromDate = id.match(/fromDate=(.*)&toDate/)[1];
    let toDate = id.match(/toDate=(.*)&adults/)[1];
    let adults = id.match(/adults=(.*)&children/)[1];
    let children = id.match(/children=(.*)/)[1];

    let [state, setState] = useState({
        establishments: []
    });
    
    console.log("state data", state);

    function setLS(event, name) {
        let value = event.target.value;
        localStorage.setItem(name,value);
    }

    function filterArray() {
        let filteredArray = establishments;
        console.log("filteredarray før filter: ", filteredArray);
        filteredArray = filteredArray.filter((i) => {
            if (i.establishmentName.toLowerCase().indexOf(search.toLowerCase())!== -1) {
                return i;
            }
        });
        console.log("filtered array etter: ", filteredArray);
        setState({establishments: filteredArray});
    }

    useEffect( 
        function() {
            setState({data: establishments});
            console.log("state er nå ", state.establishments);
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
                        defaultValue={search}
                        onChange={(event) => setLS(event, "search")}
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
                    /><button
                        type="submit"
                        className="col-2 btn btn--normal btn--search"
                    ></button>
                </form>
            </div>
            <h1>Search results for '{search}'</h1>
            <div className="col-12 results">
                {
                    state.establishments.map(
                        i => <ResultsArticle
                            establishmentName={i.establishmentName}
                            price={i.price}
                            maxGuests={i.maxGuests}
                            img={i.imageUrl}
                            id={i.id}
                        />
                    )
                }
            </div>
        </div>
    )  
}