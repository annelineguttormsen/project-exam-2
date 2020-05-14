import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
    let [state, setState] = useState({
        data: {
            search: "Sunsssset Beach",
            fromDate: "2020-05-02",
            toDate: "2020-05-20",
            adults: 2,
            children: 1,
            url: "/results/search=Sunsssset_Beach&fromDate=2020-05-20&toDate=2020-05-20&adults=2&children=1"
        }
    });

    //dette er det styggeste jeg har gjort se vekk
    function updateInput(event, index) {
        //hent verdien inni input som tilkaller funksjonen
        let value = event.target.value;

        //kopier nåværende state objekt
        //finn indexen til input som har tilkalt funksjonen
        //deretter oppdater state.data kopien sin verdi
        //(variabel heter det samme slik at objektet i state alltid heter data)
        //https://stackoverflow.com/a/49502115
        let data = state.data;
        data[index] = value;

        //oppdater samtidig URLen i data objektet
        data["url"] = ("/results/search=" + data["search"]
            + "&fromDate=" + data["fromDate"]
            + "&toDate=" + data["toDate"]
            + "&adults=" + data["adults"]
            + "&children=" + data["children"]);
        
        console.log("kopi av state er ", data);

        //oppdater state deretter state
        setState({data: data});

        localStorage.setItem(event,index);
    }

    //blir tilkalt hver gang hero rerendres
    console.log(state);

    //TODO: hent dagen i dag og putt den i date input
    //må være i YYYY-MM-DD

    return (
        <div className="col-12 hero">
            <div className="col-6 col-md-8 col-sm-12 container">
                <h1 className="col-12 hero__title">Your first stop for hotels, cabins and more </h1>
                <form /*onSubmit={handleSubmit}*/ className="col-12 hero__form">
                    <label>Search</label>
                    <input 
                        className="col-12 hero__form__input" 
                        placeholder="Hotel"
                        name="search"
                        type="text"
                        defaultValue={state.data["search"]}
                        onChange={(event) => updateInput(event, "search")}
                    />
                    <input 
                        className="col-6 hero__form__input" 
                        placeholder="Date" 
                        name="fromDate"
                        type="date"
                        defaultValue= {state.data["fromDate"]}
                        onChange={(event) => updateInput(event, "fromDate")}
                    />
                    <input 
                        className="col-6 hero__form__input" 
                        placeholder="Date" 
                        name="toDate"
                        type="date"
                        defaultValue= {state.data["toDate"]}
                        onChange={(event) => updateInput(event, "toDate")}
                    />
                    <input 
                        className="col-6 hero__form__input" 
                        placeholder="Adults" 
                        name="adults"
                        type="number" 
                        defaultValue={state.data["adults"]}
                        min="1" 
                        max="10"
                        onChange={(event) => updateInput(event, "adults")}
                    />
                    <input 
                        className="col-6 hero__form__input" 
                        placeholder="Children" 
                        name="children"
                        defaultValue={state.data["children"]}
                        type="number" 
                        min="1" 
                        max="10"
                        onChange={(event) => updateInput(event, "children")}
                    />
                    <button className="hero__form__btn btn btn--normal btn--big">
                        <Link to={state.data["url"]}>Search</Link>
                    </button>
                </form>
            </div>
        </div>
    )  
}