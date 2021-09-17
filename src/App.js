import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Secret from './components/Secret';
import NoFound from './components/NoFound';
import Callback from './components/Callback';
import useAuth from './useAuth';

/* eslint no-restricted-globals: 0 */
const initialState = {
  name: 'Jonny',
  location: location.pathname.replace(/^\/?|\/$/g,'')
};

function App() {
  const {auth0,login} = useAuth();
  const [state] = useState(initialState);

  // simple rounting
  const routing = {
    '': <Main {...state}/>,
    'callback': <Callback/>,
    'secret': <Secret/>,
    'default': <NoFound/>
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {routing[state.location] || routing['default']}
        <h1>{state.name} Learn Auth0</h1>
      </header>
    </div>
  );
}

export default App;
