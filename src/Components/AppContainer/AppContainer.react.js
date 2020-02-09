import React, { useContext } from 'react';
// Content
import NavHeader from '../NavHeader/NavHeader.react';
import { AppWrapper, Break, MainApp } from './AppContainer.styled';
import Abstract from '../Abstract/Abstract.react';
import Highlights from '../Hightlights/Highlights.react';
import AboutMe from '../AboutMe/AboutMe.react';
import Footer from '../Footer/Footer.react';
import { ThemeContext } from '../../Contexts/ThemeContext.react';

const AppContainer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <AppWrapper className="App" theme={theme}>
      <NavHeader />
      <MainApp theme={theme}>
        <Abstract />
        <Break id='highlights-section' theme={theme}/>
        <Highlights />
        <Break id='about-section' theme={theme} />
        <AboutMe />
        <Break theme={theme} />
        <Footer />
      </MainApp>
    </AppWrapper>
  );
}

export default AppContainer;
