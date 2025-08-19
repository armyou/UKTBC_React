import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface AdminHeaderProps {
  toggleNav: () => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({
  toggleNav
}) => {

  const navigate = useNavigate();

  const handleLogout = async () => {
    navigate("/login")
  }

  return (
    <div className="admin-header col-sm-12">
      {/* Left: Hamburger Menu */}
      <div className="header-left">
        <FaBars className="hamburger-icon"  onClick={toggleNav}/>
        <span className="header-title">UKTBC</span>
      </div>

      {/* Right: Logout Button */}
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminHeader;
