import React, { useEffect } from 'react';

import { NavItem, NavWrapper, NavList } from './NavHeader.styled';
import { scrollToSection, handleScrollHeader } from './Nav.helpers';

const NavHeader = () => {
  useEffect(() => {
    window.addEventListener('scroll', handleScrollHeader);
    // window.onscroll(handleScrollHeader);
  }, [])

  return (<NavWrapper>
    <NavList>
      <NavItem home>Aaron</NavItem>
      <NavItem keepRight onClick={scrollToSection('highlights-section')}>Work.</NavItem>
      <NavItem fullRight onClick={scrollToSection('about-section')}>About.</NavItem>
    </NavList>
  </NavWrapper>);
}

export default NavHeader;