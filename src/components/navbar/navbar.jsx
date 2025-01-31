import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
        <nav>
                <ul>
                    <li className='text' id='nav-text'>
                        <Link to="/">
                            Home
                        </Link>
                        </li>
                    <li className='text' id='nav-text'>
                        <Link to="/about-me">
                            About
                        </Link>
                        </li>
                    <li className='text' id='nav-text'>
                        <Link to="/my-approach">
                            My Approach
                        </Link>
                        </li>
                    <li className='text' id='nav-text'>
                        <a href="/#one">Counselling Services</a>
                        </li>
                    <li className='text' id='nav-text'>
                        <a href="/#contact">Contact</a>
                        </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar