import React from 'react';
import HeaderLogo from 'assets/logo.svg';
import 'styles/Header.scss';

const Header: React.FC = () => {
  return (
    <div className="HeaderLogoArea">
      <img src={HeaderLogo} className="HeaderLogo" alt="HeaderLogo" />
    </div>
  );
};

export default Header;
