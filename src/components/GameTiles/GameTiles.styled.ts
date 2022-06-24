import styled from 'styled-components';

export const GameTilesStyled = styled.section`
  display: flex;
  justify-content: center;
`;

export const GameTilesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  width: 90%;
  max-width: 50rem;
  height: min(90vw, 46rem);
  gap: 1.5rem;
`;
// games tiles wrapper will need to take props for if we are either on 4x4 or 6x6 grid. for now just get the grid right.
