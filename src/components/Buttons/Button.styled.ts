import styled from 'styled-components';
import gameColors from '../../Styles/game-colors';

const Button = styled.button`
  text-decoration: none;
  padding: 0.8em;
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

  &:hover {
    background-color: ${gameColors.orangeButton.backgroundHover};
  }
`;

export const GreyButton = styled(Button)`
  background-color: ${gameColors.greyButton.background};
  color: ${gameColors.greyButton.textColor};

  &:hover {
    background-color: ${gameColors.greyButton.backgroundHover};
    color: ${gameColors.greyButton.textColorHover};
  }
`;
