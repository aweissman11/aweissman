import React, { useState, useEffect } from 'react';
import {
  About,
  Background,
  Experience,
  What,
  Org
} from './AboutMe.styled';
import { SimpleDiv, Title, AnimateInDiv } from '../../Shared/Shared.styled';
import { setVisOnScroll } from '../../Shared/Shared.helpers';

const AboutMe = () => {
  let [vis1, setVis1] = useState(false);
  let [vis2, setVis2] = useState(false);
  let [vis3, setVis3] = useState(false);
  let [vis4, setVis4] = useState(false);
  let [vis5, setVis5] = useState(false);
  let [vis6, setVis6] = useState(false);
  let [vis7, setVis7] = useState(false);
  let [vis8, setVis8] = useState(false);
  let [vis9, setVis9] = useState(false);
  let [vis10, setVis10] = useState(false);
  let [vis11, setVis11] = useState(false);
  let [vis12, setVis12] = useState(false);
  let [vis13, setVis13] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setVisOnScroll('about-1', [setVis1]));
    window.addEventListener('scroll', () => setVisOnScroll('about-2', [setVis2]));
    window.addEventListener('scroll', () => setVisOnScroll('about-3', [setVis3]));
    window.addEventListener('scroll', () => setVisOnScroll('about-4', [setVis4]));
    window.addEventListener('scroll', () => setVisOnScroll('about-5', [setVis5]));
    window.addEventListener('scroll', () => setVisOnScroll('about-6', [setVis6]));
    window.addEventListener('scroll', () => setVisOnScroll('about-7', [setVis7]));
    window.addEventListener('scroll', () => setVisOnScroll('about-8', [setVis8]));
    window.addEventListener('scroll', () => setVisOnScroll('about-9', [setVis9]));
    window.addEventListener('scroll', () => setVisOnScroll('about-10', [setVis10]));
    window.addEventListener('scroll', () => setVisOnScroll('about-11', [setVis11]));
    window.addEventListener('scroll', () => setVisOnScroll('about-12', [setVis12]));
    window.addEventListener('scroll', () => setVisOnScroll('about-13', [setVis13]));

    return () => {
      window.removeEventListener('scroll');
    }
  }, [])

  return (
    <SimpleDiv>
      <About id='about-1' isVisible={vis1}>I'm Aaron, a React specialist with a background in sales and consulting.</About>
      <About id='about-2' isVisible={vis2}>I bring a unique blend of technical skill used building and developing </About>
      <About id='about-3' isVisible={vis3}>full stack, easy to use applications, </About>
      <About id='about-4' isVisible={vis4}>as well as strong communication skills </About>
      <About id='about-5' isVisible={vis5}>learned through the establishment and maintenance of long lasting client relationships.</About>

      <Background>
        <Experience>
          <AnimateInDiv id='about-6' isVisible={vis6}>
            <Title>Studies</Title>
          </AnimateInDiv>
          <AnimateInDiv id='about-7' isVisible={vis7}>
            <What top>2018</What>
            <What>Software & Design</What>
            <Org>TURING</Org>
          </AnimateInDiv>
          <AnimateInDiv id='about-8' isVisible={vis8}>
            <What top>2007-2011</What>
            <What>BA in History</What>
            <Org>U of ROCHESTER</Org>
          </AnimateInDiv>
          <AnimateInDiv id='about-9' isVisible={vis9}></AnimateInDiv>
        </Experience>
        <Experience>
          <AnimateInDiv id='about-10' isVisible={vis10}>
            <Title>Work</Title>
          </AnimateInDiv>
          <AnimateInDiv id='about-11' isVisible={vis11}>
            <What top>2019-present</What>
            <What>Software Engineer</What>
            <Org>CONNEKT INC.</Org>
          </AnimateInDiv>
          <AnimateInDiv id='about-12' isVisible={vis12}>
            <What top>2017-2018</What>
            <What>Solar Consulting</What>
            <Org>AURIC ENERGY</Org>
          </AnimateInDiv>
          <AnimateInDiv id='about-13' isVisible={vis13}>
            <What top>2013-2017</What>
            <What>Global Education</What>
            <Org>EF EDUCATION</Org>
          </AnimateInDiv>
        </Experience>
      </Background>
    </SimpleDiv>
  );
}

export default AboutMe;