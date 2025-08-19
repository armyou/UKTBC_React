import React, { useState } from 'react'
import AdminSideNav from '../../components/adminComponents/adminSideNav'
import AdminHeader from '../../components/adminComponents/adminHeader'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from '../adminPages/adminDashboard'
import AdminDonations from '../adminPages/adminDonations'

const AdminLayout:React.FC = () => {
    const [isNavOpen, setIsNavOpen] = useState(true);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <div className="admin-layout col-sm-12">
            <div className= {isNavOpen ? "admin-sideNav col-sm-2" : "admin-sideNav col-sm-1"} >
                <AdminSideNav isSideNavOpen={isNavOpen} />
            </div>
            <div className={ isNavOpen ?  "admin-full-content col-sm-10" : "admin-full-content col-sm-11"}>
                <AdminHeader toggleNav={toggleNav} />
                <Routes>
                    <Route path='/' element={<AdminDashboard />} />
                    <Route path='/donations' element={<AdminDonations />} />
                </Routes>
            </div>
        </div>
    )
}

export default AdminLayout