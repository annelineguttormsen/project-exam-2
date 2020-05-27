import React from "react";
import { 
    Link,
    useParams,
    useHistory
} from "react-router-dom";

export default function HotelInformationArticle(props) {
    let { id } = useParams();
    const history = useHistory();

    const articleBackground = {
        background: "url(" + props.img + ")center center / cover no-repeat"
    };

    let hotelId, fromDate, toDate;

    try {
        hotelId = id.match(/id=(.*)&fromDate/)[1];
        fromDate = id.match(/fromDate=(.*)&toDate/)[1];
        toDate = id.match(/toDate=(.*)/)[1];
    } catch(err) {
        history.replace("/404");
    }

    let opsUrl = "http://www.openstreetmap.org/export/embed.html?bbox=" + props.long + "%2C" + props.lat + "%2C" + props.long + "%2C" + props.lat + "&amp;layer=mapnik&amp;marker=" + (props.lat + 1) + "%2C" + (props.long + 1);

    return (
        <>
        <div className="col-12 breadcrumbs">
            <ul>
                <li className="breadcrumbs__link"><Link to="/">Home</Link></li><span>></span>
                <li className="breadcrumbs__link"><Link to={"/results/search="+ props.searchParam + "&fromDate=" + fromDate + "&toDate=" + toDate + "&adults=2&children=1"}>Search results</Link></li><span>></span>
                <li className="breadcrumbs__link"><Link to={id}>Hotel information</Link></li>
            </ul>
        </div>
        <div className="hotelinformation__article">
            <h1 className="hotelinformation__article__title">{props.title}</h1>
            <div className="hotelinformation__article__image"
                style={articleBackground}/>
            <p className="hotelinformation__article__text">{props.desc}</p>
            {/* hvis eiendom har self catering skal denne teksten si i fra om det */}
            {props.selfCatering==="true" && (<p className="hotelinformation__article__text"><i>This property offers self catering.</i></p>)}
            <p className="hotelinformation__article__text">
                <b>Price:</b> ${props.price} (USD)
            </p>
            <p className="hotelinformation__article__text">
                <b>Maximum number of guests:</b> {props.maxGuests}
            </p>
            <p className="hotelinformation__article__text">
                <b>Establishment e-mail:</b> <a href={props.email}>{props.email}</a>
            </p>
            <iframe 
                title="Map" 
                id="map" 
                className="col-12" 
                height="350" 
                scrolling="no" 
                src={opsUrl}
            />
            <button className="btn btn--success btn--big">
                <Link to={"/makeenquiry/" + id}>Reserve</Link>
            </button>
        </div>
        </>
    )
}