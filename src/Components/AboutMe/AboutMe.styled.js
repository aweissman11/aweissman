import styled from 'styled-components';
import { Colors } from '../../Utils/Colors';
import { AnimateInDiv } from '../../Shared/Shared.styled';

export const About = styled(AnimateInDiv)`
  font-size: 20px;
  color: ${Colors.Black};
  line-height: 30px;
`;
About.displayName = 'About';

export const Background = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 100px;
`;
Background.displayName = 'Background';

export const Experience = styled.div`
  margin: 40px 0;
  display: grid;
  grid-template-rows: 30px 150px 150px 150px;
`;
Experience.displayName = 'Experience';

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