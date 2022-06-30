import styled from 'styled-components';
import gameColors from '../../Styles/game-colors';
import device from '../../Styles/device';

interface GameBoardStyledProps {
  mobileMenu: boolean;
  showGameOverModal: boolean;
}

export const GameBoardStyled = styled.main<GameBoardStyledProps>`
  width: 100%;
  height: 100vh;
  background-color: ${gameColors.backgroundColor.gameBoard};
  padding: 3rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:after {
    display: ${({ mobileMenu, showGameOverModal }) =>
      mobileMenu || showGameOverModal ? 'block' : 'none'};
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 2;
    opacity: 0.5;
  }

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

    @media screen and ${device.tablet} {
      button {
        min-width: 11ch;
        font-size: 2rem;

        &:first-child {
          margin-right: 1.5rem;
          min-width: 9ch;
        }
      }

      img {
        width: 15rem;
      }
    }
  }
`;
