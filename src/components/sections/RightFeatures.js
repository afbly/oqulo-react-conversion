import React from 'react';
import '../../App.scss';
import '../scss/RightFeatures.scss';


function RightFeatures() {
    return (
        <div className='right-features'>
            <div className='feature'>
                <div className='feature-icon-right'>
                    <img src="/99images/mobile-application.png" alt="" />
                </div>
                <div className='feature-text'>
                    <h4>User-Friendly Interface</h4>
                    <p>
                        Clients will find it easy to book and pay for their space, thanks to Oqulo’s easy navigation and pixel-perfect design. Keep members up to date with Oqulo’s community board and help desk features.
                    </p> 
                </div>
            </div>
            <div className='feature'>
                <div className='feature-icon-right'>
                    <img src="/99images/smartphone-blocked.png" alt="" />
                </div>
                <div className='feature-text'>
                    <h4>Secure Data & White Label Branding</h4>
                    <p> 
                        Get peace of mind in knowing that client information and sales data are stored in a secure server. Our white label service allows you to market this platform as your own.
                    </p> 
                </div>
            </div>
        </div>
    )
}

export default RightFeatures;
