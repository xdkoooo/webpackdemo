import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import App from './App';



ReactDOM.render(
    <HashRouter>
        <Route path={'/'} component={App}></Route>    
    </HashRouter>,
    document.getElementById('app'));