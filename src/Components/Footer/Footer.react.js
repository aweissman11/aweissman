import React from 'react';
import { FootWrapper, FootLink, SiteInfo } from './Footer.styled';

const Footer = () => {
  return (<>
    <FootWrapper>
      <FootLink href='https://www.linkedin.com/in/aaron-weissman/' target='_blank'>LinkedIn</FootLink>
      <FootLink href='https://github.com/aweissman11' target='_blank'>GitHub</FootLink>
      <FootLink type="application/pdf" href='https://drive.google.com/file/d/148U3AjH6eaSgkAWuWD3NYPaf_NjlwglB/view?usp=sharing' target='_blank'>Resume</FootLink>
    </FootWrapper>
    <SiteInfo>This site was built using React. See the repo here:&nbsp;
    <FootLink href='https://github.com/aweissman11/aweissman' target='_blank'>GitHub Repo</FootLink>
    </SiteInfo>
  </>);
}

export default Footer;