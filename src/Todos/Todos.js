import React, { Component } from 'react';
import style from './Todos.css';
import TodoItem from './TodoItem';

console.log('style:', style);

class Todos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: '',
            list: []
        }
    }

    userChange() {
        this.setState(() => {
            return {
                user: this.refs.myinput.value
            }
        })

        console.log(this.state);
    }

    addList(e) {
        if (e.keyCode === 13 && this.state.user.trim() !== '') {
            this.setState((state, props) => {
                var newarr = JSON.parse(JSON.stringify(state.list))
                newarr.push(state.user)
                return {
                    list: newarr,
                    user: ''
                }
            }, () => {
                console.log(this.state.list)
            })
        }
    }

    removeItem(index, e) {
        console.log(index);
        this.setState((state, props) => {
            var newarr = JSON.parse(JSON.stringify(state.list))
            newarr.splice(index, 1);
            return {
                list: newarr
            }
        })
    }

    renderList() {
        return this.state.list.map((item, index) => (
            <TodoItem key={index} item={item} onRemove={this.removeItem.bind(this, index)}/>
        ))
    }

    render () {
        const { user, list } = this.state;
        return (
            <div className={"container"}>
                <div>
                    <input ref="myinput" 
                    type="text" 
                    value={user}
                    className={"form-control"} 
                    onChange={this.userChange.bind(this)}
                    onKeyDown={this.addList.bind(this)}/>
                </div>
                <ul className="list-group">
                    {this.renderList()}
                </ul>
                <p>这有{list.length}条</p>
            </div>
        )
    }
}
export default Todos