import React from "react";
import { Link, useParams } from "react-router-dom";

import HotelInformationArticle from "./HotelInformationArticle";
let establishments = require("./establishments.json");

export default function HotelInformation() {
    let { id } = useParams();
    console.log(id);

    let currentArticle = establishments.find(i =>
        i.id == id);
    console.log(currentArticle);
    return (
        <div className="col-6 col-md-8 col-sm-12 hotelinformation container">
            <div className="col-12 breadcrumbs">
                <ul>
                    <li className="breadcrumbs__link"><Link to="/">Home</Link></li><span>></span>
                    <li className="breadcrumbs__link"><Link to="/hotelinformation">Hotel information</Link></li>
                </ul>
            </div>
            <HotelInformationArticle
                img={currentArticle.imageUrl}
                title={currentArticle.establishmentName}
                desc={currentArticle.description}
                price={currentArticle.price}
                maxGuests={currentArticle.maxGuests}
                selfCatering={currentArticle.selfCatering}
                email={currentArticle.establishmentEmail}
            />
        </div>
    )
}