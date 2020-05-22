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
        background: "url(" + props.img + ")no-repeat center center",
        backgroundSize: "cover"
    };

    let hotelId, fromDate, toDate;

    try {
        hotelId = id.match(/id=(.*)&fromDate/)[1];
        fromDate = id.match(/fromDate=(.*)&toDate/)[1];
        toDate = id.match(/toDate=(.*)/)[1];
    } catch(err) {
        history.replace("/404");
    }
    console.log(toDate);

    console.log(id);
    return (
        <>
        <div className="col-12 breadcrumbs">
            <ul>
                <li className="breadcrumbs__link"><Link to="/">Home</Link></li><span>></span>
                <li className="breadcrumbs__link"><Link to={id}>Hotel information</Link></li>
            </ul>
        </div>
        <div className="hotelinformation__article">
            <h1 className="hotelinformation__article__title">{props.title}</h1>
            <div className="hotelinformation__article__image"
                style={articleBackground}/>
            <p className="hotelinformation__article__text">{props.desc}</p>
            {props.selfCatering && (<p className="hotelinformation__article__text">This property offers self catering.</p>)}
            <p className="hotelinformation__article__text"><b>Price:</b> ${props.price} (USD)</p>
            <p className="hotelinformation__article__text"><b>Maximum number of guests:</b> {props.maxGuests}</p>
            <p className="hotelinformation__article__text"><b>Establishment e-mail:</b> <a href={props.email}>{props.email}</a></p>
            <iframe title="Map" id="map" className="col-12" height="350" scrolling="no" src="https://www.openstreetmap.org/export/embed.html?bbox=5.2155232429504395%2C60.38742995799174%2C5.243847370147706%2C60.397087799856465&amp;layer=mapnik&amp;marker=60.39225923702232%2C5.229685306549072"/>
            <button className="btn btn--success btn--big">
                <Link to={"/makeenquiry/" + id}>Reserve</Link>
            </button>
        </div>
        </>
    )
}