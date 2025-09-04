import React, { useEffect, useState } from "react";
import { FaUserCircle, FaDonate, FaProjectDiagram } from "react-icons/fa";
import { MdDashboard, MdEvent } from "react-icons/md";
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
  // - If closed → return null (hide sidebar)
  // - If open → only icons + avatar
  if (isMobile && !isSideNavOpen) {
    return null;
  }

  return (
    <div className="admin-sidebar col-sm-12">
      {/* Profile Section */}
      <div className="admin-profile-card col-sm-12">
        <div className="profile-header">
          <FaUserCircle className="profile-icon" />
          {/* Show text only on desktop with open sidebar */}
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
      </div>
    </div>
  );
};

export default AdminSideNav;
