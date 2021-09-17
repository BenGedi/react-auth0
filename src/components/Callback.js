import React, { useEffect } from 'react';
import useAuth from '../useAuth';

const Callback = () => {
    const {handleAuthentication} = useAuth();

    useEffect(() => {
        handleAuthentication();
    }, [handleAuthentication]);

    return (
        <div>
            Loading...
        </div>
    );
};

export default Callback;