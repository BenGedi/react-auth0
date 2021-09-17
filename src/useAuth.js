/* eslint no-restricted-globals: 0 */
import {useState} from 'react';
import auth0js from 'auth0-js';

const LOGIN_SUCCESS_PAGE = '/secret';
const LOGIN_FAILURE_PAGE = '/';

const initAuth = new auth0js.WebAuth({
    domain: 'ben-gedi.eu.auth0.com', // the application id on auth0
    clientID: 'MrWZwpJrpSpPzISCY4En2TkeC8RaY6vH',
    redirectUri: 'http:/localhost:3000/callback', // the user redirect after the authentication is done
    audience: 'https://ben-gedi.eu.auth0.com/userinfo', // an endpoint to get user information
    responseType: 'token id_token',
    scope: 'openid'   
});

function useAuth() {
    const [auth0] = useState(initAuth);

    function login() {
        auth0.authorize()
    }

    function handleAuthentication() {
        auth0.parseHash((err,authResult) => {
            if(authResult?.accessToken && authResult?.idToken) {
                const expiresAt = JSON.stringify((authResult.expiresIn) * 1000 + new Date().getTime());
                localStorage.setItem('access_token', authResult.accessToken);
                localStorage.setItem('id_token', authResult.idToken);
                localStorage.setItem('expires_at', expiresAt);
                location.pathname = LOGIN_SUCCESS_PAGE;
            } else {
                location.pathname = LOGIN_FAILURE_PAGE;
                console.log(err);
            }
        })
    }

    function isAuthenticated() {
        const expiresAt = localStorage.getItem('expires_at');

        return new Date().getTime() < expiresAt;
    }

    function logout() {
        localStorage.removeItem('access_token')
        localStorage.removeItem('id_token')
        localStorage.removeItem('expires_at');
        location.pathname = LOGIN_FAILURE_PAGE;
    }

    return ({
        auth: auth0,
        login,
        logout,
        handleAuthentication,
        isAuthenticated
    });
}

export default useAuth;