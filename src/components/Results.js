import React from "react";
import { Link } from "react-router-dom";

export default function Results() {
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
                    <input className="col-12 small__search__form__input" type="text" placeholder="Hotel"/>
                    <input className="col-12 small__search__form__input" type="text"/>
                    <select className="col-5 small__search__form__select" name="Adults">
                        <option value="1">1</option>
                        <option value="2" selected>2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select> 
                    <select className="col-5 small__search__form__select" name="Children">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select> 
                </form>
            </div>
            <h1>Search results</h1>
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