import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className='shadow-sm sticky mt-0 w-full'>
            <nav className='flex flex-wrap items-center px-4 py-2'>
                <div className='flex flex-wrap items-center justify-between mx-auto my-auto max-w-screen-xl ml-0'>
                    <Link to='/' className='flex items-center'>
                        <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="logo" className="mr-3 h-12" /></Link>
                </div>
                <div>
                    <NavLink to="/about" className={({ isActive }) => `${isActive ? "text-orange-600" : "text-gary-800"} text-sm hover:text-orange-600 font-medium rounded-lg px-2 lg:px-3 py-2 mr-2 "focus:outline-none focus-visible:outline-2 focus-visible:outline-orange-400`}>
                        About
                    </NavLink>
                </div>
                <div className='flex items-center lg:order-2'>
                    <Link to='/' className='text-gray-800 hover:text-orange-600 focus-visible:outline-orange-400 focus-visible:outline-2 font-medium rounded-lg text-sm px-2 py-2 mr-2 focus:outline-none'>
                        Login</Link>
                </div>
                <div>
                    <Link to='/' className='text-gray-800 hover:text-orange-600 font-medium text-sm px-2 rounded-lg py-2 focus:outline-none focus-visible:outline-2 mr-4 focus-visible:outline-orange-400 focus:ring-offset-0'>
                        Get Started
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header
