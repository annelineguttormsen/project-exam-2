import React from "react";
import { Link } from "react-router-dom";

import HotelInformationArticle from "./HotelInformationArticle";

export default function HotelInformation() {
    return (
        <div className="col-6 col-md-8 col-sm-12 hotelinformation container">
            <div className="col-12 breadcrumbs">
                <ul>
                    <li className="breadcrumbs__link"><Link to="/">Home</Link></li><span>></span>
                    <li className="breadcrumbs__link"><Link to="/hotelinformation">Hotel information</Link></li>
                </ul>
            </div>
            <HotelInformationArticle
                img="https://images.unsplash.com/photo-1439130490301-25e322d88054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
                title="Sunsssset Beach"
                desc="Get ready for some amazing sunsets as you sip a cocktail and watch dolphins play in the harbour below."
                price="85"
                maxGuests="18"
                selfCatering={true}
                email="info@sunsetbeach.com"
            />
        </div>
    )
}