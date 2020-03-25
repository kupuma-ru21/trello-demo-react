import React from 'react';
import HeaderLogo from 'assets/logo.svg';

const Header: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={HeaderLogo}
        className="HeaderLogo"
        alt="HeaderLogo"
        style={{ height: '60px', width: '60px' }}
      />
    </div>
  );
};

export default Header;
