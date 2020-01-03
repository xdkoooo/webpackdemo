import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import { Card, Rate } from 'antd';
import styles from './MovieMain.less';
const { Meta } = Card;

class MovieMain extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: []
        }
    }
    async componentWillMount() {
        const { type, page } = this.props.match.params;
       

        let res = await Axios.get('/api/v2/movie/in_theaters')
        console.log(res.data.subjects);
        this.setState(() => {
            return {
                list: res.data.subjects
            }
        })

        // let data = await fetch('/api/v2/movie/in_theaters')
        // let res = await data.json();
        // console.log(res.subjects);
    }

    componentDidMount() {}

    renderList () {
        return this.state.list.map(item => (
            <Card
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
        return <div className={styles.list}>    
             {this.renderList()}
        </div>
    }
}
export default MovieMain