import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import Home from "./pages/Home/home.component.js"
import LoginRegister from "./pages/LoginRegister.js";
import "../bootstrap/css/bootstrap.min.css";
import Navigation from "../components/Navigation/Navigation";

const Shell = ({location}) => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <React.Fragment>
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
                    {location.pathname === '/dashboard' ? <Navigation isNavCollapsed={isNavCollapsed}/> : null}
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex">

                        </div>

                        <Route path='/' exact component={LoginRegister} />
                        <Route path='/dashboard' exact component={Home} />

                    </main>
                </div>
            </div>
        </React.Fragment>
    )
}

export default withRouter(Shell);

