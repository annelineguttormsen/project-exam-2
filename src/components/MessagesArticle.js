import React from "react";

export default function MessagesArticle(props) {
    return (
        <div className="col-12 messages__article">
            <b>{props.client}</b>
            <p>{props.message}</p>
            <button className="btn btn--normal"><a href={"mailto:" + props.email}>Answer</a></button>
        </div>
    )
}