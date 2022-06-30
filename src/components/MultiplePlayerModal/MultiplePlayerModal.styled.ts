import styled from 'styled-components';
import gameColors from '../../Styles/game-colors';
import device from '../../Styles/device';

interface PlayerScoreItemProps {
  winner: boolean;
}

export const MultiplePlayerModalStyled = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MultipleModalContainer = styled.div`
  width: 90%;
  max-width: 60rem;
  background-color: ${gameColors.gameOverModal.background};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  text-align: center;
  padding: 1.5em;

  @media screen and ${device.tablet} {
    padding: 2.25em;
    gap: 4rem;
  }
`;

export const MultipleModalHeader = styled.div`
  h2 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.4rem;
    font-weight: bold;
    color: ${gameColors.gameOverModal.subtextColor};
  }

  @media screen and ${device.tablet} {
    h2 {
      font-size: 4.8rem;
    }
    p {
      font-size: 1.8rem;
    }
  }
`;

export const PlayerScoreList = styled.ul`
  width: 100%;
`;

export const PlayerScoreItem = styled.li<PlayerScoreItemProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8em 1em;
  font-weight: bold;
  border-radius: 5px;
  background-color: ${({ winner }) =>
    winner
      ? `${gameColors.gameOverModal.playerWinBackground}`
      : `${gameColors.gameOverModal.playerLoseBackground}`};

  &:not(:last-of-type) {
    margin-bottom: 0.8rem;
  }

  p:first-child {
    font-size: 1.3rem;
    color: ${({ winner }) =>
      winner
        ? `${gameColors.gameOverModal.playerWinTextColor}`
        : `${gameColors.gameOverModal.playerLoseNameTextColor}`};
  }

  p:nth-child(2) {
    font-size: 2rem;
    color: ${({ winner }) =>
      winner
        ? `${gameColors.gameOverModal.playerWinTextColor}`
        : `${gameColors.gameOverModal.playerLoseScoreTextColor}`};
  }

  @media screen and ${device.tablet} {
    p:first-child {
      font-size: 1.8rem;
    }
    p:nth-child(2) {
      font-size: 3.2rem;
    }
  }
`;

export const GameOverButtons = styled.div`
  width: 100%;

  @media screen and ${device.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  button {
    width: 100%;
    font-size: 1.8rem;

    &:first-child {
      margin-bottom: 1.5rem;
      @media screen and ${device.tablet} {
        margin-bottom: 0;
      }
    }

    @media screen and ${device.tablet} {
      font-size: 2rem;
    }
  }
`;
