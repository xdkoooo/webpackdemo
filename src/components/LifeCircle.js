import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';


class LifeCircle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: 1
        }
    }

    componentWillMount() {}

    componentDidMount() {}

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(this.state.msg);
        return false
    }

    componentWillUpdate(nextProps, nextState, nextContext) {

    }

    unMount() {
        // 只能卸载 ReactDOM render 的组件
        ReactDOM.unmountComponentAtNode()
    }

    // msgUpdate = () => {
    //     this.state.msg = 2;
    //     this.setState({
    //         msg: 2
    //     })
    //     console.log(this.state.msg);
    // }

    // xxx(obj) {
    //     var that = this;//obj
    //     return function () {
    //         that.call(obj)
    //     }
    // }

    msgUpdate() {
        this.setState({
            msg: this.state.msg + 1
        })
        console.log(this.state.msg);
    }

    render () {
        return (
            <div>
                生命周期 {this.state.msg}
                <button onClick={this.msgUpdate.bind(this)}>更新</button>
            </div>
        )
    }
}
export default LifeCircle