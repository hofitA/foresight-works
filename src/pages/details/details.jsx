import React from 'react';


//Styles
import './detalis.scss';

const Details = (props) => {
    return (
        <div className="details">
             <strong> Recoverd: </strong> {props.location.state}
        </div>
    )
}

export default Details
