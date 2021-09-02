import React from 'react';
import '../../App.scss';
import { Button } from '../sections/Button';
import '../scss/HeroSection.scss';

function HeroSection() {


    return (
        <div className='hero'>
            <div className='hero-background'>

            </div>
            <div className='hero-container'>
                <div className='hero-image'>
                    <img src="/99images/iPhone7.png" alt="iPhone7"/>
                </div>
                <div className='hero-cta'>
                    <h1>The Only Platform You'll Need to Run Smart Coworking Spaces & Serviced Offices</h1>
                    <p className='description'>Oqulo is built to sell, manage and grow your commercial real estate business.
                    Collect payments, manage clients and run reports using our booking app. 
                    Engage members using our community messaging feature.</p>
                    <p className='description'>Be the first in line to take Oqulo for a test drive!</p>
                    <form className='hero-form' action=''>
                        <input type='textbox' placeholder='Enter email address'></input>
                        <Button className='hero-button' buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log("Working")}>
                            NOTIFY ME
                        </Button>
                    </form>
                    <p className='no-spam'>*No spam, that's a promise.</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
