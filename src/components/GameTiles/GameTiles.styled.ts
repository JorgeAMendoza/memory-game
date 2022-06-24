import styled from 'styled-components';

interface GameTilesStyledProps {
  gridSize: '4' | '6';
}

export const GameTilesStyled = styled.section`
  display: flex;
  justify-content: center;
`;

export const GameTilesWrapper = styled.div<GameTilesStyledProps>`
  display: grid;
  grid-template-columns: repeat(${({ gridSize }) => gridSize}, 1fr);
  grid-template-rows: repeat(${({ gridSize }) => gridSize}, 1fr);
  width: 90%;
  max-width: 49rem;
  height: min(90vw, 46rem);
  gap: 1.5rem;
`;
