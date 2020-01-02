import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import MovieMain from './MovieMain';
const { SubMenu } = Menu;
const { Sider, Content } = Layout;

class Movie extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                    >
                        <Menu.Item key="1"><Link to={'/movie/in_theaters/1'}>最新上映</Link></Menu.Item>
                        <Menu.Item key="2"><Link to={'/movie/coming_soon/1'}>即将上映</Link></Menu.Item>
                        <Menu.Item key="3"><Link to={'/movie/top250/1'}>TOP250</Link></Menu.Item>
                    </Menu>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <Route path={'/movie/:type/:page'} component={MovieMain}></Route>
                    </Content>
                </Layout>
        )
    }
}
export default Movie