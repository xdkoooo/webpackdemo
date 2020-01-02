import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Route } from 'react-router-dom';
import App from './App';



ReactDOM.render(
    <BrowserRouter>
        <Route path={'/'} component={App}></Route>    
    </BrowserRouter>,
    document.getElementById('app'));