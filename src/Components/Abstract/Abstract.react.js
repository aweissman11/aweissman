import React, { useEffect, useState, useContext } from 'react';
import { AbInfo, AbInfoWrapper, InfoNugget } from './Abstract.styled';
import { DownArrow } from '../Icons/DownArrow.react';
import { scrollToSection } from '../NavHeader/Nav.helpers';
import { setVisOnScroll } from '../../Shared/Shared.helpers';
import { BigText, AbWrapper } from '../../Shared/Shared.styled';
import { ThemeContext } from '../../Contexts/ThemeContext.react';

const Abstract = () => {
  const { theme } = useContext(ThemeContext);

  let [vis1, setVis1] = useState(false);
  let [vis2, setVis2] = useState(false);
  let [vis3, setVis3] = useState(false);
  let [vis4, setVis4] = useState(false);
  let [vis5, setVis5] = useState(false);
  let [vis6, setVis6] = useState(false);
  let [vis7, setVis7] = useState(false);

  useEffect(() => {
    setVis1(true);
    window.setTimeout(() => setVis2(true), 200);
    window.setTimeout(() => setVis3(true), 400);
    window.setTimeout(() => setVis4(true), 600);

    window.addEventListener('scroll', () => setVisOnScroll('ab-info-5', [setVis5]));
    window.addEventListener('scroll', () => setVisOnScroll('ab-info-6', [setVis6]));
    window.addEventListener('scroll', () => setVisOnScroll('ab-info-7', [setVis7]));

    return () => {
      window.removeEventListener('scroll');
    }
  }, [])

  return (
    <AbWrapper>
      <BigText theme={theme} isVisible={vis1} >Full stack software engineer</BigText>
      <BigText theme={theme} isVisible={vis2} >Loves dogs, hiking</BigText>
      <BigText theme={theme} isVisible={vis3} >and building websites.</BigText>
      <BigText theme={theme} isVisible={vis4} >
        <span onClick={scrollToSection('highlights-section')} >
          <DownArrow />
        </span>
      </BigText>

      <AbInfoWrapper>
        <InfoNugget>
          <AbInfo theme={theme} id='ab-info-5' isVisible={vis5} >Location</AbInfo>
          <AbInfo theme={theme} isVisible={vis5} info>Denver, CO</AbInfo>
        </InfoNugget>
        <InfoNugget>
          <AbInfo theme={theme} id='ab-info-6' isVisible={vis6} >Contact</AbInfo>
          <AbInfo theme={theme} isVisible={vis6} info>weissman.aaron@gmail.com</AbInfo>
        </InfoNugget>
        <InfoNugget>
          <AbInfo theme={theme} id='ab-info-7' isVisible={vis7} >Repos</AbInfo>
          <AbInfo theme={theme} isVisible={vis7} info>
            <a href='https://github.com/aweissman11?tab=repositories' target='_blank' rel="noopener noreferrer">GitHub</a>
          </AbInfo>
        </InfoNugget>
      </AbInfoWrapper>
    </AbWrapper>
  );
}

export default Abstract;