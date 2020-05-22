import React, { useState, useEffect } from "react";
import { 
    Link,
    useParams
} from "react-router-dom";
import { useForm } from "react-hook-form";

import ResultsArticle from "./ResultsArticle";
import searchIcon from "./../search.svg";
let establishments = require("./establishments.json");

export default function Results() {
    let { id } = useParams();

    let search = id.match(/search=(.*)&fromDate/)[1];
    //bytt _ til mellomrom
    search = search.replace(/_/g, " ");
    let fromDate = id.match(/fromDate=(.*)&toDate/)[1];
    let toDate = id.match(/toDate=(.*)&adults/)[1];
    let adults = id.match(/adults=(.*)&children/)[1];
    let children = id.match(/children=(.*)/)[1];
    let url = "/results/" + id;

    let [state, setState] = useState({
        establishmentData: []
    });
    let [urlState, urlSetState] = useState({
        data: {
            search,
            fromDate,
            toDate,
            adults,
            children,
            url
        }
    });
    
    console.log("state data", state, urlState);

    function filterArray() {
        let filteredArray = establishments;
        filteredArray = filteredArray.filter((i) => {
            if (i.establishmentName.toLowerCase().indexOf(urlState.data["search"].toLowerCase())!== -1) {
                return i;
            }
        });
        setState({establishmentData: filteredArray});
    }

    function updateInput(event, index) {
        let value = event.target.value;
        value = value.replace(/ /g,"_");

        //https://stackoverflow.com/a/49502115
        let data = urlState.data;
        data[index] = value;

        data["url"] = ("/results/search=" + data["search"]
            + "&fromDate=" + data["fromDate"]
            + "&toDate=" + data["toDate"]
            + "&adults=" + data["adults"]
            + "&children=" + data["children"]);
        
        urlSetState({data: data});

        localStorage.setItem(event,index);
    }

    useEffect( 
        function() {
            setState({establishmentData: establishments});
            setState({data: "ay"});
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
                <form 
                    className="col-12 small__search__form"
                    onSubmit ={filterArray}
                >
                    <input 
                        className="col-12 small__search__form__input"  
                        type="text" 
                        placeholder="Hotel" 
                        defaultValue={search}
                        onChange={(event) => updateInput(event, "search")}
                    />
                    <input 
                        className="col-6 small__search__form__input" 
                        type="date" 
                        defaultValue={fromDate}
                        onChange={(event) => updateInput(event, "fromDate")}
                    />
                    <input 
                        className="col-6 small__search__form__input" 
                        type="date" 
                        defaultValue={toDate}
                        onChange={(event) => updateInput(event, "toDate")}
                    />
                    <input 
                        className="col-5 small__search__form__select" 
                        type="number"
                        name="Adults"
                        min="1"
                        max="10"
                        defaultValue={adults}
                        onChange={(event) => updateInput(event, "adults")}
                    />
                    <input 
                        className="col-5 small__search__form__select" 
                        type="number"
                        name="Children"
                        min="1"
                        max="10"
                        defaultValue={children}
                        onChange={(event) => updateInput(event, "children")}
                    /><button
                        type="submit"
                        className="btn btn--normal btn--search"
                        onClick={filterArray}
                    >
                        <Link to={urlState.data["url"]}>
                            <img src={searchIcon}/>
                        </Link>
                    </button>
                </form>
            </div>
            <h1>Search results for '{search}'</h1>
            <div className="col-12 results">
                {
                    state.establishmentData.map(
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