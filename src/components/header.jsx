import React from 'react';
import Nav from './layouts/Nav';
import Hero from './layouts/Hero';

const Header = props => 
    <div className='header'>
        <Nav />
        <Hero />
    </div>

export default Header;