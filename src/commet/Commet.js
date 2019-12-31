import React, { Component, Fragment } from 'react';
import CommetItem from './CommetItem';


class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commetList: [
                { id: '1', user: '张三', content: '哈哈， 沙雕' },
                { id: '2', user: '张三', content: '哈哈， 沙雕' },
                { id: '3', user: '张三', content: '哈哈， 沙雕' },
                { id: '4', user: '张三', content: '哈哈， 沙雕' },
                { id: '5', user: '张三', content: '哈哈， 沙雕' }
            ]
        }
    }
    render () {
        return (
            <Fragment>
                <div className="title" >评论组件标题</div>
                <ul>
                    {this.state.commetList.map(
                        item => (
                            <CommetItem key={item.id} {...item}/>
                        )
                    )}
                </ul>  
            </Fragment>
        )
    }
}
export default Comment