import React, { useState, useEffect } from "react";
import AdminSideNav from "../../components/adminComponents/adminSideNav";
import AdminHeader from "../../components/adminComponents/adminHeader";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../adminPages/adminDashboard";
import AdminDonations from "../adminPages/adminDonations";
import ProtectedRoute from "../../components/adminComponents/adminProtectedRoutes";
import "./css/adminLayout.css";
import AdminEvents from "../adminPages/adminEvents";
import AdminProjects from "../adminPages/adminProjects";
import AdminProjectDetail from "../../components/adminComponents/adminProjectDetails";
import AdminEventDetails from "../../components/adminComponents/adminEventDetails";
import AdminResources from "../adminPages/adminResources";
import AdminVipravaani from "../adminPages/adminVipravaani";
import AdminPurohiths from "../adminPages/adminPurohiths";
import AdminMadiVantalu from "../adminPages/adminMadiVantalu";

const AdminLayout: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // track window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768; // breakpoint for mobile

  return (
    <div className="admin-layout col-sm-12">
      {/* Sidebar */}
      <div
        className={
          isMobile
            ? isNavOpen
              ? "admin-sideNav col-1" // mobile open
              : "d-none" // mobile closed = hide
            : isNavOpen
            ? "admin-sideNav col-sm-2" // desktop open
            : "admin-sideNav col-sm-1" // desktop closed
        }
      >
        <AdminSideNav isSideNavOpen={isNavOpen} />
      </div>

      {/* Main Content */}
      <div
        className={
          isMobile && isNavOpen
            ? "admin-full-content col-11"
            : isMobile && !isNavOpen
            ? "admin-full-content col-12"
            : isNavOpen
            ? "admin-full-content col-sm-10"
            : "admin-full-content col-sm-11"
        }
      >
        <AdminHeader toggleNav={toggleNav} />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/donations"
            element={
              <ProtectedRoute>
                <AdminDonations />
              </ProtectedRoute>
            }
          />
          <Route
            path="/events"
            element={
              <ProtectedRoute>
                <AdminEvents />
              </ProtectedRoute>
            }
          />
          <Route
            path="/projects"
            element={
              <ProtectedRoute>
                <AdminProjects />
              </ProtectedRoute>
            }
          />
          <Route
            path="/project/:id"
            element={
              <ProtectedRoute>
                <AdminProjectDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/event/:id"
            element={
              <ProtectedRoute>
                <AdminEventDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/resources"
            element={
              <ProtectedRoute>
                <AdminResources />
              </ProtectedRoute>
            }
          />
          <Route
            path="/vipravaani"
            element={
              <ProtectedRoute>
                <AdminVipravaani />
              </ProtectedRoute>
            }
          />
          <Route
            path="/purohiths"
            element={
              <ProtectedRoute>
                <AdminPurohiths />
              </ProtectedRoute>
            }
          />
          <Route
            path="/madi-vantalu"
            element={
              <ProtectedRoute>
                <AdminMadiVantalu />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default AdminLayout;
