import React from 'react';
import headerLogo from '../images/headerLogo.svg';

function Header() {
  return (
    <header className="header container">
      <img
        className="header__logo"
        src={headerLogo}
      />
    </header>
  );
}

export default Header;