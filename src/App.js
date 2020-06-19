import React, { Fragment } from 'react';

import './sass/main.scss';
import Header from './components/Header.jsx';
import Shortener from './components/Shortener';
import Features from './components/Features';
import BoostSection from './components/BoostSection';
import Footer from './components/Footer';

const App = () => <Fragment>
    <Header />
    <Shortener />
    <Features />
    <BoostSection />
    <Footer />
</Fragment>

export default App;
