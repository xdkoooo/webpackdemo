import React, { Component, Fragment } from 'react';
import { Link, Route, Redirect, Switch } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
import './css/index.css';
import Movie from './pages/Movie';
import Home from './pages/Home-demo';
import About from './pages/About-demo';

class App extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        const { pathname } = this.props.location;
        var arr = pathname.split('/');
        return (
            <Layout>
                <Header className="header">
                    <div className="logo"> 
                    </div>
                    <Menu
                        mode="horizontal"
                        defaultSelectedKeys={['/home']}
                        selectedKeys={['/' + arr[1]]}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="/home"><Link to={'/home'}>首页</Link></Menu.Item>
                        <Menu.Item key="/movie"><Link to={'/movie'}>电影</Link></Menu.Item>
                        <Menu.Item key="/about"><Link to={'/about'}>关于我们</Link></Menu.Item>
                    </Menu>
                </Header>

                <Content style={{ padding: '0 0' }}>
                    <Switch>
                        <Route path={'/home'} component={Home}></Route>               
                        <Route path={'/movie'} component={Movie}></Route>
                        <Route path={'/about'} component={About}></Route>
                        <Redirect to={'/home'}/>
                    </Switch>                
                </Content>
                <Footer style={{ textAlign: 'center' }}>xkk Design ©2019 Created by xkk</Footer>
            </Layout>
        )
    }
}
export default App