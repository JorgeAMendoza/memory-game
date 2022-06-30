import styled from 'styled-components';
import gameColors from '../../Styles/game-colors';
import device from '../../Styles/device';

export const GameStartStyled = styled.div`
  background-color: ${gameColors.backgroundColor.gameStart};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuContainer = styled.main`
  width: 90% !important;
  max-width:64rem;
  margin: 0 auto
  position: relative;
  border: 1px solid white;
  width: 100%;
  background-color: #fff;
  padding: 1.5em;
  border-radius: 15px;
  position:relative;

  @media screen and ${device.tablet} {
    padding: 2.5em;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  header {
    display: flex;
    justify-content: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -20%;
  }

  h3 {
    margin-bottom: 1.25rem;
    color: ${gameColors.gameStart.selectionText};
    font-size: 1.5rem;

    @media screen and ${device.tablet} {
      font-size: 2rem;
    }
  }

  button {
    font-size: 1.8rem;
    @media screen and ${device.tablet} {
      font-size: 3.2rem;
    }
  }
`;

export const GameSelectionCategory = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media screen and ${device.tablet} {
    gap: 3rem;
  }
`;

export const MenuSelection = styled.label`
  position: relative;
  cursor: pointer;
  width: 100%;
  min-width: 5ch;

  span {
    background-color: ${gameColors.blueButton.backgroundDisabled};
    color: ${gameColors.blueButton.textColor};
    border-radius: 2em;
    padding: 0.35em 0;
    display: inline-block;
    width: 100%;
    font-weight: bold;
    text-align: center;

    @media screen and ${device.tablet} {
      font-size: 2.6rem;
    }

    &:hover {
      background-color: ${gameColors.blueButton.backgroundHover};
    }
  }

  input {
    position: absolute;
    cursor: pointer;
    opacity: 0;
    height: 0;
    width: 0;
    z-index: 1;

    &:checked ~ span {
      background-color: ${gameColors.blueButton.background};
    }
  }
`;
