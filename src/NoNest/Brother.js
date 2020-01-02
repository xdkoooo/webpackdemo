import React, { Component } from 'react';
import bus from './Bus';


class Brother extends Component {
    constructor(props) {
        super(props)
        this.notify = this.notify.bind(this)
    }

    notify() {
        bus.emit('test', 'hello', 'beautiful')
    }

    render () {
        return <div>
            Brother
            <button onClick={this.notify}>对sister说</button>
        </div>
    }
}
export default Brother