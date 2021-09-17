import * as React from 'react';

const Secret = (props) => {
    return (
        <div>
            This is a Secret, jump back to <a href="/">Home</a><br/>
            <button onClick={props.logout}>Logout</button>
        </div>
    );
};

export default Secret;