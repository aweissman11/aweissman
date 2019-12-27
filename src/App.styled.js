import styled from 'styled-components';
import { Device } from './Utils/Device';
import { Colors } from './Utils/Colors';

export const AppWrapper = styled.div`
  margin: 0 15px;
  font-family: 'Raleway', sans-serif;

  @media ${Device.Tablet} {
    margin: 0 60px;
  }

  @media ${Device.Laptop} {
    margin: 0 80px;
  }

  @media ${Device.LaptopL} {
    margin: 0 120px;
  }

  @media ${Device.Desktop} {
    margin: 0 160px;
  }
`;
AppWrapper.displayName = 'AppWrapper';

export const MainApp = styled.div`
  margin-top: 120px;

  @media ${Device.Tablet} {
  }

  @media ${Device.Laptop} {
  }

  @media ${Device.LaptopL} {
  }

  @media ${Device.Desktop} {
  }
`;
MainApp.displayName = 'MainApp';

export const Break = styled.div`
  background-color: ${Colors.Black};
  height: 2px;
  margin: 40px auto;
  opacity: 0.1;

  @media ${Device.Laptop} {
  }

  @media ${Device.LaptopL} {
  }

  @media ${Device.Desktop} {
  }
`;
Break.displayName = 'Break';