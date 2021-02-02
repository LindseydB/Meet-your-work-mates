import React, {Component,useState} from 'react';
import './css/App.css';
import{ BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./bootstrap/css/bootstrap.min.css";

import EventList from "./components/home/event-list.component.js"
import Home from "./components/home/home.component.js"
import LoginRegister from "./components/LoginRegister.js";


function App() {
  var currentLocation = window.location.pathname;
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);


  if(currentLocation === "/dashboard"){
      return (
          <Router>

              <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                  <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/#">Meet Your Workmates</a>

                  <ul class="navbar-nav px-3">
                      <li class="nav-item text-nowrap">
                          <a class="nav-link" href="/">Sign out</a>
                      </li>
                  </ul>
                  <div class="navbar-expand-sm">
                    <div class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                      <span class="navbar-toggler-icon"></span>
                    </div>
                  </div>



              </header>

              <div class="container-fluid">
                  <div class="row">

                  <div class="col-2">
                  <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">



                    <div id="sidebarMenu" class={`${isNavCollapsed ? 'col-md-3 col-lg-2 d-md-block bg-light sidebar collapse' : ''} col-md-3 col-lg-2 d-md-block bg-light sidebar navbar-collapse`}  >
                        <div class="position-sticky pt-3">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <Link to="/dashboard" className="nav-link">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/create" className="nav-link">Search</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/create" className="nav-link">Calendar</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/create" className="nav-link">Notifications</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/create" className="nav-link">Profile</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                  </nav>

                  </div>

                      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                          <div class="d-flex">

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

              <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                  <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/#">Meet Your Workmates</a>


              </header>

              <div class="container-fluid">
                  <div class="row">


                      <main class="col-md-12">
                          <div class="d-flex">

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
