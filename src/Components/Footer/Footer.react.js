import React from 'react';
import { FootWrapper, SiteInfo } from './Footer.styled';
import { LinkText } from '../../Shared/Shared.styled';

const Footer = () => {
  return (<>
    <FootWrapper>
      <LinkText href='https://www.linkedin.com/in/aaron-weissman/' rel="noopener noreferrer">LinkedIn</LinkText>
      <LinkText href='https://github.com/aweissman11' target='_blank'>GitHub</LinkText>
      <LinkText type="application/pdf" href='https://drive.google.com/file/d/1qIDsCJ8l1nv22He5-26ejyM7xSLLct-S/view' target='_blank' rel="noopener noreferrer">Resume</LinkText>
    </FootWrapper>
    <SiteInfo>This site was built using React. See the code:&nbsp;
    <LinkText href='https://github.com/aweissman11/aweissman' target='_blank' rel="noopener noreferrer">GitHub Repo</LinkText>
    </SiteInfo>
  </>);
}

export default Footer;