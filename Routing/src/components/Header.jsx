import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
    const activeClass = (params) => {
        return params.isActive ? "active-item" : "item"
    }
    return (
        <div className='navBarContainer'>
            <div className='NavBar'>
                <div className='NavBarChild'>
                    <NavLink to='/'>Home</NavLink >
                </div>
                <div className='NavBarChild'>
                    <NavLink to='/products' className={activeClass}>Product</NavLink>
                    <NavLink to='/invoices' className={activeClass}>Invoices</NavLink>
                    <NavLink to='/cart' className={activeClass}>Cart</NavLink>
                    <NavLink to='/profile' className={activeClass}>Profile</NavLink>
                    <NavLink to='/about' className={activeClass}>About</NavLink>
                </div>
                <div className='NavBarChild'>
                    <NavLink to='/auth'>Auth</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header
