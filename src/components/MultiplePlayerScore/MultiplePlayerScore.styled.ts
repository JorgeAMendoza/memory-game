import styled from 'styled-components';
import gameColors from '../../Styles/game-colors';
import device from '../../Styles/device';

export const MultiplePlayerScoreStyled = styled.section`
  display: flex;
  justify-content: center;
  gap: 3rem;
  text-align: center;
  width: 90%;
  margin: 0 auto;
  max-width: 110rem;

  div {
    width: 100%;
    padding: 0.8em 0;
    border-radius: 10px;
    position: relative;

    @media screen and ${device.tablet} {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0.8em 1.2em;
      width: 25%;
    }

    p:nth-child(1) {
      font-weight: bold;

      @media screen and ${device.tablet} {
        font-size: 1.8rem;
      }
    }
    p:nth-child(2) {
      margin-top: 0.5rem;
      font-size: 2.4rem;
      font-weight: bold;

      @media screen and ${device.tablet} {
        font-size: 3.2rem;
      }
    }
    p:nth-child(3) {
      position: absolute;
    }
  }
`;

interface PlayerScoreProps {
  currentTurn: boolean;
}

export const PlayerScore = styled.div<PlayerScoreProps>`
  position: relative;
  z-index: 1;
  background-color: ${({ currentTurn }) =>
    currentTurn
      ? `${gameColors.scoreCard.backgroundActive}`
      : `${gameColors.scoreCard.background}`};

  p:nth-child(1) {
    color: ${({ currentTurn }) =>
      currentTurn
        ? `${gameColors.scoreCard.textColorActive}`
        : `${gameColors.scoreCard.textColorLight}`};
  }
  p:nth-child(2) {
    color: ${({ currentTurn }) =>
      currentTurn
        ? `${gameColors.scoreCard.textColorActive}`
        : `${gameColors.scoreCard.textColorDark}`};
  }
  p:nth-child(3) {
    left: 50%;
    bottom: -3em;
    transform: translateX(-50%);
    font-weight: bold;
    text-transform: uppercase;
    width: 100%;
    color: ${gameColors.scoreCard.textColorCurrent};
    font-size: 1.3rem;
    letter-spacing: 5px;
  }

  &:before {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    border-bottom: 50px solid
      ${({ currentTurn }) =>
        currentTurn
          ? `${gameColors.scoreCard.backgroundActive} `
          : 'transparent'};
    top: -25%;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
`;
