import styled from 'styled-components';
import gameColors from '../../Styles/game-colors';
import device from '../../Styles/device';

export const GameBoardStyled = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${gameColors.backgroundColor.gameBoard};
  padding: 3rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and ${device.tablet} {
    padding: 4em 0;
  }

  header {
    width: 90%;
    max-width: 110rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      width: 8ch;
      padding: 0.75em 0;
    }

    img {
      width: 10rem;
    }
  }
`;
