import styled from 'styled-components';
import gameColors from '../../Styles/game-colors';

const Button = styled.button`
  text-decoration: none;
  padding: 0.4em 1em;
  cursor: pointer;
  font-family: inherit;
  font-weight: bold;
  text-transform: capitalize;
  border: none;
  position: relative;
  border-radius: 2em;
`;

export const OrangeButton = styled(Button)`
  background-color: ${gameColors.orangeButton.background};
  color: ${gameColors.orangeButton.textColor};
  width: 100%;

  &:hover {
    background-color: ${gameColors.orangeButton.backgroundHover};
  }
`;
