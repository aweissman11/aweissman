import styled from 'styled-components';
import { Device } from '../../Utils/Device';
import { Colors } from '../../Utils/Colors';

export const NavWrapper = styled.header`
  height: 80px;
  position: fixed;
  transition: .5s;
  top: ${({ showHeader }) => showHeader ? '0' : '-120px'};
  left: 0;
  width: 100%;
  background: #fff;
  padding: 0 15px;
  box-sizing: border-box;
  z-index: 1;

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
NavWrapper.displayName = 'NavWrapper';

export const NavList = styled.div`
  display: flex;
  margin-top: 50px;
`;
NavList.displayName = 'NavList';

export const NavItem = styled.div`
  list-style: none;
  font-size: 16px;
  margin-left: ${({ keepRight }) => keepRight && 'auto'};
  margin-left: ${({ fullRight }) => fullRight && '25px'};
  color: ${({ home }) => home ? Colors.Black : Colors.Gray};
  cursor: pointer;

  @media ${Device.Laptop} {
    font-size: 19px;
  }
`;
NavItem.displayName = 'NavItem';