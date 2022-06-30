import styled from 'styled-components';
import gameColors from '../../Styles/game-colors';

export const MobileMenuStyled = styled.div`
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

  div {
    background-color: ${gameColors.mobileMenu.background};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 87%;
    padding: 2em;
    gap: 2rem;

    button {
      width: 100%;
      font-size: 1.8rem;
    }
  }
`;
