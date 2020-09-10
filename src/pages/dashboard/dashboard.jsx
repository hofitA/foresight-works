import React from 'react';
import Widgets from '../../components/widgets/widgets'
import Chart from '../../components/chart/chart'

// Redux
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectWidgets} from '../../redux/widget/widget.selectores';

// Styles
import './dashboard.scss';
import '../../components/widgets/widgets.scss'

const Dashboard = ({widgets}) => {
    console.log(widgets);
    return (
        <div>
            <div className="header-section">
                {widgets.map ((element) =>{
                    return <Widgets                          
                        text={element.text} 
                        number={element.number}
                        iscta= {element.isCTA}
                        id= {element.id}
                        key={element.id}>
                    </Widgets>
                })}
            </div>
            <Chart></Chart>
            <div className="footer-logo">
                <img src={require("../../covidLogo.jpg")} className="logo"></img>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    widgets: selectWidgets
})

export default connect(mapStateToProps)(Dashboard)
