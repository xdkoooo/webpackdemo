import React, { Component } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import MovieMain from './MovieMain';
const { SubMenu } = Menu;
const { Sider, Content } = Layout;

class Movie extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        const { pathname } = this.props.location;
        console.log('movie -patchname:', pathname);
        var arr = pathname.split('/');
        console.log('arr:', arr); 
        return (
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        selectedKeys={['/' + arr[2]]}
                        defaultSelectedKeys={['/in_theaters']}
                        style={{ height: '100%' }}
                    >
                        <Menu.Item key="/in_theaters"><Link to={'/movie/in_theaters/1'}>最新上映</Link></Menu.Item>
                        <Menu.Item key="/coming_soon"><Link to={'/movie/coming_soon/1'}>即将上映</Link></Menu.Item>
                        <Menu.Item key="/top250"><Link to={'/movie/top250/1'}>TOP250</Link></Menu.Item>
                    </Menu>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <Switch>
                            <Route path={'/movie/:type/:page'} component={MovieMain}></Route>
                            <Redirect to={'/movie/in_theaters/1'} />
                        </Switch>                                          
                    </Content>
                </Layout>
        )
    }
}
export default Movie