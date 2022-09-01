import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../../images/argentBankLogo.png'

export default function Header() {
  return (
    <div className='header-parent'>
        <nav class="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img
                    class="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 class="sr-only">Argent Bank</h1>
            </NavLink>
   
            <div>
            <a class="main-nav-item" href="./sign-in.html">
                <i class="fa fa-user-circle"></i>
                Sign In
            </a>
            </div>
        </nav>
      
    </div>
  )
}


