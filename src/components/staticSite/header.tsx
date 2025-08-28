import React from 'react';
import logo from '../../assets/uktbcLogo.png';

const Header: React.FC = () => {

  return (
    <div className="header col-sm-12">
      <div className="header-row-1 col-sm-12">
        <div className="header-brand col-sm-8">
          <img src={logo} alt="UKTBC Logo" className="col-sm-1 logo" />
          <div className="brand-title">
            <p className="h3">UK Telugu Brahmin Community</p>
            <p className="h4">{"Registered Charity (No: 1205566)"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;