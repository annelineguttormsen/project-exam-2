import React from "react";

export default function Hero() {
    return (
        <div className="col-12 hero">
            <div className="col-6 col-md-8 col-sm-12 container">
                <h1 className="col-12 hero__title">Your first stop for hotels, cabins and more </h1>
                <form className="col-12 hero__form">
                    <input className="col-12 hero__form__input" placeholder="Hotel" type="text"/>
                    <input className="col-6 hero__form__input" placeholder="Date" type="date"/>
                    <input className="col-6 hero__form__input" placeholder="Date" type="date"/>
                    <input className="col-6 hero__form__input" placeholder="Adults" type="number" min="1" max="10"/>
                    <input className="col-6 hero__form__input" placeholder="Children" type="number" min="1" max="10"/>
                    <button className="hero__form__btn btn btn--normal btn--big"><p>Search</p></button>
                </form>
            </div>
        </div>
    )  
}