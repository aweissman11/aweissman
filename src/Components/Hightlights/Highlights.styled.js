import styled from 'styled-components';
import { Colors } from '../../Utils/Colors';
import { Device } from '../../Utils/Device';

export const HighWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 350px 350px 350px 350px;
  gap: 20px;
  margin-bottom: 40px;

  @media ${Device.Mobile} {
  grid-template-rows: 400px 400px 400px 400px;
  }

  @media ${Device.Tablet} {
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 350px 350px;
  }

  @media ${Device.Laptop} {
  grid-template-rows: 400px 400px;
  }

  @media ${Device.LaptopL} {
  grid-template-rows: 550px 550px;
  }

  @media ${Device.Desktop} {
  grid-template-rows: 700px 700px;
  }
`;
HighWrapper.displayName = 'HighWrapper';

export const Project = styled.div`
  width: 100%;
  height: 100%;
`;
Project.displayName = 'Project';

export const Highlight = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ project }) => project ?
    project === 'movieTracker' ? '#6cc4ee'
      : project === 'goinCampin' ? '#79c39f'
        : project === 'wedding' ? '#0c1c23'
          : project === 'pallete' && '#b1415a'
    : Colors.Gray
  };
  margin: 10px auto;
`;
Highlight.displayName = 'Highlight';
