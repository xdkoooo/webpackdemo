import React, { Component, Fragment } from 'react';
import Item from './Item';
import style from './Commet.css';

console.log('style' , style);


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

    renderList() {
        return this.state.commetList.map(item => (
            <Item key={item.id} {...item}/>
        ))
    }

    render () {
        return (
            <Fragment>
                <div className={style.title} >评论组件标题</div>
                <ul>
                    {this.renderList()}
                </ul>  
            </Fragment>
        )
    }
}
export default Comment