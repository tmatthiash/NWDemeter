import logo from './logo.svg';
import './App.css';
import { server } from './UdpListener';
import { BlockList } from './Components/BlockList';

function App() {
  return (
    <div className="App">
      <BlockList />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.{messageBlock}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
