import React from 'react';
import { Navbar, Title } from '../components';
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
