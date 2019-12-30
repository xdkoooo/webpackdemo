import React from 'react';
import ReactDOM from 'react-dom';
import MyHeader from './components/MyHeaderClass';


var obj = {
    name: '阿三',
    age: 12
}

ReactDOM.render(<MyHeader {...obj}/>, document.getElementById('app'));
