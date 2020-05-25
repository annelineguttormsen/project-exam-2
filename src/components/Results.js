import React, {
    useState, 
    useEffect 
} from "react";
import { 
    Link,
    useParams,
    useHistory
} from "react-router-dom";

import ResultsArticle from "./ResultsArticle";
import searchIcon from "./../search.svg";

export default function Results() {
    //hent parametre fra url og history fra react router dom 
    let { id } = useParams();
    const history = useHistory();

    //globale variabler for params fra urlen
    let search, fromDate, toDate, adults, children, url, cleanedUrl, constEstablishments;

    //hvis ingen av disse matcher så redirectes siden til 404
    try {
        search = id.match(/search=(.*)&fromDate/)[1];
        //bytt _ til mellomrom
        search = search.replace(/_/g, " ");
        fromDate = id.match(/fromDate=(.*)&toDate/)[1];
        toDate = id.match(/toDate=(.*)&adults/)[1];
        adults = id.match(/adults=(.*)&children/)[1];
        children = id.match(/children=(.*)/)[1];
        url = "/results/" + id;
        cleanedUrl = id.match(/&(.*)&adults/)[1];
        cleanedUrl = "&" + cleanedUrl;
    } catch(err) {
        history.replace("/404");
    }

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
            url,
            cleanedUrl
        }
    });
    
    //filtrer array basert på search i state.data
    //deretter oppdater establishmentdata som oppdaterer resultsarticles
    function filterArray() {
        let filteredArray = constEstablishments;
        filteredArray = filteredArray.filter((i) => {
            if (i.establishmentName.toLowerCase().indexOf(urlState.data["search"].toLowerCase())!== -1) {
                return i;
            }
        });
        let adultsToNumber = parseInt(urlState.data["adults"]);
        let childrenToNumber = parseInt(urlState.data["children"]);
        console.log(adultsToNumber + childrenToNumber);
        filteredArray = filteredArray.filter((i) => {
            if (i.maxGuests >= (adultsToNumber + childrenToNumber)) {
                return i;
            }
        });
        setState({establishmentData: filteredArray});
    }

    //samme som på hero komponentet
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
        //cleaned url for results article, trenger ikke adults eller
        data["cleanedUrl"] = ("&fromDate=" + data["fromDate"]
            + "&toDate=" + data["toDate"]);
        
        urlSetState({data: data});
        localStorage.setItem(event,index);
    }

    console.log("cleaned url nå", urlState.data["cleanedUrl"]);
    useEffect( 
        function() {
            fetch("/establishments.json")
            .then(response => response.json())
            .then(responseJSON => {
                constEstablishments = responseJSON;
            })
            .then(()=> {
                try {
                    filterArray();
                } catch {
                    history.replace("/404");
                }
            })
            .catch(function(err) {
                console.log("noe gikk galt", err);
            });
            //hvis search er tom || undefined så redirect til 404
        },[]
    );

    //gå gjennom alle params for å sjekke om noen er tomme eller undefined
    //ved error redirect til 404
    let paramsArray = [search,fromDate,toDate,adults,children,url];
    let checkParams = paramsArray.find(i => 
        i === undefined || i === ""
    );

    if (checkParams !== undefined) {
        history.replace("/404");
        return null
    } else {
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
                        />
                        <button
                            type="submit"
                            className="btn btn--normal btn--search"
                            onClick={filterArray}
                        >
                            <Link to={urlState.data["url"]}>
                                <img 
                                    src={searchIcon}
                                    alt="Search icon"
                                />
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
                                url={urlState.data["cleanedUrl"]}
                                id={i.id}
                            />
                        )
                    }
                </div>
            </div>
        ) 
    }
}