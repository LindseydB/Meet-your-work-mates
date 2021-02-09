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
                                <Link to="/dashboard" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/search" className="nav-link">Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/create" className="nav-link">Calendar</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/create" className="nav-link">Notifications</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/profile" className="nav-link">Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation
