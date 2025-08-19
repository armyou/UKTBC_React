import React from 'react';
import logo from '../../assets/uktbcLogo.png';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="footer col-sm-12">
        <div className="brand col-sm-3">
          <img src={logo} alt="UKTBC Logo" className="logo" />
          <p className="brand-name">UK Telugu Brahmin Community</p>
          <Button
            type="primary"
            shape="round"
            className="cta col-sm-8"
            onClick={() => navigate('/donate-now')}
          >
            Donate Now
          </Button>
        </div>

        <div className="quick-links col-sm-3">
          <p className="sub-heading">Quick Links</p>
          <div className="footer-links">
            <p className="paragraph" onClick={() => navigate('/')}>Home</p>
            <p className="paragraph" onClick={() => navigate('/about')}>About Us</p>
            <p className="paragraph" onClick={() => navigate('/services')}>Services</p>
            <p className="paragraph" onClick={() => navigate('/events')}>Events</p>
            <p className="paragraph" onClick={() => navigate('/projects')}>Projects</p>
            <p className="paragraph" onClick={() => navigate('/reports')}>Reports</p>
          </div>
        </div>

        <div className="quick-links col-sm-3">
          <p className="sub-heading">Company Policies</p>
          <div className="footer-links">
            <p className="paragraph" onClick={() => navigate('/')}>Terms & Conditions</p>
            <p className="paragraph" onClick={() => navigate('/about')}>Privacy Policies</p>
            <p className="paragraph" onClick={() => navigate('/services')}>Accessibility Statement</p>
          </div>
        </div>

        <div className="quick-links col-sm-3">
          <p className="sub-heading">Social Media</p>
          <div className="footer-links">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="paragraph"
            >
              <FaLinkedin size={20} /> LinkedIn
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="paragraph"
            >
              <FaYoutube size={20} /> YouTube
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="paragraph"
            >
              <FaFacebook size={20} /> Facebook
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="paragraph"
            >
              <FaInstagram size={20} /> Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
