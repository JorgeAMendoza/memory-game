import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import userEvent from '@testing-library/user-event';
import GameStart from './GameStart';
import React from 'react';
import { render, screen } from '@testing-library/react';

const GAME_START_COMPONENT = (
  <React.StrictMode>
    <Provider store={store}>
      <GameStart />
    </Provider>
  </React.StrictMode>
);

describe('Game start component', () => {
  describe('component is rendered on page', () => {
    test.todo('game settings rendered on page', async () => {
      render(GAME_START_COMPONENT);
      await screen.findByTestId('gameStart');
    });
  });

  describe('component starts with default selected settings', () => {
    test.only('radio button starts with number setting', async () => {
      render(GAME_START_COMPONENT);
      const gameTypeInput: HTMLInputElement = await screen.findByTestId(
        'gameTypeNumber'
      );
      expect(gameTypeInput.value).toBe('number');
      expect(gameTypeInput.checked).toBe(true);
    });
    test.todo('radio button starts with number of players at 1 ', async () => {
      render(GAME_START_COMPONENT);
      const gamePlayersInput: HTMLInputElement = await screen.findByTestId(
        'gamePlayersOne'
      );
      expect(gamePlayersInput.value).toBe(1);
      expect(gamePlayersInput.checked).toBe(true);
    });
    test.todo('radio button starts with grid size of 4x4', async () => {
      render(GAME_START_COMPONENT);
      const gameGridSize: HTMLInputElement = await screen.findByTestId(
        'gameGridSizeFour'
      );
      expect(gameGridSize.value).toBe('4x4');
      expect(gameGridSize.checked).toBe(true);
    });
  });

  describe('chaning intial game settings', () => {
    test.todo('change game type to icon', async () => {
      render(GAME_START_COMPONENT);
      const gameTypeNumber: HTMLInputElement = await screen.findByTestId(
        'gameTypeNumber'
      );
      const gameTypeIcon: HTMLInputElement = await screen.findByTestId(
        'gameTypeIcon'
      );

      userEvent.click(gameTypeIcon);

      expect(gameTypeNumber.checked).toBe(false);
      expect(gameTypeIcon.checked).toBe(true);
    });
    test.todo('change number of players to 3 players', async () => {
      render(GAME_START_COMPONENT);
      const gamePlayersOne: HTMLInputElement = await screen.findByTestId(
        'gamePlayersOne'
      );
      const gamePlayersThree: HTMLInputElement = await screen.findByTestId(
        'gamePlayersTwo'
      );

      userEvent.click(gamePlayersThree);
      expect(gamePlayersThree.checked).toBe(true);
      expect(gamePlayersOne.checked).toBe(false);
    });
    test.todo('change grid size to 6x6', async () => {
      const gameGridSizeFour: HTMLInputElement = await screen.findByTestId(
        'gameGridSizeFour'
      );
      const gameGridSizeSix: HTMLInputElement = await screen.findByTestId(
        'gameGridSizeSix'
      );

      userEvent.click(gameGridSizeSix);
      expect(gameGridSizeSix.checked).toBe(true);
      expect(gameGridSizeFour.checked).toBe(false);
    });
  });
});
