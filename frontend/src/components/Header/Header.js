import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../../images/argentBankLogo.png'

export default function Header() {

    const [isAuth, setIsAuth] = useState(false)

  return (
    <div className='header-parent'>
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                {
                    !isAuth ? <NavLink to="/login" className={"main-nav-item"}>
                    <i className="fa fa-user-circle"></i>
                    Sign In
                    </NavLink> :
                        <>
                           <a class="main-nav-item" href="./user.html">
                                <i class="fa fa-user-circle"></i>
                                Tony
                            </a>
                            <a class="main-nav-item" href="./index.html">
                                <i class="fa fa-sign-out"></i>
                                Sign Out
                            </a>                    
                        </>
                }                

            </div>
        </nav>
      
    </div>
  )
}


