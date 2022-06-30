import styled from 'styled-components';
import gameColors from '../../Styles/game-colors';
import device from '../../Styles/device';

export const SinglePlayerModalStyled = styled.div`
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

export const SingleModalContainer = styled.div`
  background-color: ${gameColors.gameOverModal.background};
  border-radius: 10px;
  text-align: center;
  width: 90%;
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.5em;

  @media screen and ${device.tablet} {
    padding: 2.25em;
    gap: 4rem;
  }
`;

export const SingleModalHeader = styled.div`
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

export const SingleModalStats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  div {
    background-color: ${gameColors.gameOverModal.playerLoseBackground};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8em 1em;
    border-radius: 5px;
    font-weight: bold;

    p:nth-child(1) {
      font-size: 1.3rem;
      color: ${gameColors.gameOverModal.playerLoseNameTextColor};
    }

    p:nth-child(2) {
      font-size: 1.8rem;
      color: ${gameColors.gameOverModal.timeElapsedColor};
    }
  }
`;

export const SingleGameOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  @media screen and ${device.tablet} {
    flex-direction: row;
  }

  button {
    width: 100%;
  }
`;
