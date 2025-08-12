import React from 'react';
import logo from '../assets/uktbcLogo.png';
import { Button } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="header col-sm-12">
      <img src={logo} alt="UKTBC Logo" className="col-sm-1 logo" />
      <ul className="nav-list">
        <li>
          <NavLink className="nav-item" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-item" to="/about">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-item" to="/services">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-item" to="/events">
            Events
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-item" to="/projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-item" to="/reports">
            Reports
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-item" to="/contact-us">
            Contacts
          </NavLink>
        </li>
      </ul>
      <Button
        type="primary"
        shape="round"
        className="cta"
        onClick={() => navigate('/donate-now')}
      >
        Donate Now
      </Button>
    </div>
  );
};

export default Header;
