import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import ContentLayout from './ContentLayout';
import Contact from './Contact';
import DashBoard from './DashBoard';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={DashBoard} />
            <Route path='contact' component={Contact} />
            <Route path='projects/:itemName' component={ContentLayout} />
        </Route>
    </Router>,
    document.getElementById('root')
);
