import React from 'react';
import { FaUserCircle, FaDonate } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

interface AdminSideNavProps {
  isSideNavOpen: boolean;
}

const AdminSideNav: React.FC<AdminSideNavProps> = (
  {
    isSideNavOpen
  }
) => {
  return (
    <div className="admin-sidebar col-sm-12">
      
      {/* Profile Section */}
      <div className="admin-profile-card col-sm-12">
        <div className="profile-header">
          <FaUserCircle className="profile-icon" />
          {
            isSideNavOpen ? <span className="profile-name">Admin</span> : null
          }
        </div>
        {
          isSideNavOpen ? <div className="view-profile">View Profile</div> : null
        }
      </div>

      {/* Navigation Menu */}
      <div className="admin-nav-menu">
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            isActive ? 'nav-item active' : 'nav-item'
          }
        >
          <MdDashboard className="nav-icon" />
          <span>{isSideNavOpen ? "Dashboard" : ""}</span>
        </NavLink>

        <NavLink
          to="/admin/donations"
          className={({ isActive }) =>
            isActive ? 'nav-item active' : 'nav-item'
          }
        >
          <FaDonate className="nav-icon" />
          <span>{isSideNavOpen ? "Donations" : ""}</span>
        </NavLink>
      </div>

    </div>
  );
};

export default AdminSideNav;
