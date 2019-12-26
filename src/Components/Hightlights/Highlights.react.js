import React from 'react';
import { HighWrapper, Highlight, Project } from './Highlights.styled';
import { AbText, GraySpan, AbWrapper } from '../Abstract/Abstract.styled';

const Highlights = () => {
  return (<>
    <HighWrapper>
      <Project>
        <Highlight project='movieTracker' />
      </Project>
      <Project>
        <Highlight project='goinCampin' />
      </Project>
      <Project>
        <Highlight project='wedding' />
      </Project>
      <Project>
        <Highlight project='pallete' />
      </Project>
    </HighWrapper>

    <AbWrapper>
      <AbText>Always looking for</AbText>
      <AbText>new things to build</AbText>
      <AbText>and <GraySpan>CREATE</GraySpan></AbText>
    </AbWrapper>
  </>);
}

export default Highlights;