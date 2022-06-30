import styled from 'styled-components';
import { NumberGameTileStyled } from '../NumberGameTile/NumberGameTile.styled';
import device from '../../Styles/device';

export const IconGameTileStyled = styled(NumberGameTileStyled)`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 4.5rem;
  }

  @media screen and ${device.tablet} {
    img {
      width: 5.5rem;
    }
  }
`;
