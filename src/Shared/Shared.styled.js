import styled from 'styled-components';
import { Colors } from '../Utils/Colors';
import { Device } from '../Utils/Device';

export const SimpleDiv = styled.div`
`;
SimpleDiv.displayName = 'SimpleDiv';

export const AbWrapper = styled.div`
  width: 100%;
`;
AbWrapper.displayName = 'AbWrapper';

export const AnimateInP = styled.p`
position: relative;
transition: .8s;
top: ${({ isVisible }) => !isVisible ? '50px' : '0'};
opacity: ${({ isVisible }) => !isVisible ? '0' : '1'};
`;
AnimateInP.displayName = 'AnimateInP';

export const AnimateInDiv = styled.div`
position: relative;
transition: .8s;
top: ${({ isVisible }) => !isVisible ? '50px' : '0'};
opacity: ${({ isVisible }) => !isVisible ? '0' : '1'};
`;
AnimateInDiv.displayName = 'AnimateInDiv';

export const Title = styled.h3`
  font-size: 25px;
  font-weight: bold;
  color: ${({ whiteText }) => whiteText ? Colors.White : Colors.Gray};
  margin: 0 auto 20px;
`;
Title.displayName = 'Title';

export const BigText = styled(AnimateInP)`
font-size: 35px;
line-height: 55px;
margin: 0 auto;
color: ${Colors.Black};

svg {
  margin: 50px auto 80px;
  cursor: pointer;
}

@media ${Device.Tablet} {
  font-size: 55px;
  line-height: 90px;
}
`;
BigText.displayName = 'BigText';

export const LinkText = styled.a`
  color: ${({ whiteText }) => whiteText ? Colors.White : Colors.Gray};
  font-weight: bold;
  text-decoration: none;
  margin: ${({ topLink }) => topLink && '25px auto 15px'};

  &:visited {
    color: ${({ whiteText }) => whiteText ? Colors.White : Colors.Black};
    font-weight: lighter;
  }
`;
LinkText.displayName = 'LinkText';