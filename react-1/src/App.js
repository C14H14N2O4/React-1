import logo from './logo.svg';
<<<<<<< Updated upstream
=======
import Clock from './Clock'
import {Link} from "react-router-dom";
>>>>>>> Stashed changes
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
<<<<<<< Updated upstream
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hey Howdy</p>
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
=======
        <nav 
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
          >
            <Link to="/about">About</Link>
          </nav>
        <Clock></Clock>
>>>>>>> Stashed changes
      </header>
    </div>
  );
}

export default App;
