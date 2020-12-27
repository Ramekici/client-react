import React from 'react';
import {NavLink} from 'react-router-dom'

export default function Header() {


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Logo</NavLink>
                <div className="navbar-nav">
                    <NavLink className="nav-link" exact to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/users">Users</NavLink>
                    <NavLink className="nav-link" to="/create">Create</NavLink>
                    <NavLink className="nav-link" to="/others"></NavLink>
                </div>
            </div>
        </nav>
    )
}
