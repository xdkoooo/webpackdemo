import React, { Component, Fragment } from 'react';
import { Button, Card, Rate, Spin } from 'antd';
import axios from 'axios';

const { Meta } = Card;

class MovieDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movie: {},
            loading: true
        }
    }

    async componentWillMount() {
        const { id } = this.props.match.params;
        const res = await axios.get(`/api/v2/movie/subject/${id}`)
        console.log(res.data);
        this.setState(() => {
            return {
                movie: res.data,
                loading: false
            }
        })
    }

    goBack() {
        this.props.history.goBack();
    }

    render () {
        const { movie={}, loading=true } = this.state;
        console.log('movie:', movie);
        return <div style={{ position: "relative", minHeight: 600}}>
                {
                    loading && <Spin size="large"></Spin>
                }

                {
                    !loading && (<div>
                        <Button type="primary" onClick={this.goBack.bind(this)}>返回</Button>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src={movie.images ? movie.images.large : ''} />}
                            >
                                <Meta title={movie.title} />
                            </Card>
                        </div>
                    </div>                        
                    )
                }          
        </div>
    }
}
export default MovieDetail