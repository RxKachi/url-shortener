import React, { Fragment } from 'react';

import './sass/main.scss';
import Header from './components/Header';
import Shortener from './components/Shortener';
import Features from './components/Features';
import BoostSection from './components/BoostSection';

const App = () => <Fragment>
    <Header />
    <Shortener />
    <Features />
    <BoostSection />
</Fragment>

export default App;
