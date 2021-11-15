import React from 'react'
import logo from '../images/logo.svg'
import "../style/navbar.css"
function Navbar() {
    return (
            <ul className="navbar">
                <img src={logo} alt='logo' className="logo" />
                <li><a href="/home" className="nav_item">home</a></li>
                <li><a href="/home" className="nav_item">shop</a></li>
                <li><a href="/home" className="nav_item">about</a></li>
                <li><a href="/home" className="nav_item">contact</a></li>
            </ul>
    )
}

export default Navbar
