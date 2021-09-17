  /* eslint no-restricted-globals: 0 */
import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Secret from './components/Secret';
import NoFound from './components/NoFound';
import Callback from './components/Callback';
import useAuth from './useAuth';

function App() {
  const {auth,login, isAuthenticated} = useAuth();
  const [state] = useState({
    name: 'Jonny',
    location: location.pathname.replace(/^\/?|\/$/g,''), 
    auth, 
    login
  });

  // simple rounting
  const routing = {
    '': <Main {...state}/>,
    'callback': <Callback/>,
    'secret': isAuthenticated() ? <Secret/> : <NoFound/>,
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
