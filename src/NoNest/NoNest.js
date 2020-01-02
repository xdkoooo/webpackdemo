import React, { Component } from 'react';
import Brother from './Brother';
import Sister from './Sister';


class NoNest extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return <div>
            <Brother />
            <Sister />
        </div>
    }
}

export default NoNest;