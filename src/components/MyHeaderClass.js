import React from 'react';

class MyHeader extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
    }
    render () {
        var { name, age } = this.props;
        return <div>
            {name}
            <p>这是段落</p>
            {age}
        </div>
    }
}

export default MyHeader