import React, { Fragment } from 'react';
import FeaturesHeader from '../../components/features/featuresHeader/featuresHeader';
import FeaturesGrid from '../../components/features/featuresGrid/featuresGrid';

// Redux
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectWidgets} from '../../redux/widget/widget.selectores';

// Styles
import './features.scss';

const Features = ({widgets}) => {
    return (
        <Fragment>
            <FeaturesHeader widgets = {widgets}></FeaturesHeader>           
            <FeaturesGrid></FeaturesGrid>
        </Fragment>
    )
}
const mapStateToProps = createStructuredSelector({
    widgets: selectWidgets
})

export default connect (mapStateToProps) (Features) 
