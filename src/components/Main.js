import * as React from 'react';
import propTypes from 'prop'

const Main = ({name, login}) => {
    return (
        <div>
            <p>
            Hello {name}<br/>
            Do you want to see the secret area? <a href="/secret">Click here</a>
            </p>
            <div>
                <hr/>
                Please login first
                <hr/>
                <button onClick={login}>Login</button>
            </div>
        </div>
    );
};

export default Main;