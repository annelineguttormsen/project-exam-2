import React from "react";

export default function EnquiriesArticle(props) {
    return (
        <div className="col-12 enquiries__article">
            <p><b>Property: </b>{props.property}</p>
            <p><b>Client: </b>{props.client}</p>
            <p><b>E-mail: </b>{props.email}</p>
            <p><b>Check-in: </b>{props.checkin}</p>
            <p><b>Check-out: </b>{props.checkout}</p>
        </div>
    )
}