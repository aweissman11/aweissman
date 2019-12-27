import React, { useEffect, useState } from 'react';

import { NavItem, NavWrapper, NavList } from './NavHeader.styled';
import { scrollToSection } from './Nav.helpers';


const NavHeader = () => {
  useEffect(() => {
    window.setTimeout(() => {
      toggleHeader(true)
      window.addEventListener('scroll', handleScrollHeader);
    }, 1000);
  }, [])

  let scrollPos = 0;
  let [showHeader, toggleHeader] = useState(false);

  const handleScrollHeader = () => {
    let fromTop = (document.body.getBoundingClientRect()).top;
    if (fromTop > scrollPos) {
      if (!showHeader) {
        toggleHeader(true);
      }
    } else {
      if (scrollPos < 0) {
        toggleHeader(false);
      }
    }

    scrollPos = fromTop;
  }

  return (
    <NavWrapper showHeader={showHeader} id='nav-header'>
      <NavList>
        <NavItem home onClick={scrollToSection('nav-header')}>Aaron</NavItem>
        <NavItem keepRight onClick={scrollToSection('highlights-section')}>Work.</NavItem>
        <NavItem fullRight onClick={scrollToSection('about-section')}>About.</NavItem>
      </NavList>
    </NavWrapper>
  );
}

export default NavHeader;