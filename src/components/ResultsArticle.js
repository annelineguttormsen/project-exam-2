import React from "react";
import { Link } from "react-router-dom";

export default function ResultsArticle(props) {
    const articleBackground = {
        background: "url(" + props.img + ")no-repeat center center",
        backgroundSize: "cover"
    };

    const articleUrl = "/hotelinformation/id=" + props.id + props.url;

    return (
        <div className="col-12 results__article">
            <div className="col-6 col-xs-12 results__article__image"
                style={articleBackground}>
            </div>
            <div className="col-6 col-xs-12 results__article__desc">
                <h2>{props.establishmentName}</h2>
                <p>Price: ${props.price}</p>
                <p>Max number of guests: {props.maxGuests}</p>
                <button className="col-12 btn btn--success">
                    <Link to={articleUrl}>See offer</Link>
                </button>
            </div>
        </div>
    )
}