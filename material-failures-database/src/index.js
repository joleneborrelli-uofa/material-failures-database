import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

// CSS
import './css/main.css';

import React    from 'react';
import ReactDOM from 'react-dom';
import Router from './components/router.component.js';

ReactDOM.render( <React.StrictMode> <Router /> </React.StrictMode>, document.getElementById( 'root' ) );
