import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Secret from './components/Secret';
import NoFound from './components/NoFound';
import Callback from './components/Callback';

function App(props) {
  const {location, name} = props;

  // simple rounting
  const routing = {
    '': <Main {...props}/>,
    'callback': <Callback/>,
    'secret': <Secret/>,
    'default': <NoFound/>
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {routing[location] || routing['default']}
        <h1>{name} Learn Auth0</h1>
      </header>
    </div>
  );
}

export default App;
