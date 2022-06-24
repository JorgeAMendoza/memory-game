import styled from 'styled-components';
import gameColors from '../../Styles/game-colors';

export const SinglePlayerScoreStyled = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  text-align: center;
  width: 90%;
  margin: 0 auto;
  max-width: 49rem;
  div {
    width: 100%;
    padding: 0.8em 0;
    border-radius: 10px;
    background-color: ${gameColors.scoreCard.background};

    p:nth-child(1) {
      font-weight: bold;
      color: ${gameColors.scoreCard.textColorLight};
    }
    p:nth-child(2) {
      margin-top: 0.5rem;
      font-size: 2.4rem;
      font-weight: bold;
      color: ${gameColors.scoreCard.textColorDark};
    }
  }
`;
