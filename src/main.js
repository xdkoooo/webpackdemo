import React from 'react';
import ReactDOM from 'react-dom';
import MyHeader from './components/MyHeader';

var obj = {
    name: '小黑',
    age: 18,
}
ReactDOM.render(<MyHeader {...obj} school={'上海'}/>, document.getElementById('app'));