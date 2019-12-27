import React, { useState, useEffect } from 'react';
import { HighWrapper, Highlight, Project, HoverBox, GraySpan } from './Highlights.styled';
import { AbWrapper, BigText, Title, LinkText } from '../../Shared/Shared.styled';
import { setVisOnScroll } from '../../Shared/Shared.helpers';

const Highlights = () => {
  let [vis1, setVis1] = useState(false);
  let [vis2, setVis2] = useState(false);
  let [vis3, setVis3] = useState(false);
  let [vis4, setVis4] = useState(false);
  let [vis5, setVis5] = useState(false);
  let [vis6, setVis6] = useState(false);
  let [vis7, setVis7] = useState(false);


  useEffect(() => {
    window.addEventListener('scroll', () => setVisOnScroll('highlight-1', [setVis1]));
    window.addEventListener('scroll', () => setVisOnScroll('highlight-2', [setVis2]));
    window.addEventListener('scroll', () => setVisOnScroll('highlight-3', [setVis3]));
    window.addEventListener('scroll', () => setVisOnScroll('highlight-4', [setVis4]));
    window.addEventListener('scroll', () => setVisOnScroll('highlight-5', [setVis5]));
    window.addEventListener('scroll', () => setVisOnScroll('highlight-6', [setVis6]));
    window.addEventListener('scroll', () => setVisOnScroll('highlight-7', [setVis7]));

    return () => {
      window.removeEventListener('scroll');
    }
  }, [])

  return (<>
    <HighWrapper>
      <Project id='highlight-1' isVisible={vis1}>
        <Highlight className='highlight' project='movieTracker' />
        <HoverBox className='hover-box'>
          <Title whiteText >movieTracker</Title>
          <LinkText
            whiteText
            target='_blank'
            rel="noopener noreferrer"
            href='https://github.com/aweissman11/frontend-movie-tracker'
          >See the code</LinkText>
        </HoverBox>
      </Project>
      <Project id='highlight-2' isVisible={vis2}>
        <Highlight className='highlight' project='wedding' />
        <HoverBox className='hover-box'>
          <Title whiteText >Wedding Site</Title>
          <LinkText
            whiteText
            topLink
            target='_blank'
            rel="noopener noreferrer"
            href='http://chelseyandaaronsbigadventure.com/'
          >Visit site</LinkText>
          <LinkText
            whiteText
            target='_blank'
            rel="noopener noreferrer"
            href='https://github.com/aweissman11/ba_front'
          >See the code</LinkText>
        </HoverBox>
      </Project>
      <Project id='highlight-3' isVisible={vis3}>
        <Highlight className='highlight' project='goinCampin' />
        <HoverBox className='hover-box'>
          <Title whiteText >Goin Campin</Title>
          <LinkText
            whiteText
            target='_blank'
            rel="noopener noreferrer"
            href='https://github.com/aweissman11/goin-campin'
          >See the code</LinkText>
        </HoverBox>
      </Project>
      <Project id='highlight-4' isVisible={vis4}>
        <Highlight className='highlight' project='pallete' />
        <HoverBox className='hover-box'>
          <Title whiteText >Pallete Picker</Title>
          <LinkText
            whiteText
            topLink
            target='_blank'
            rel="noopener noreferrer"
            href='http://palettepals.herokuapp.com/#'
          >Visit site</LinkText>
          <LinkText
            whiteText
            target='_blank'
            rel="noopener noreferrer"
            href='https://github.com/aweissman11/palette-picker'
          >See the code</LinkText>
        </HoverBox>
      </Project>
    </HighWrapper>

    <AbWrapper>
      <BigText id='highlight-5' isVisible={vis5}>Always looking for</BigText>
      <BigText id='highlight-6' isVisible={vis6}>new things to build</BigText>
      <BigText id='highlight-7' isVisible={vis7}>and <GraySpan>CREATE</GraySpan></BigText>
    </AbWrapper>
  </>);
}

export default Highlights;