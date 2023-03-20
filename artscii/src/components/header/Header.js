import React from 'react';
import Navbar from '../navbar/Navbar';
import Title from '../title/Title';
import './Header.css';

const art = [
    ' █████╗ ██████╗ ████████╗███████╗ ██████╗██╗██╗',
    '██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔════╝██║██║',
    '███████║██████╔╝   ██║   ███████╗██║     ██║██║',
    '██╔══██║██╔══██╗   ██║   ╚════██║██║     ██║██║',
    '██║  ██║██║  ██║   ██║   ███████║╚██████╗██║██║',
    '╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝╚═╝',
].join('\n');


const Header = () => {
  return (
    <header className="header">
        <Title asciiArt={art} />
        <Navbar />
    </header>
  );
};

export default Header;
