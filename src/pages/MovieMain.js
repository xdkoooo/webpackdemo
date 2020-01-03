import React, { Component } from 'react';

class MovieMain extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        const { pathname } = this.props.location;
        const { type, page } = this.props.match.params;
        return <div>
            MovieMain { type } { page } { pathname }
        </div>
    }
}
export default MovieMain