import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
    function setLS(event, name) {
        let value = event.target.value;
        localStorage.setItem(name,value);
    }

    return (
        <div className="col-12 hero">
            <div className="col-6 col-md-8 col-sm-12 container">
                <h1 className="col-12 hero__title">Your first stop for hotels, cabins and more </h1>
                <form action="/results" method="GET" className="col-12 hero__form">
                    <label>Search</label>
                    <input 
                        className="col-12 hero__form__input" 
                        placeholder="Hotel"
                        name="search"
                        type="text"
                        onChange={(event) => setLS(event, "searchTerm")}
                    />
                    <input 
                        className="col-6 hero__form__input" 
                        placeholder="Date" 
                        name="fromDate"
                        type="date"
                        onChange={(event) => setLS(event, "fromDate")}
                    />
                    <input 
                        className="col-6 hero__form__input" 
                        placeholder="Date" 
                        name="toDate"
                        type="date"
                        onChange={(event) => setLS(event, "toDate")}
                    />
                    <input 
                        className="col-6 hero__form__input" 
                        placeholder="Adults" 
                        name="adults"
                        type="number" 
                        min="1" 
                        max="10"
                        onChange={(event) => setLS(event, "adults")}
                    />
                    <input 
                        className="col-6 hero__form__input" 
                        placeholder="Children" 
                        name="children"
                        type="number" 
                        min="1" 
                        max="10"
                        onChange={(event) => setLS(event, "children")}
                    />
                    <button className="hero__form__btn btn btn--normal btn--big">
                        <p>Search</p>
                    </button>
                </form>
            </div>
        </div>
    )  
}