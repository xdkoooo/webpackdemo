import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Link, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import NewCenter from './pages/NewsCenter';
import News from './pages/News';



ReactDOM.render(
    <HashRouter>        
        <Link to={'/home'}>首页</Link>
        <Link to={'/about'}>关于</Link>
        <Link to={'/news'}>新闻中心</Link>
        <Link to={'/news/1'}>新闻1</Link>
        <Link to={'/news/2'}>新闻2</Link>

        <Route path={'/home'} component={Home} />
        <Route path={'/about'} component={About} />
        <Route path={'/news/:id'} component={News} />
        <Route path={'/news'} component={NewCenter} exact />      
    </HashRouter>,
    document.getElementById('app'));