import React, { Component } from 'react';
import bus from './Bus';

class Sister extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: ''
        }

        bus.on('test', (info, other) => {
            this.setState({
                msg: info
            })

            console.log('other:', other);
        })
    }

    notify() {
        bus.emit('test', 'hello')
    }

    render () {
        return <div>
            Sister {this.state.msg}
        </div>
    }
}
export default Sister