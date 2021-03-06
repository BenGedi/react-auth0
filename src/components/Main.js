import React from 'react';
import PropTypes from 'prop-types';

const Main = ({name, login, isAuthenticated}) => {
    return (
        <div>
            <p>
            Hello {name}<br/>
            Do you want to see the secret area? <a href="/secret">Click here</a>
            </p>
            {!isAuthenticated() && 
                <div>
                    <hr/>
                    Please login first
                    <hr/>
                    <button onClick={login}>Login</button>
                </div>
            }
        </div>
    );
};

Main.propTypes = {
    name: PropTypes.string,
    login: PropTypes.func
};

export default Main;