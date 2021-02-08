import React from 'react';
import './css/App.css';
import { BrowserRouter as Router } from "react-router-dom";
import "./bootstrap/css/bootstrap.min.css";
import Shell from "./containers/Shell";


function App(props) {
    return (
        <Router>
            <Shell/>
        </Router>
    )
}

export default App;
