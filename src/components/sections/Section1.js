import React from 'react';
import '../../App.scss';
import '../scss/Section1.scss';

function Section1() {
    return (
        <div className='section1'>
            <div className='hide-for-desktop'>
                <h1>Tried & Tested Space Management Software</h1>
            </div>
            <div className='section1-text'>
                <h1>Tried & Tested Space Management Software</h1>
                <p>Oqulo is a homegrown app that’s been tested by real-life businesses. Whether you operate on a single building or in multiple locations, Oqulo is designed to make your space leasing operations hassle-free.</p>
                <p>Your clients will have a smooth booking & online payment experience, and your concierge staff will be able to view occupancy stats and generate reports at a click of a button.</p>
            </div>
            <div className='section1-img'>
                <img src="/99images/graphic1.png" alt="" />
            </div>
            <div className='hide-for-desktop'>
                <p>Oqulo is a homegrown app that’s been tested by real-life businesses. Whether you operate on a single building or in multiple locations, Oqulo is designed to make your space leasing operations hassle-free.</p>
                <p>Your clients will have a smooth booking & online payment experience, and your concierge staff will be able to view occupancy stats and generate reports at a click of a button.</p>
            </div>
        </div>
    )
}

export default Section1;
