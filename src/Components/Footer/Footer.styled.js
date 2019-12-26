import styled from 'styled-components';
import { Colors } from '../../Utils/Colors';

export const FootWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;
FootWrapper.displayName = 'FootWrapper';

export const FootLink = styled.a`
  color: ${Colors.Gray};
  font-weight: bold;
  text-decoration: none;

  &:visited {
    color: ${Colors.Black};
    font-weight: lighter;
  }
`;
FootLink.displayName = 'FootLink';

export const SiteInfo = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;
SiteInfo.displayName = 'SiteInfo';