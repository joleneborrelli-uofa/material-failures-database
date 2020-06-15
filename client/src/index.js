import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

// CSS
import './css/main.css';

import React          from 'react';
import { render }     from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Router         from './components/router.component.js';

render( (
    <HashRouter>
        <Router/>
    </HashRouter>
), document.getElementById( 'root' ) );
