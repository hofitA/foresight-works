import React from 'react'

// Style
import './featuresInfo.scss'; 

function FeaturesInfo(props) {
    return (
        <div className="info-section">
            <h1 className="title">COVID-19 History Page</h1>
            <div className="sub-title">
                <span>Country: {props.country}</span> 
                <span>Day: {props.day}</span>
            </div>
        </div>
    )
}

export default FeaturesInfo
