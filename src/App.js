import logo from './logo.svg';
import './App.css';
import config from './config'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Website Created by Portal Grup v1
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           {config.title}
        </a>
      </header>
    </div>
  );
}

export default App;
