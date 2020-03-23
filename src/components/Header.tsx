import React, { useState, useCallback } from 'react';
import HeaderLogo from 'assets/logo.svg';

const Header: React.FC = () => {
  return (
    <div>
      <img
        src={HeaderLogo}
        className="HeaderLogo"
        alt="HeaderLogo"
        style={{ height: '40px', width: '40px' }}
      />
    </div>
  );
};

export default Header;
