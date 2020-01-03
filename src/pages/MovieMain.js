import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import { Card, Rate, Spin } from 'antd';
import styles from './MovieMain.less';
const { Meta } = Card;

class MovieMain extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: [],
            // page: 0,
            count: 10,
            totalPages: 0,
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
                totalPages: Math.ceil(res.data.total/count),
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
            >
                <Meta title={<Rate allowHalf disabled defaultValue={item.rating.average/2} />} description={item.title} />
            </Card>
        ))
    }

    render () {
        const { pathname } = this.props.location;
        const { type, page } = this.props.match.params;
        const { loading } = this.state;
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
        </div>
    }
}
export default MovieMain