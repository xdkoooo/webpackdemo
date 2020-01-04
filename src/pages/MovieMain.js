import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import { Card, Rate, Spin, Pagination } from 'antd';
import styles from './MovieMain.less';
const { Meta } = Card;

class MovieMain extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: [],
            // page: 0,
            count: 10,
            total: 0,
            loading: true
        }
    }

    async getData(props) {
        this.setState(() => {
            return {
                loading: true
            }
        })
        const { type, page } = props.match.params;
        const start = (page - 1) * 10;
        let { count } = this.state;

        let res = await Axios.get(`/api/v2/movie/${type}?start=${start}&count=${count}`)
        console.log(res.data.subjects);
        this.setState(() => {
            return {
                list: res.data.subjects,
                total: res.data.total,
                loading: false
            }
        })
    }

    componentWillMount() {
        this.getData(this.props);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.getData(nextProps);
    }

    renderList () {
        return this.state.list.map(item => (
            <Card
                key={item.id}
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={item.images.large} />}
                onClick={this.jumpUrl.bind(this, item.id)}
            >
                <Meta title={<Rate allowHalf disabled defaultValue={item.rating.average/2} />} description={item.title} />
            </Card>
        ))
    }

    onChange(pageNumber) {
        console.log(pageNumber);
        console.log(this);
        const { type } = this.props.match.params;
        this.props.history.push(`/movie/${type}/${pageNumber}`)
    }

    jumpUrl(id) {
        this.props.history.push(`/movie/detail/${id}`)
    }

    render () {
        const { pathname } = this.props.location;
        const { type, page } = this.props.match.params;
        const { loading, total } = this.state;
        console.log(this.props);
        return <div style={{ position: "relative", minHeight: 600}}>
            {
                loading && <Spin size="large"/>
            }
            {
                !loading && (<div className={styles.list}>          
                        {this.renderList()}
                    </div>
                )
            }
            {
                !loading && (
                    <Pagination showQuickJumper defaultCurrent={page * 1} total={total} onChange={this.onChange.bind(this)}/>
                )
            }

        </div>
    }
}
export default MovieMain