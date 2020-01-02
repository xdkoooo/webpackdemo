import React, { Component, Fragment } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NewCenter from './pages/NewsCenter';
import News from './pages/News';
import style from './pages/style.css';

class App extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        const { pathname } = this.props.location;
        return <Fragment>
            <Link to={'/home'} className={ pathname === '/home' ? style.active : ''}>首页</Link>
            <Link to={'/about'} className={ pathname === '/about' ? style.active : ''}>关于</Link>
            <Link to={'/news'} className={ pathname === '/news' ? style.active : ''}>新闻中心</Link>
            <Link to={'/news/1'} className={ pathname === '/news/1' ? style.active : ''}>新闻1</Link>
            <Link to={'/news/2'} className={ pathname === '/news/2' ? style.active : ''}>新闻2</Link>

            {/* <NavLink to={'/home'}>首页</NavLink>
            <NavLink to={'/about'}>关于</NavLink>
            <NavLink to={'/news'} exact={true}>新闻中心</NavLink>
            <NavLink to={'/news/1'} exact={true}>新闻1</NavLink>
            <NavLink to={'/news/2'} exact={true}>新闻2</NavLink> */}

            <Route path={'/home'} component={Home} />
            <Route path={'/about'} component={About} />
            <Route path={'/news'} component={NewCenter} exact/>
            <Route path={'/news/:id'} component={News} />
        </Fragment>
    }
}
export default App