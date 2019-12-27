import styled from 'styled-components';
import { Device } from '../../Utils/Device';
import { Colors } from '../../Utils/Colors';
import { AnimateInP } from '../../Shared/Shared.styled';

export const AbInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${Device.Tablet} {
    flex-direction: row;
  }
`;
AbInfoWrapper.displayName = 'AbInfoWrapper';

export const InfoNugget = styled.div`
  display: flex;
  flex-direction: column;

  @media ${Device.Tablet} {
    flex-direction: row;
    width: max-content;
    margin-right: 40px;
  }
`;
InfoNugget.displayName = 'InfoNugget';

export const AbInfo = styled(AnimateInP)`
  font-size: 16px;
  color: ${Colors.Black};
  color: ${({ info }) => info ? Colors.Black : Colors.Gray};
  font-weight: ${({ info }) => info ? 'bold' : 'normal'};
  margin: ${({ info }) => info ? '0 0 30px' : '0'};
  white-space: nowrap;

  svg {
    margin-top: 50px;
    cursor: pointer;
  }


  @media ${Device.Tablet} {
    margin: ${({ info }) => info ? '0 auto 0px 10px' : '0 auto'};
  }
`;
AbInfo.displayName = 'AbInfo';