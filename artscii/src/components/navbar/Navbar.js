import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
                <li className='navbar-item'>
                    <Link className='navbar-link' to={'/'}>Home</Link>
                </li>
                <li className='navbar-item'>
                    <Link className='navbar-link' to={'about'}>About</Link>
                </li>
                <li className='navbar-item'>
                    <a className='navbar-link' href='https://github.com/elizasohn/artscii'>GitHub</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;