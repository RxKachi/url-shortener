import React, { Fragment } from 'react';

import './sass/main.scss';
import Header from './components/Header';
import Shortener from './components/Shortener';
import Features from './components/Features';

const App = () => <Fragment>
    <Header />
    <Shortener />
    <Features />
</Fragment>

export default App;
