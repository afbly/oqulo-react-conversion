import React from 'react';
import '../scss/Footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <img src="/99images/footer-logo.png" alt="" />
                <ul>
                    <li className="nav-item">
                        <Link to="/" class="nav-links">
                            DISCOVER OQULO
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" class="nav-links">
                            FEATURES
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" class="nav-links">
                            CONTACT
                        </Link>
                    </li>
                </ul>
                <p>Copyright © Oqulo 2018. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;
