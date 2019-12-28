import React from 'react';
import ReactDom from 'react-dom';

// var sp = React.createElement('span', null, '这是span')
var op = React.createElement('p', {title: '你好'}, '这是段落', React.createElement('span', null, 'testxxx'), React.createElement('a', null, 'oooo'))

// console.log(op)
// ReactDom.render(op, document.getElementById('app'));
// var s = 1;
// test
// var op = <div>
//     <p title="hi">
//     {/* { s } */}
//     <label htmlFor="测试label">fds</label>
//     <span>这是span</span>
// </p><span></span>
//     </div>

// console.log(op)

ReactDom.render(op, document.getElementById('app'));


