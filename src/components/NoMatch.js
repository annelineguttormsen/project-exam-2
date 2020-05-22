import React from "react";

export default function NoMatch() {
    return (
        <div className="col-6 col-md-8 col-sm-12 nomatch container">
            <h1 className="nomatch__title">404 Not found</h1>
            <p className="nomatch__text">The page you were looking for could not be found. You might have searched for an invalid URL, make sure your URL is typed out correctly.</p>
        </div>
    )
}