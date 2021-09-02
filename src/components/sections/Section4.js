import React from 'react';
import '../scss/Section4.scss';
import { Button } from '../sections/Button';

function Section4() {
    return (
        <div className='section4'>
            <div className='section4-content'>
                <h4>Launching Soon</h4>
                <h3>Sign up to get updates on Oqulo’s public release.</h3>
                <form action=''>
                    <input type='textbox' placeholder='Enter email address'></input>
                    <Button className='footer-button' buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log("Working")}>
                        TRY THE BETA
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Section4;
