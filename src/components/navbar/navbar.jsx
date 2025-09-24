import React from 'react'
import './navbar.css'
const NavBar = () => {
  return (
    <div>
        <nav>
        <h1>CS — Ticket System</h1>
        <div className='Right'>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Changelog</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Download</a></li>
            <li><a href="">Contact</a></li>
        </ul>
        <button>+ New Ticket</button>
        </div>
        </nav>
    </div>
  )
}

export default NavBar