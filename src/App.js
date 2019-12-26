import React from 'react';
// Content
import NavHeader from './Components/NavHeader/NavHeader.react';
import { AppWrapper, Break, MainApp } from './App.styled';
import Abstract from './Components/Abstract/Abstract.react';
import Highlights from './Components/Hightlights/Highlights.react';
import AboutMe from './Components/AboutMe/AboutMe.react';
import Footer from './Components/Footer/Footer.react';

function App() {
  return (
    <AppWrapper className="App">
      <NavHeader />
      <MainApp>
        <Abstract />
        <Break id='highlights-section' />
        <Highlights />
        <Break id='about-section' />
        <AboutMe />
        <Break />
        <Footer />
      </MainApp>
    </AppWrapper>
  );
}

export default App;
