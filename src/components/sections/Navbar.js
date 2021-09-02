import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "../scss/Navbar.scss";
import "../../App.scss"

function Navbar() {
    
    const [isClicked, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!isClicked);
    const closeMobileMenu = () => setClick(false);

    const changeBackground = () => {
        if (window.scrollY >= 70) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground)

    return ( 
        <>
            <nav className={navbar ? 'navbar scrolled' : 'navbar on-top' && isClicked ? 'navbar scrolled' : 'navbar on-top'}>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>   
                        <img src='/99images/logo.png' alt='OQULO'/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <div>
                    <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" class='nav-links' onClick={closeMobileMenu}>
                                DISCOVER OQULO
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/" class='nav-links' onClick={closeMobileMenu}>
                                FEATURES
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/" class='nav-links' onClick={closeMobileMenu}>
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
