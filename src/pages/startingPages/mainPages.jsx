import React from 'react'
import Header from '../../components/header'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../dashboardPage/dashboard'
import About from '../aboutPage/about'
import Services from '../servicesPage/services'
import Events from '../eventsPage/events'
import Projects from '../projectsPage/projects'
import Reports from '../reportsPage/reports'
import Contact from '../contactPage/contact'
import DonateNow from '../donationsPage/donateNow'
import Footer from '../../components/footer'

const MainPages = () => {
    return (
        <div className="main-page">
            <Header />
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/events' element={<Events />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/reports' element={<Reports />} />
                <Route path='/contact-us' element={<Contact />} />
                <Route path='/donate-now' element={<DonateNow />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default MainPages