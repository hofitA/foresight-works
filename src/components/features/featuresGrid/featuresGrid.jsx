import React, { Fragment } from 'react';

// Styles
import './featuresGrid.scss';

// Utils
import {getCovidData} from '../../../utils/covid-api';

// Components
import FeaturesInfo from '../featuresInfo/featuresInfo';
import TableRow from '../TableRow/tableRow'

class FeaturesGrid extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            data: {},
            isLoad: false
        };        
    }

    componentDidMount() {
         getCovidData().then(
                (covidData) => this.setState({data: covidData, isLoad: true}, 
                ()=>{console.log(this.state)})
            );               
    }

    render(){
        if(this.state.isLoad){
            return(
                <Fragment>
                    <FeaturesInfo 
                        country= {this.state.data.parameters.country} 
                        day = {this.state.data.parameters.day}></FeaturesInfo>
                    <div className="grid-table">
                        
                            <span className="table-data title">time</span>
                            <span className="table-data title">new deaths</span>
                            <span className="table-data title">total deaths</span>
                            <span className="table-data title">total test</span>
                            <span className="table-data title">active</span>
                            <span className="table-data title">critical</span>                            
                    </div> 
                    
                        {this.state.data.response.map((row, index) =>{
                            return <TableRow 
                                data= {row} 
                                key={index}></TableRow>
                        })}
                 
                        
                </Fragment>
            )
        }
        else{
            return null;
        }
    }
}

export default FeaturesGrid
