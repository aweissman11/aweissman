import React from 'react';
import {
  AboutWrapper,
  About,
  Background,
  Experience,
  Type,
  What,
  Org,
  SingleExp
} from './AboutMe.styled';

const AboutMe = () => {
  return (
    <AboutWrapper>
      <About>I'm Aaron, a React specialist with a background in sales and consulting.</About>
      <About>I bring a unique blend of technical skill used building and developing </About>
      <About>full stack, easy to use applications, </About>
      <About>as well as strong communication skills </About>
      <About>learned through the establishment and maintenance of long lasting client relationships.</About>

      <Background>
        <Experience>
          <SingleExp>
            <Type>Studies</Type>
          </SingleExp>
          <SingleExp>
            <What top>2018</What>
            <What>Software & Design</What>
            <Org>TURING</Org>
          </SingleExp>
          <SingleExp>
            <What top>2007-2011</What>
            <What>BA in History</What>
            <Org>U of ROCHESTER</Org>
          </SingleExp>
          <SingleExp></SingleExp>
        </Experience>
        <Experience>
          <SingleExp>
            <Type>Work</Type>
          </SingleExp>
          <SingleExp>
            <What top>2019-present</What>
            <What>Software Engineer</What>
            <Org>CONNEKT INC.</Org>
          </SingleExp>
          <SingleExp>
            <What top>2017-2018</What>
            <What>Solar Consulting</What>
            <Org>AURIC ENERGY</Org>
          </SingleExp>
          <SingleExp>
            <What top>2013-2017</What>
            <What>Global Education</What>
            <Org>EF EDUCATION</Org>
          </SingleExp>
        </Experience>
      </Background>
    </AboutWrapper>
  );
}

export default AboutMe;