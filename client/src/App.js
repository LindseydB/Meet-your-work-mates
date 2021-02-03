import React, { Component, useState } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./bootstrap/css/bootstrap.min.css";

import EventList from "./components/home/event-list.component.js"
import Home from "./components/home/home.component.js"
import LoginRegister from "./components/LoginRegister.js";


function App() {
    let currentLocation = window.location.pathname;
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);


    if (currentLocation === "/dashboard") {
        return (
            <Router>

                <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                    <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/#">Meet Your Workmates</a>

                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <a className="nav-link" href="/">Sign out</a>
                        </li>
                    </ul>
                    <div className="navbar-expand-sm">
                        <div className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                            <span className="navbar-toggler-icon"></span>
                        </div>
                    </div>

                </header>

                <div className="container-fluid">
                    <div className="row">

                        <div className="col-2">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">

                                <div id="sidebarMenu" className={`${isNavCollapsed ? 'col-md-3 col-lg-2 d-md-block bg-light sidebar collapse' : ''} col-md-3 col-lg-2 d-md-block bg-light sidebar navbar-collapse`}  >
                                    <div className="position-sticky pt-3">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <Link to="/dashboard" classNameName="nav-link">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/create" classNameName="nav-link">Search</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/create" classNameName="nav-link">Calendar</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/create" classNameName="nav-link">Notifications</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/create" classNameName="nav-link">Profile</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </nav>

                        </div>

                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                            <div className="d-flex">

                            </div>

                            <Route path='/' exact component={LoginRegister} />
                            <Route path='/dashboard' exact component={Home} />

                        </main>
                    </div>
                </div>
            </Router>

        );
    } else {
        return (
            <Router>

                <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                    <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/#">Meet Your Workmates</a>

                </header>

                <div className="container-fluid">
                    <div className="row">

                        <main className="col-md-12">
                            <div className="d-flex">

                            </div>

                            <LoginRegister />

                        </main>
                    </div>
                </div>
            </Router>

        );
    }

}

export default App;
