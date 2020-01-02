import React, { Component } from 'react';
import ReactProps from 'prop-types';

class GrandPar extends Component {
    constructor(props) {
        super(props)
    }

    getChildContext () {
        return { color: 'red', height: '200px' }
    }

    static childContextTypes = {
        color:ReactProps.string,
        height: ReactProps.string
    }

    render () {
        return <div>
            GrandPar
            <Parent color={"red"}/>
        </div>
    }
}
export default GrandPar



class Parent extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return <div>
            Parent
            <Son />
        </div>
    }
}

class Son extends Component {
    constructor(props) {
        super(props)
    }

    static contextTypes = {
        color: ReactProps.string,
        height: ReactProps.string
    }
    
    render () {
        return <div style={{ background: this.context.color, height: this.context.height }}>
            Son
        </div>
    }
}