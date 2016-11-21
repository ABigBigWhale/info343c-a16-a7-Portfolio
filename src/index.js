import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import MainLayout from './MainLayout';
import ContentLayout from './ContentLayout';
import Contact from './Contact';
import DashBoard from './DashBoard';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={DashBoard} />
            <Route path='contact' component={Contact} />
            <Route path='projects/:itemName' component={ContentLayout} />
        </Route>
    </Router>,
    document.getElementById('root')
);
