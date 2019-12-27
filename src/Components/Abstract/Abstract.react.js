import React from 'react';
import { AbWrapper, AbText, AbInfo, AbInfoWrapper, InfoNugget } from './Abstract.styled';
import { DownArrow } from '../Icons/DownArrow.react';
import { scrollToSection } from '../NavHeader/Nav.helpers';

const Abstract = () => {
  return (
    <AbWrapper>
      <AbText>Full stack software engineer</AbText>
      <AbText>crafting user friendly</AbText>
      <AbText>applications and experiences.</AbText>
      <AbText>
        <span onClick={scrollToSection('highlights-section')} >
          <DownArrow />
        </span>
      </AbText>

      <AbInfoWrapper>
        <InfoNugget>
          <AbInfo>Location</AbInfo>
          <AbInfo info>Denver, CO</AbInfo>
        </InfoNugget>
        <InfoNugget>
          <AbInfo>Contact</AbInfo>
          <AbInfo info>weissman.aaron@gmail.com</AbInfo>
        </InfoNugget>
        <InfoNugget>
          <AbInfo>Repos</AbInfo>
          <AbInfo info>
            <a href='https://github.com/aweissman11?tab=repositories' target='_blank'>GitHub</a>
          </AbInfo>
        </InfoNugget>
      </AbInfoWrapper>
    </AbWrapper>
  );
}

export default Abstract;