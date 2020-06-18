import React, { Fragment } from 'react';

import './sass/main.scss';
import Header from './components/Header';
import Shortener from './components/Shortener';

const App = () => <Fragment>
    <Header />
    <Shortener />
</Fragment>

export default App;
