import React from "react";
import logo from "../../assets/uktbcLogo.png";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import "./css/footer.css";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="footer_container col-md-12">
        <div className="footer col-md-10">
          <div className="brand ">
            <div className="footer_image">
              <img
                src={logo}
                alt="UKTBC Logo"
                className="logo"
                style={{ width: 235 }}
              />
            </div>
            <div className="footer_btn">
              <Button
                type="primary"
                shape="round"
                className="cta col-sm-8"
                style={{ fontSize: 16, fontWeight: 600, width: 235 }}
                onClick={() => navigate("/donate-now")}
              >
                Donate Now
              </Button>
            </div>
          </div>

          <div className="quick-links ">
            <h2 className="sub-heading">Quick Links</h2>
            <div className="footer-links">
              <p className="paragraph" onClick={() => navigate("/")}>
                Home
              </p>
              <p className="paragraph" onClick={() => navigate("/about")}>
                About Us
              </p>
              <p className="paragraph" onClick={() => navigate("/services")}>
                Services
              </p>
              <p className="paragraph" onClick={() => navigate("/events")}>
                Events
              </p>
              <p className="paragraph" onClick={() => navigate("/projects")}>
                Projects
              </p>
              <p className="paragraph" onClick={() => navigate("/Vipravaani")}>
                Vipravaani
              </p>
            </div>
          </div>

          <div className="quick-links ">
            <h2 className="sub-heading">Company Policies</h2>
            <div className="footer-links">
              <p className="paragraph" onClick={() => navigate("/")}>
                Terms & Conditions
              </p>
              <p className="paragraph" onClick={() => navigate("/about")}>
                Privacy Policies
              </p>
              <p className="paragraph" onClick={() => navigate("/")}>
                Cookies Policy
              </p>
              <p className="paragraph" onClick={() => navigate("/services")}>
                Accessibility Statement
              </p>
            </div>
          </div>

          <div className="quick-links ">
            <h2 className="sub-heading">Social Media</h2>
            <div className="footer-links">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="paragraph-link"
              >
                <FaLinkedin size={20} /> LinkedIn
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="paragraph-link"
              >
                <FaYoutube size={20} /> YouTube
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="paragraph-link"
              >
                <FaFacebook size={20} /> Facebook
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="paragraph-link"
              >
                <FaInstagram size={20} /> Instagram
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer_base col-md-12">
          <div className="copy_right">
            <h5>© 2025 UKTBC. All Rights Reserved.</h5>
          </div>
          <div className="visitors">
            <h5>
              UKTBC Website Visitors{" "}
              <span className="visitor-count">34898</span>
            </h5>
          </div>
          <div className="charity">
            <h5>
              <a
                className="charity_web_link"
                href="https://register-of-charities.charitycommission.gov.uk/en/charity-search/-/charity-details/5224522?_uk_gov_ccew_onereg_charitydetails_web_portlet_CharityDetailsPortlet_organisationNumber=5224522"
              >
                Charity registered in England and Wales (No. 1205566)
              </a>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
