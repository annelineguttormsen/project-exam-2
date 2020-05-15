import React from "react";

export default function EnquiriesArticle(props) {
    return (
        <table className="col-12 enquiries__article">
            <tr>
                <td><b>Property</b></td>
                <td>{props.property}</td>
            </tr>
            <tr>
                <td><b>Client</b></td>
                <td>{props.client}</td>
            </tr>
            <tr>
                <td><b>E-mail</b></td>
                <td>{props.email}</td>
            </tr>
            <tr>
                <td><b>Check-in</b></td>
                <td>{props.checkin}</td>
            </tr>
            <tr>
                <td><b>Check-out</b></td>
                <td>{props.checkout}</td>
            </tr>
        </table>
    )
}