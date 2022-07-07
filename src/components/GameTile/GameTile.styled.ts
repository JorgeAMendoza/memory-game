import styled from 'styled-components';
import gameColors from '../../Styles/game-colors';

interface TileProps {
  buttonState: 'win' | 'selected' | '';
}

export const GameTileStyled = styled.button<TileProps>`
  border: none;
  font-family: inherit;
  font-weight: bold;
  border-radius: 50%;
  background-color: ${({ buttonState }) =>
    buttonState === 'win'
      ? `${gameColors.gameTile.backgroundActive}`
      : `${gameColors.gameTile.background}`};
  color: ${gameColors.gameTile.color};
  font-size: 2.4rem;
  position: relative;
  cursor: pointer;
  transition: background-color 0.25s ease-in;

  /* for icon tiles */
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
  }

  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: ${({ buttonState }) =>
      buttonState === 'selected' || buttonState === 'win'
        ? 'transparent'
        : `${gameColors.gameTile.cover}`};
    top: 0;
    left: 0;
    border-radius: 50%;
    transition: background-color 0.1s ease-in;
  }

  &:hover::after {
    background-color: ${({ buttonState }) =>
      buttonState === 'selected' || buttonState === 'win'
        ? 'transparent'
        : `${gameColors.gameTile.coverHover}`};
  }
`;
