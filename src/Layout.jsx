import NavBar from './components/navbar/navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react';

const Layout = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
            <Analytics />
        </>
    )
}

export default Layout