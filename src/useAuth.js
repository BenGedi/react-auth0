import {useState} from 'react';
import auth0js from 'auth0-js';

const initAuth = new auth0js.WebAuth({
    domain: 'ben-gedi.eu.auth0.com', // the application id on auth0
    clientID: 'MrWZwpJrpSpPzISCY4En2TkeC8RaY6vH',
    redirectUri: 'http:/localhost:3000/callback', // the user redirect after the authentication is done
    audience: 'https://ben-gedi.eu.auth0.com/userinfo', // an endpoint to get user information
    responseType: 'token id_token',
    scope: 'openid'   
});

function useAuth() {
    const [auth] = useState(initAuth);

    return ({
        auth,
        login: () => auth.authorize()
    });
}

export default useAuth;