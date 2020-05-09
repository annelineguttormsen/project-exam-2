import React from "react";

export default function ResultsArticle(props) {
    return (
        <div className="col-12 results__article">
            <div className="col-6 results__article__image"></div>
            <div className="col-6 results__article__desc">
                <h2>{props.establishmentName}</h2>
                <p>${props.price}</p>
                <p>{props.maxGuests}</p>
            </div>
        </div>
    )
}