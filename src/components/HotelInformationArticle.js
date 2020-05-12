import React from "react";

export default function HotelInformationArticle(props) {
    return (
        <div className="hotelinformation__article">
            <h1 className="hotelinformation__article__title">{props.title}</h1>
            <img className="col-12 hotelinformation__article__image" src={props.img} alt={props.title}/>
            <p className="hotelinformation__article__text">{props.desc}</p>
            {props.selfCatering && (<p className="hotelinformation__article__text">This property offers self catering.</p>)}
            <p className="hotelinformation__article__text"><b>Price:</b> ${props.price} (USD)</p>
            <p className="hotelinformation__article__text"><b>Maximum number of guests:</b> {props.maxGuests}</p>
            <p className="hotelinformation__article__text"><b>Establishment e-mail:</b> {props.email}</p>
            <iframe title="Map" id="map" className="col-12" height="350" scrolling="no" src="https://www.openstreetmap.org/export/embed.html?bbox=5.2155232429504395%2C60.38742995799174%2C5.243847370147706%2C60.397087799856465&amp;layer=mapnik&amp;marker=60.39225923702232%2C5.229685306549072"/>
        </div>
    )
}