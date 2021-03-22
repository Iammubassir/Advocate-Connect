import React from 'react'
import '../css/Query.css';
import Navbar from "./Navbar";
import Feed from "./Feed";
import Widget from "./Widget";
function Query() {
    return (
        <div className = "query">
            <Navbar />
        <div className = "query_content">
        <Feed />
        <Widget/>
        </div>
    </div>
    )
}

export default Query
