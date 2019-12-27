import styled from 'styled-components';
import { Colors } from '../../Utils/Colors';
import { Device } from '../../Utils/Device';
import { AnimateInDiv } from '../../Shared/Shared.styled';

export const HighWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 275px 275px 275px 275px;
  gap: 20px;
  margin-bottom: 40px;

  @media ${Device.Mobile} {
    grid-template-rows: 450px 450px 450px 450px;
  }

  @media ${Device.Tablet} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 275px 275px;
  }

  @media ${Device.Laptop} {
    grid-template-rows: 450px 450px;
  }

  @media ${Device.LaptopL} {
    grid-template-rows: 550px 550px;
  }

  @media ${Device.Desktop} {
    grid-template-rows: 900px 900px;
  }
`;
HighWrapper.displayName = 'HighWrapper';

export const Project = styled(AnimateInDiv)`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  .hover-box h3 {
    position: relative;
    bottom: 500px;
    transition: .3s;
  }

  .hover-box a {
    position: relative;
    top: 500px;
    transition: .3s;
  }

  &:hover {
    .hover-box {
      visibility: visible;
      opacity: 1;
    }
    .hover-box a {
      top: 0;
    }
    .hover-box h3 {
      bottom: 0;
    }
    .highlight {
      transform: scale(1.2);
    }
  }

`;
Project.displayName = 'Project';

export const Highlight = styled.div`
  height: 100%;
  width: 100%;
  transition: .4s;
  background: ${({ project }) => project ?
    project === 'movieTracker' ? 'url(https://i.imgur.com/w5Cas8u.png)'
      : project === 'wedding' ? 'url(https://i.imgur.com/vPe61FS.png)'
        : project === 'goinCampin' ? 'url(https://i.imgur.com/A5xgvZL.png)'
          : project === 'pallete' && 'url(https://i.imgur.com/N0LNNgG.png)'
    : Colors.Gray
  };
  margin: 0;
  background-size: 100% 100%;
`;
Highlight.displayName = 'Highlight';

export const HoverBox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  visibility: hidden;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: opacity .2s, visibility .2s;
  background: #2929299e;
`;
HoverBox.displayName = 'HoverBox';

export const GraySpan = styled.span`
  color: ${Colors.Gray};
`;
GraySpan.displayName = 'GraySpan';