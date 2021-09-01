import React from 'react';
import '../../App.scss';
import '../scss/Features.scss';


function LeftFeatures() {
    return (
        <div className='features'>
            <div className='feature'>
                <div className='feature-text left-feature'>
                    <h4>Powerful Space Management</h4>
                    <p>
                        Manage meeting room and desk bookings, create events, sell tickets, schedule private office showings, automate invoicing and connect with members --- all in one central dashboard.
                    </p> 
                </div>
                <div className='feature-icon-left'>
                    <img src="/99images/finger-touching-tablet-screen.png" alt="" />
                </div>
            </div>
            <div className='feature'>
                <div className='feature-text left-feature'>
                    <h4>Painless Integration</h4>
                    <p> 
                        No matter what your website is built on, Oqulo is easy to setup and integrate with CRM and payment gateways. Go live in a matter of days.
                    </p> 
                </div>
                <div className='feature-icon-left'>
                    <img src="/99images/hand-graving-smartphone.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default LeftFeatures;
