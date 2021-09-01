import React from 'react';
import '../../App.scss';
import '../scss/Section2.scss';
import LeftFeatures from './LeftFeatures';
import RightFeatures from './RightFeatures'; 

function Section2C1() {
    return (
        <div>
            <div className='section2-header-container content1'>
                <h1>Oqulo Features at a Glance</h1>
                <p>Powerful functionalities that changes the way you do business.</p>
            </div>
            <div className='section2-content1-container'>
                <LeftFeatures/>
                <div className='section2-img'><img src="/99images/screen.png" alt="" /></div>
                <RightFeatures/>
            </div>        
        </div>
    )
}

export default Section2C1;
