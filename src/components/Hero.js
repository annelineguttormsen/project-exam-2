import React from "react";

export default function Hero() {
    return (
        <div className="col-12 hero">
            <div className="col-6 container">
                <h1 className="col-12 hero__title">Your first stop for hotels, cabins and more </h1>
                <form className="col-12 hero__form">
                    <input className="col-12 hero__form__input" placeholder="Hotel name" type="text"/>
                    <input className="col-12 hero__form__input" type="text"/>
                    <select className="col-5 hero__form__select" name="Adults">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select> 
                    <select className="col-5 hero__form__select" name="Children">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select> 
                    <button className="hero__form__btn btn btn--normal">Search</button>
                </form>
            </div>
        </div>
    )  
}