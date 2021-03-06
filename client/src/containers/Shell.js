import React, {useState} from 'react'
import { Route, withRouter } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import LoginRegister from "./pages/LoginRegister/LoginRegister.js";
import "../bootstrap/css/bootstrap.min.css";
import Navigation from "../components/Navigation/Navigation";
import Search from "./pages/Search/Search.js";
import Profile from "./pages/Profile/Profile.js";
import Logo from "../img/hono_logo.png";
import ProfileImg from "../img/profile.jpg";
import NotificationImg from "../img/notifications.png";
import 'semantic-ui-css/semantic.min.css'
import PendingInvites from "./pages/PendingInvites/PendingInvites.js";


const Shell = ({location}) => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <React.Fragment>
            <header className="navbar navbar-dark sticky-top bg-darkr flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/#"><img src={Logo} alt="Hono Logo" class="logo" /></a>

                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="headerimg" href="/notifications"><img src={NotificationImg} alt="notifications icon" class="headericon" /></a>
                        <a className="headerimg" href="/profile"><img src={ProfileImg} alt="profile icon" class="headericon" /></a>
                    </li>
                </ul>
                <div className="navbar-expand-sm">
                    <div className="custom-toggler navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded={!isNavCollapsed ?
                    true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                        <span className="navbar-toggler-icon"></span>
                    </div>
                </div>

            </header>

            <div className="container-fluid">
                <div className="row">
                    {location.pathname === '/' ? <main className="col-md-12 px-md-4"><Route path='/' exact component={LoginRegister} /></main>
                : <Navigation isNavCollapsed={isNavCollapsed}/>}
                    <main className="col-md-9 col-lg-10 px-md-4">


                        <Route path='/dashboard' exact component={Home} />
                        <Route path='/search' exact component={Search} />
                        <Route path='/profile' exact component={Profile} />
                        <Route path='/invites' exact component={PendingInvites} />

                    </main>
                </div>
            </div>
        </React.Fragment>
    )
}

export default withRouter(Shell);
