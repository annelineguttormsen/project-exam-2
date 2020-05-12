import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Results() {
    let searchTerm = localStorage.getItem("searchTerm");
    let fromDate = localStorage.getItem("fromDate");
    let toDate = localStorage.getItem("toDate");
    let adults = localStorage.getItem("adults");
    let children = localStorage.getItem("children");

    function setLS(event, name) {
        let value = event.target.value;
        localStorage.setItem(name,value);
    }

    useEffect(
        function() {
            fetch("establishments.json")
            .then(response => response.json())
            .then(response => console.log(response));
            /* .then(function(games){
                setState({games: games});
                setConstantArray({gameArray: games});
            }); */
        }, []
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
                        value={searchTerm}
                        onChange={(event) => setLS(event, "searchTerm")}
                    />
                    <input 
                        className="col-6 small__search__form__input" 
                        type="date" 
                        value={fromDate}
                        onChange={(event) => setLS(event, "fromDate")}
                    />
                    <input 
                        className="col-6 small__search__form__input" 
                        type="date" 
                        value={toDate}
                        onChange={(event) => setLS(event, "toDate")}
                    />
                    <select className="col-5 small__search__form__select" name="Adults" value={adults}>
                        <option value="1">1</option>
                        <option value="2" selected>2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select> 
                    <select className="col-5 small__search__form__select" name="Children" value={children}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select> 
                </form>
            </div>
            <h1>Search results for '{searchTerm}'</h1>
            <div className="col-12 results">
                {/* TODO: ENDRE DETTE TIL Å TILKALLE RESULTSARTICLE */}
                <div className="col-12 results__article">
                    <div className="col-6 results__article__image"></div>
                    <div className="col-6 results__article__desc">
                        <h2>Sunsssset Beach</h2>
                        <p>Get ready for some amazing sunsets as you sip a cocktail and watch dolphins play in the harbour below.</p>
                    </div>
                </div>
            </div>
        </div>
    )  
}