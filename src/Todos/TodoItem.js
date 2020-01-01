import React, { Component } from 'react';
import ReactProps from 'prop-types';


class TodoItem extends Component {

    static defaultProps = {
        num: 3
    }

    static propTypes = {
        num: ReactProps.number
    }

    constructor(props) {
        super(props)
    }

    render () {
        const { item } = this.props;
        return (
            <li className="list-group-item list-group-item-success">
                {item}
                <span className="close" onClick={this.props.onRemove}>&times;</span>
            </li>
        )
    }
}
export default TodoItem