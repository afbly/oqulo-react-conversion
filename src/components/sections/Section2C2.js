import React from 'react';
import '../../App.scss';
import '../scss/Section2.scss';
import BarGraph from './BarGraph';

function Section2C2() {
    return (
        <div>
            <div className='section2-header-container'>
                <h1>Stats Delivered Beautifully</h1>
                <p>View sales charts, booking ratio and user behavior using Oqulo’s visual reporting feature.</p>
            </div>
            <div className='section2-content1-container'>
                <BarGraph/>
            </div>
        </div>
    )
}

export default Section2C2;
