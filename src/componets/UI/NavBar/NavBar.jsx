import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';

export function NavBar() {
    return (
        <nav className="nav">
            <ul className="nav_header">             
                <li><Link to="/"> Home </Link> </li>
                <li><Link to="/cards"> Cards </Link></li>
                <li><Link to="/"> Help </Link></li>
                <li><Link to="/"> Home </Link></li>
            </ul>
        </nav>
    )
}
