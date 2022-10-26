import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido a mi Linkedin
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/edwinemmanuelramirezaguilar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go Linkedin
        </a>
      </header>
    </div>
  );
}

export default App;
