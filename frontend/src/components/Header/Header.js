import React, { useState } from 'react' 
import { NavLink,useNavigate } from 'react-router-dom'
import logo from '../../images/argentBankLogo.png'

import { useSelector,useDispatch } from 'react-redux'
import Actions from '../../redux/actions'

export default function Header() {

    const isAuth = useSelector(state => state.loginReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(Actions.userAction.logIn({
            loggedin: false,
            token: null
        }))
        navigate('/')
    }

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
                        !isAuth.loggedin ? <NavLink to='/login' className='main-nav-item'>
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </NavLink> :
                            <>
                                <NavLink className='main-nav-item' to='/profile'>
                                    <i class="fa fa-user-circle"></i>
                                    {
                                        isAuth.user.firstName
                                    }
                                </NavLink>
                                <a className='main-nav-item' style={{ cursor:'pointer' }} onClick={handleLogout}>
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
