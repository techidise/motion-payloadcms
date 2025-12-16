'use client';

import { Home } from 'lucide-react';
import { FloatingNav } from '../ui/FloatingNavbar';

const NavBar = () => {
  return (
    <FloatingNav navItems={[{ name: 'Home', link: '/', icon: <Home /> }]} />
  );
};

export default NavBar;
