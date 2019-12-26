import React, { useEffect, useState } from 'react';

import { NavItem, NavWrapper, NavList } from './NavHeader.styled';
import { scrollToSection, handleScrollHeader } from './Nav.helpers';


const NavHeader = () => {
  useEffect(() => {
    window.addEventListener('scroll', handleScrollHeader);
  }, [])

  let scrollPos = 0;
  let [showHeader, toggleHeader] = useState(true);

  const handleScrollHeader = () => {
    let fromTop = (document.body.getBoundingClientRect()).top;
    if (fromTop > scrollPos) {
      toggleHeader(true);
    } else {
      if (scrollPos < 0) {
        toggleHeader(false);
      }
    }

    scrollPos = fromTop;
  }

  return (
    <NavWrapper showHeader={showHeader}>
      <NavList>
        <NavItem home>Aaron</NavItem>
        <NavItem keepRight onClick={scrollToSection('highlights-section')}>Work.</NavItem>
        <NavItem fullRight onClick={scrollToSection('about-section')}>About.</NavItem>
      </NavList>
    </NavWrapper>
  );
}

export default NavHeader;