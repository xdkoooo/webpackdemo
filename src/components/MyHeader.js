import React from 'react';

function MyHeader(props) {
    const { name, age, sex, school } = props;
    return <div>
<p>{name} {age} {sex} {school}</p>
    </div>
}

export default MyHeader
