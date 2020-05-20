import React from "react";
import { Link } from "react-router-dom";

export default function ResultsArticle(props) {
    const articleBackground = {
        background: "url(" + props.img + ")no-repeat center center",
        backgroundSize: "cover"
    };

    return (
        <div className="col-12 results__article">
            <div className="col-6 results__article__image"
                style={articleBackground}>
            </div>
            <div className="col-6 results__article__desc">
                <h2>{props.establishmentName}</h2>
                <p>Price: ${props.price}</p>
                <p>Max number of guests: {props.maxGuests}</p>
                <button className="btn btn--success">
                    <Link to={props.id}>See offer</Link>
                </button>
            </div>
        </div>
    )
}