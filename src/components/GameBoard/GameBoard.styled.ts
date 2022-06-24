import styled from 'styled-components';
import gameColors from '../../Styles/game-colors';

export const GameBoardStyled = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${gameColors.backgroundColor.gameBoard};
  padding: 3rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    width: 90%;
    max-width: 90rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      width: 8ch;
    }

    img {
      width: 10rem;
    }
  }
`;
