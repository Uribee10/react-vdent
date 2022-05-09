import React from 'react'
import imgLogo from'../assets/img/logo.png';
function NavBar() {
  return (
    <nav>
        <img width="120" src={imgLogo} alt="Logo" />
        <ul>
            <li>
                <a href="/"> Home </a>
                <a href="/"> Catálogo </a>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar