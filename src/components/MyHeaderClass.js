import React from 'react';

class MyHeader extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
            msg: '1'
        }
    }
    render () {
        var { name, age } = this.props;
        return <div>
            {name}
            <p>{this.state.msg}</p>
            {age}
        </div>
    }
}

export default MyHeader