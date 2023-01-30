import React, { memo } from 'react';

import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="site-name">News</h1>
    </header>
  );
}

export default memo(Header);
