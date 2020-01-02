import React, { Component } from 'react';

class MovieMain extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        const { type, page } = this.props.match.params;
        return <div>
            MovieMain { type } { page }
        </div>
    }
}
export default MovieMain