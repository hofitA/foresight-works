import React from 'react';

//Style
import './featuresHeader.scss';

function FeaturesHeader(props) {
    return (
        <div className="header-section-features">
            <div className="logo-box">
                <img src={require("../../../covidLogo.jpg")} className="logo"></img>
            </div>
            <span >{props.widgets[0].text} - {props.widgets[0].number}</span>
            <span>{props.widgets[1].text} - {props.widgets[1].number}</span>            
        </div>
    )
}

export default FeaturesHeader
