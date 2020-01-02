import React, { Component } from 'react';

class News extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {}

    render () {
        console.log(this);
        const { match: { params: { id } } } = this.props;
        return <div>
            News {id}
        </div>
    }
}
export default News