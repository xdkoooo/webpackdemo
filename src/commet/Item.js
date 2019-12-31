import React from 'react';

function Item(props) {
    const { user, content } = props;
    return <li className="item">
            <p className="title">{user}</p>
            <p className="content">{content}</p>
        </li>
}
export default Item