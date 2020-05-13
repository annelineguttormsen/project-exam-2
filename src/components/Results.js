import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ResultsArticle from "./ResultsArticle";

export default function Results() {
    let searchTerm = localStorage.getItem("searchTerm");
    let fromDate = localStorage.getItem("fromDate");
    let toDate = localStorage.getItem("toDate");
    let adults = localStorage.getItem("adults");
    let children = localStorage.getItem("children");

    let [state, setState] = useState({
        establishments: ["peepee","poopoo"]
    });
    let [constantArray,setConstantArray] = useState({
        establishments: []
    });

    function setLS(event, name) {
        let value = event.target.value;
        localStorage.setItem(name,value);
    }

    function filterArray() {
        let query = searchTerm;
        console.log("query er", query);
        let filteredArray = constantArray.establishments;
        console.log("filteredarray før filter: ", filteredArray);
        filteredArray = filteredArray.filter((i)=> {
            if (i.toLowerCase().indexOf(query)!== -1) {
                return i;
            }
        });
        console.log("filtered array etter: ", filteredArray);
        setState({establishments: filteredArray});
    }

    //thank you https://dev.to/shoupn/javascript-fetch-api-and-using-asyncawait-47mp
    async function getEstablishments() {
        let response = await fetch("establishments.json");
        let data = await response.json();
        await setState({establishments : data});
        console.log("state data er nå", state.establishments)
        return data;
    }

    useEffect(
        function() {
            getEstablishments()
                .then(data => console.log(data))
                .then(data =>
                    setState({establishments:data})
                )
                .then(setTimeout(function() {
                    console.log("state data er nå", state.establishments)
                }, 5000));
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