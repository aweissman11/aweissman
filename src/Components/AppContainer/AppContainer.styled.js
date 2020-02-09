import styled from 'styled-components';
import { Device } from '../../Utils/Device';
import { Colors } from '../../Utils/Colors';

export const AppWrapper = styled.div`
  padding: 0 15px;
  font-family: 'Raleway', sans-serif;
  background-color: ${({ theme }) => Colors(theme).BackgroundColor};
  color: ${({ theme }) => Colors(theme).PrimaryFont};
  transition: .8s;

  a:visited {
    color: ${({ theme }) => theme === 'dark' && '#b08bf1'};
  }

  @media ${Device.Tablet} {
    padding: 0 60px;
  }

  @media ${Device.Laptop} {
    padding: 0 80px;
  }

  @media ${Device.LaptopL} {
    padding: 0 120px;
  }

  @media ${Device.Desktop} {
    padding: 0 160px;
  }
`;
AppWrapper.displayName = 'AppWrapper';

export const MainApp = styled.div`
  padding-top: 140px;

  @media ${Device.Tablet} {
    padding-top: 240px;
  }
`;
MainApp.displayName = 'MainApp';

export const Break = styled.div`
  background-color: ${({ theme }) => Colors(theme).PrimaryFont};
  height: 2px;
  margin: 40px auto;
  opacity: 0.1;
`;
Break.displayName = 'Break';