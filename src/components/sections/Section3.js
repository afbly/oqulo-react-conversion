import React from 'react';
import '../../App.scss';
import '../scss/Section3.scss';
import BarGraph from './BarGraph';

function Section3() {
    return (
        <div className='section3'>
            <div className='section3-content'>
                <div className='section3-header-container'>
                    <h1>Stats Delivered Beautifully</h1>
                    <p>View sales charts, booking ratio and user behavior using Oqulo’s visual reporting feature.</p>
                </div>
                <div className='section3-content-container'>
                    <BarGraph/>
                </div>
            </div>
        </div>
    )
}

export default Section3;
