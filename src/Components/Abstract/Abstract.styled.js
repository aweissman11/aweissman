import styled from 'styled-components';
import { Device } from '../../Utils/Device';
import { Colors } from '../../Utils/Colors';

export const AbWrapper = styled.div`
  width: 100%;

  @media ${Device.Laptop} {
  }

  @media ${Device.LaptopL} {
  }

  @media ${Device.Desktop} {
  }
`;
AbWrapper.displayName = 'AbWrapper';

export const AbText = styled.p`
  font-size: 35px;
  line-height: 55px;
  margin: 0 auto;
  color: ${Colors.Black};


  svg {
    margin: 50px auto 80px;
    cursor: pointer;
  }


  @media ${Device.Laptop} {
  }

  @media ${Device.LaptopL} {
  }

  @media ${Device.Desktop} {
  }
`;
AbText.displayName = 'AbText';

export const AbInfo = styled.p`
  font-size: 16px;
  color: ${Colors.Black};
  color: ${({ info }) => info ? Colors.Black : Colors.Gray};
  margin: ${({ info }) => info ? '0 auto 40px' : '0 auto'};
  font-weight: ${({ info }) => info ? 'bold' : 'normal'};

  svg {
    margin-top: 50px;
    cursor: pointer;
  }


  @media ${Device.Laptop} {
  }

  @media ${Device.LaptopL} {
  }

  @media ${Device.Desktop} {
  }
`;
AbInfo.displayName = 'AbInfo';

export const GraySpan = styled.span`
  color: ${Colors.Gray};
`;
GraySpan.displayName = 'GraySpan';