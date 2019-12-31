import React, { Component } from 'react';

class BindBridge extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: 12
        }
    }

    msgChange(e) {
        // e.persist();
        // console.log('value' , e.target.value)
        // this.setState({
        //     msg: e.target.value
        // })
        // const value = e.target.value;
        this.setState((state, props) => {
            return {
                msg: this.refs.box.value
            }
        })
    }

    render () {
        return <div>
            <input ref="box" value={this.state.msg} onChange={this.msgChange.bind(this)} type="text" />
            {this.state.msg}
        </div>
    }
}
export default BindBridge