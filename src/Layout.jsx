import React from 'react'
import NavBar from './components/navbar/navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const Layout = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout