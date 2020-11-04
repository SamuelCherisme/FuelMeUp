
import React, { useState, useEffect } from 'react';
// import { MenuItems } from "./MenuItems"
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import { MenuItems } from '../NavBar/MenuItems'
import './NavBar.css';



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Fuel Me Up
            <i class='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
              </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/about'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                About
              </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/profiles'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Profile
              </Link>
                        </li>

                        <li className='nav-item'>
                            <Link
                                to='/blog'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Blogs
              </Link>
                        </li>

                        <li>
                            <Link
                                to='/contact-us'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                Contact Us
              </Link>

                            {/* <Link
                                to='/profile'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                Profile
              </Link> */}
                        </li>
                    </ul>
                 

                </div>
            </nav>
        </>
    );
}

export default Navbar;