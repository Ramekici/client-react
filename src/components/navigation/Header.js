import React from 'react';
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Logo</Link>
                <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    <Link className="nav-link" to="/users">Users</Link>
                    <Link className="nav-link" to="/create">Create</Link>
                    <Link className="nav-link" to="/others"></Link>
                </div>
            </div>
        </nav>
    )
}
