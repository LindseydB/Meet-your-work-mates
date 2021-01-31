import logo from './img/logo.svg';
import './css/App.css';
import './App.css';
import{ BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./bootstrap/css/bootstrap.min.css";

import EventList from "./components/event-list.component.js"
import Home from "./components/home/home.component.js"



function App() {
  return (
    <div className="App">
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
