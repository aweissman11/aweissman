import styled from 'styled-components';
import { Colors } from '../../Utils/Colors';

export const AboutWrapper = styled.div`

`;
AboutWrapper.displayName = 'AboutWrapper';

export const About = styled.div`
  font-size: 20px;
  color: ${Colors.Black};
  line-height: 30px;
`;
About.displayName = 'About';

export const Background = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;
Background.displayName = 'Background';

export const Experience = styled.div`
  margin: 40px 0;
  display: grid;
  grid-template-rows: 30px 150px 150px 150px;
`;
Experience.displayName = 'Experience';

export const SingleExp = styled.div`
`;
SingleExp.displayName = 'SingleExp';

export const Type = styled.h3`
  font-size: 25px;
  font-weight: bold;
  color: ${Colors.Gray};
  margin: 0 auto 20px;
`;
Type.displayName = 'Type';

export const What = styled.p`
  margin: ${({ top }) => top ? '30px auto 0' : '0 auto'};
`;
What.displayName = 'What';

export const Org = styled.h2`
  font-weight: lighter;
  font-size: 26px;
  margin: 10px auto 0;
`;
Org.displayName = 'Org';