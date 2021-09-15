import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let state = {};

window.setState = changes => {
  state = Object.assign({}, state, changes);
  
  ReactDOM.render(
    <React.StrictMode>
      <App {...state}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

/* eslint no-restricted-globals: 0 */
const initialState = {
  name: 'Jonny',
  location: location.pathname.replace(/^\/?|\/$/g,'')
};

window.setState(initialState);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
