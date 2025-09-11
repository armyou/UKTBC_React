import React, { useEffect, useState } from "react";
import {
  FaUserCircle,
  FaDonate,
  FaProjectDiagram,
  FaBook,
  FaUserTie, // for Purohiths
  FaUtensils, // for Madi Vantalu
} from "react-icons/fa";
import { MdDashboard, MdEvent, MdRecordVoiceOver } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./css/sidenav.css";

interface AdminSideNavProps {
  isSideNavOpen: boolean;
}

const AdminSideNav: React.FC<AdminSideNavProps> = ({ isSideNavOpen }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768; // breakpoint for mobile

  // Mobile logic:
  if (isMobile && !isSideNavOpen) {
    return null;
  }

  return (
    <div className={`admin-sidebar col-sm-12 ${!isSideNavOpen ? 'collapsed' : ''}`}>
      {/* Profile Section */}
      <div className="admin-profile-card col-sm-12">
        <div className="profile-header">
          <FaUserCircle className="profile-icon" />
          {!isMobile && isSideNavOpen ? (
            <div className="detail">
              <span className="profile-name">Admin</span>
              <div className="view-profile">View Profile</div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="admin-nav-menu">
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            isActive ? "admin-nav-item active" : "admin-nav-item"
          }
        >
          <MdDashboard className="nav-icon" />
          {!isMobile && isSideNavOpen ? <span>Dashboard</span> : null}
        </NavLink>

        <NavLink
          to="/admin/donations"
          className={({ isActive }) =>
            isActive ? "admin-nav-item active" : "admin-nav-item"
          }
        >
          <FaDonate className="nav-icon" />
          {!isMobile && isSideNavOpen ? <span>Donations</span> : null}
        </NavLink>

        <NavLink
          to="/admin/events"
          className={({ isActive }) =>
            isActive ? "admin-nav-item active" : "admin-nav-item"
          }
        >
          <MdEvent className="nav-icon" />
          {!isMobile && isSideNavOpen ? <span>Events</span> : null}
        </NavLink>

        <NavLink
          to="/admin/projects"
          className={({ isActive }) =>
            isActive ? "admin-nav-item active" : "admin-nav-item"
          }
        >
          <FaProjectDiagram className="nav-icon" />
          {!isMobile && isSideNavOpen ? <span>Projects</span> : null}
        </NavLink>

        {/* Resources */}
        <NavLink
          to="/admin/resources"
          className={({ isActive }) =>
            isActive ? "admin-nav-item active" : "admin-nav-item"
          }
        >
          <FaBook className="nav-icon" />
          {!isMobile && isSideNavOpen ? <span>Resources</span> : null}
        </NavLink>

        {/* Vipravaani */}
        <NavLink
          to="/admin/vipravaani"
          className={({ isActive }) =>
            isActive ? "admin-nav-item active" : "admin-nav-item"
          }
        >
          <MdRecordVoiceOver className="nav-icon" />
          {!isMobile && isSideNavOpen ? <span>Vipravaani</span> : null}
        </NavLink>

        {/* Purohiths */}
        <NavLink
          to="/admin/purohiths"
          className={({ isActive }) =>
            isActive ? "admin-nav-item active" : "admin-nav-item"
          }
        >
          <FaUserTie className="nav-icon" />
          {!isMobile && isSideNavOpen ? <span>Purohiths</span> : null}
        </NavLink>

        {/* Madi Vantalu */}
        <NavLink
          to="/admin/madi-vantalu"
          className={({ isActive }) =>
            isActive ? "admin-nav-item active" : "admin-nav-item"
          }
        >
          <FaUtensils className="nav-icon" />
          {!isMobile && isSideNavOpen ? <span>Madi Vantalu</span> : null}
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSideNav;
