import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
                <li className='navbar-item'><a className='navbar-link' href='#'>Home</a></li>
                <li className='navbar-item'><a className='navbar-link' href='#'>About</a></li>
                <li className='navbar-item'><a className='navbar-link' href='https://github.com/elizasohn/artscii'>GitHub</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;