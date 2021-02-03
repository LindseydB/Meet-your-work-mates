import React, { Component, useState } from 'react';
import './css/App.css';
import { BrowserRouter as Router } from "react-router-dom";
import "./bootstrap/css/bootstrap.min.css";
import Shell from "./containers/Shell";

function App(props) {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <Router>
            <Shell/>
        </Router>
    )
    
    }


export default App;
