import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

import { DatePicker } from 'antd';

ReactDOM.render(
    <BrowserRouter>
        <Route to={'/'} component={App}></Route>
    </BrowserRouter>,
    document.getElementById('app'));