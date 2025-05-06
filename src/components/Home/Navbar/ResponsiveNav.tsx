'use client';

import { useState } from 'react';
import MobileNav from './MobileNav';
import Nav from './Nav';

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <header>
      <Nav openNav={showNavHandler} />
      <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </header>
  );
};
export default ResponsiveNav;
