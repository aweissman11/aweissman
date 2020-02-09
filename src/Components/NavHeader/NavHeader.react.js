import React, { useEffect, useState, useContext } from 'react';

import { NavItem, NavWrapper, NavList, SwitchToggle, TinyText } from './NavHeader.styled';
import { scrollToSection } from './Nav.helpers';
import { ThemeContext } from '../../Contexts/ThemeContext.react';
import DarkModeSwitch from '../DarkModeSwitch/DarkModeSwitch.react';


const NavHeader = () => {
  const { theme } = useContext(ThemeContext);

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
    <NavWrapper showHeader={showHeader} id='nav-header' theme={theme}>
      <NavList>
        <NavItem home onClick={scrollToSection('nav-header')} theme={theme}>Aaron</NavItem>
        <NavItem keepRight onClick={scrollToSection('highlights-section')} theme={theme}>Work.</NavItem>
        <NavItem fullRight onClick={scrollToSection('about-section')} theme={theme}>About.</NavItem>
        <DarkModeSwitch />
      </NavList>
    </NavWrapper>
  );
}

export default NavHeader;