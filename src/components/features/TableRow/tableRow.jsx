import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

// Styles
import './tableRow.scss';


function getTime(){
    let date= new Date();
    return date.getHours().toString() + ":" + date.getMinutes().toString()
}

function TableRow(props) {
    return (
            
            <Link className="grid-row" to={{pathname: '/details', state: props.data.cases.recovered }}> 
                <span className="table-data">{getTime()}</span>
                <span className="table-data">{props.data.deaths.new}</span>
                <span className="table-data">{props.data.deaths.total}</span>
                <span className="table-data">{props.data.tests.total}</span>
                <span className="table-data">{props.data.cases.active}</span>
                <span className="table-data">{props.data.cases.critical}</span>
            </Link>
            
            
        
    )
}

export default TableRow
