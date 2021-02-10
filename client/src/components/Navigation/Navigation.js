import React from 'react'
import { Link } from "react-router-dom";

const Navigation = ({ isNavCollapsed }) => {
    return (
        <div className="col-2">
            <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">

                <div id="sidebarMenu" className={`${isNavCollapsed ? 'col-md-3 col-lg-2 d-md-block bg-light sidebar collapse' : ''} col-md-3 col-lg-2 d-md-block bg-light sidebar`}  >
                    <div className="position-sticky pt-3">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/search" className="nav-link">Explore</Link>
                            </li>

                            <li className="nav-item">
                               <Link to="/invites" className="nav-link">Pending Invites</Link>
                           </li>
                            <li>
                            <a className="nav-link" href="/">Log Out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation
