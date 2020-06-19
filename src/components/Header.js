import React from 'react';
import Nav from './layouts/Nav';
import Hero from './layouts/Hero';

const Header = props => 
    <section className='header'>
        <Nav />
        <Hero />
    </section>

export default Header;