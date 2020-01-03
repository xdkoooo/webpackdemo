import React, { Component } from 'react';
import Axios from 'axios';

class MovieMain extends Component {
    constructor(props) {
        super(props)
    }
    async componentWillMount() {
        const { type, page } = this.props.match.params;
       

        // let res = await Axios.get('/api/v2/movie/in_theaters')
        // console.log(res.data);

        let data = await fetch('/api/v2/movie/in_theaters')
        let res = await data.json();
        console.log(res);
    }

    componentDidMount() {}

    render () {
        const { pathname } = this.props.location;
        const { type, page } = this.props.match.params;
        return <div>
            MovieMain { type } { page } { pathname }
        </div>
    }
}
export default MovieMain