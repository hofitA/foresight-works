import {FlexibleXYPlot, XAxis, YAxis, VerticalRectSeries} from 'react-vis';
import React from 'react'

//Style
import "../../abstracts/variables.scss";
import '../chart/chart.scss';


function Chart() {
    const myData = [
        {x: 1, x0: 0, y: 10, y0: 0},
        {x: 2, x0: 1, y: 5, y0: 0},
        {x: 4, x0: 2, y: 15, y0: 0}
    ]
    const xRange = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className="char-section">
            <FlexibleXYPlot xType="ordinal" height={300} xDistance={50} xDomain={xRange}>                
                <YAxis />
                <XAxis />
                <VerticalRectSeries
                    fill="#B5739D"
                    stroke="#B5739D" 
                    data={[
                        {x: 2, x0: 1, y: 5, y0: 0},
                        {x: 5, x0: 3, y: 15, y0: 0}
                    ]}/>
                <VerticalRectSeries 
                    fill= "#0066CC"
                    stroke= "#0066CC"
                    data={[
                        {x: 8, x0: 6, y: 10, y0: 0}                        
                    ]}/>
                
            </FlexibleXYPlot>
        </div>
    )
}

export default Chart
