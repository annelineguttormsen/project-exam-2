import React, {
    useEffect,
    useState
} from "react";
import { 
    useParams,
    useHistory
} from "react-router-dom";

import HotelInformationArticle from "./HotelInformationArticle";
let establishments = require("./establishments.json");

export default function HotelInformation() {
    let { id } = useParams();
    const [state, setState] = useState({
        establishment: []
    });

    const history = useHistory();

    let hotelId = id.match(/id=(.*)&fromDate/)[1];

    useEffect(
        function() {
            fetch("/establishments.json")
            .then(response => response.json())
            .then(responseJSON => {
                let currentArticle = responseJSON.find(i => 
                    i.id === hotelId
                );
                if (currentArticle === undefined) {
                    history.replace("/404");
                }
                setState({establishment: currentArticle});
            })
            .catch(function(err) {
                console.log("noe gikk galt", err);
            });
        }, []
    );

    return (
        <div className="col-6 col-md-8 col-sm-12 hotelinformation container">
            <HotelInformationArticle
                img={state.establishment.imageUrl}
                title={state.establishment.establishmentName}
                desc={state.establishment.description}
                price={state.establishment.price}
                maxGuests={state.establishment.maxGuests}
                selfCatering={state.establishment.selfCatering}
                email={state.establishment.establishmentEmail}
                // TODO: legg til koordinater
                id={state.establishment.id}
            />
        </div>
    )
}