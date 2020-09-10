import React from 'react';
import { Link } from 'react-router-dom';

function Widgets(props) {
    if (props.iscta == "true") {
        return <Link 
        className="header-section__box header-section__box--cta" 
        to={'/features'} >{props.text}</Link>        
    }
    else{
        return (
            <div className="header-section__box">
                <span className ={`headline--${props.id}`}> {props.text} </span>             
                <span>{props.number}</span>
            </div>
        )
    }
}

export default Widgets
