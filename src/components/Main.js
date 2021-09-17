import * as React from 'react';

const Main = (props) => {
    return (
        <div>
            <p>
            Hello {props.name}<br/>
            Do you want to see the secret area? <a href="/secret">Click here</a>
            </p>
            <div>
                <hr/>
                Please login first
                <hr/>
                <button>Login</button>
            </div>
        </div>
    );
};

export default Main;