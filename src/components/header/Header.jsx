import React from 'react'
import {
    NavLink
} from 'react-router-dom'

const Header = () => {
    return (
        <>
            <NavLink
                to="/login"
                className={({ isActive, isPending }) => isPending ? 'pending': isActive ? 'active': ''}
            >
                Login
            </NavLink>
            <NavLink
                to="/register"
                className={({ isActive, isPending }) => isPending ? 'pending': isActive ? 'active': ''}
            >
                Register
            </NavLink>
        </>
    )
}

export default Header;