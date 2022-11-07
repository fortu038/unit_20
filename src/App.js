import logo from './logo.svg';
import './App.css';
import Title from "./Title";
import Testing from "./Testing";

function App() {
  return (
    <div className="App">
      <Title text="New Text" name="Gus" />
      <Testing text="fruity"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
