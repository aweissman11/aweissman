import React from 'react';
import { FootWrapper, SiteInfo } from './Footer.styled';
import { LinkText } from '../../Shared/Shared.styled';

const Footer = () => {
  return (<>
    <FootWrapper>
      <LinkText href='https://www.linkedin.com/in/aaron-weissman/' target='_blank'>LinkedIn</LinkText>
      <LinkText href='https://github.com/aweissman11' target='_blank'>GitHub</LinkText>
      <LinkText type="application/pdf" href='https://drive.google.com/file/d/1eDt5lOJ8JIjgNND5nMJkuIGTSubj9rZ5/view?usp=sharing' target='_blank'>Resume</LinkText>
    </FootWrapper>
    <SiteInfo>This site was built using React. See the code:&nbsp;
    <LinkText href='https://github.com/aweissman11/aweissman' target='_blank'>GitHub Repo</LinkText>
    </SiteInfo>
  </>);
}

export default Footer;