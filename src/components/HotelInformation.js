import React from "react";
import { 
    useParams,
    useHistory
} from "react-router-dom";

import HotelInformationArticle from "./HotelInformationArticle";
let establishments = require("./establishments.json");

export default function HotelInformation() {
    let { id } = useParams();

    const history = useHistory();

    let hotelId = id.match(/id=(.*)&fromDate/)[1];

    let currentArticle = establishments.find(i =>
        i.id === hotelId);

    if (currentArticle === undefined) {
        history.replace("/404");
        return null
    } else {
        return (
            <div className="col-6 col-md-8 col-sm-12 hotelinformation container">
                <HotelInformationArticle
                    img={currentArticle.imageUrl}
                    title={currentArticle.establishmentName}
                    desc={currentArticle.description}
                    price={currentArticle.price}
                    maxGuests={currentArticle.maxGuests}
                    selfCatering={currentArticle.selfCatering}
                    email={currentArticle.establishmentEmail}
                    // TODO: legg til koordinater
                    id={currentArticle.id}
                />
            </div>
        )
    }
}