import React, { useState } from "react";
import logo from "../../assets/uktbcLogo.png";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

import "./css/header.css";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header col-sm-12">
      <div className="header-row-1 col-sm-12">
        {/* Logo + Title */}
        <div className="header-brand col-sm-6">
          <div className="header_left_col">
            <div className="header_image">
              <img
                src={logo}
                alt="UKTBC Logo"
                className="col-sm-1 logo"
                style={{ width: 80, height: 80 }}
              />
            </div>
            <div className="brand-title">
              <p className="h3" style={{ fontWeight: 600, margin: 0 }}>
                UK Telugu Brahmin Community
              </p>
              <p className="h5" style={{ fontWeight: 500, margin: 0 }}>
                Registered Charity (No: 1205566)
              </p>
            </div>
          </div>
          <div className="header_right_col">
            <div className="header_btn">
              <Button
                type="primary"
                shape="round"
                className="hbtn col-sm-8"
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  width: 139,
                  height: 46,
                  borderRadius: 8,
                }}
                onClick={() => navigate("/donate-now")}
              >
                Donate Now
              </Button>
            </div>
            <div className="header_icon">
              <Icon icon="lucide:user-lock" width="35" height="35" />
            </div>

            {/* 👇 Add hamburger here */}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon icon="mdi:menu" width="30" height="30" />
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className={`header-nav col-sm-6 ${menuOpen ? "open" : ""}`}>
          <nav className="nav-links">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="/projects">Projects</a>
            <a href="/events">Events</a>
            <a href="/vipravaani">Vipravaani</a>
            <a href="/resources">Resources</a>
            <a href="/contact-us">Contact Us</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
