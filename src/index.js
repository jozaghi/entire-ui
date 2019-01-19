import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./documentation-components/Home"
import * as serviceWorker from './serviceWorker';

import "./style/sass/main.scss";


ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
