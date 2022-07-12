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
    test('game settings rendered on page', async () => {
      render(GAME_START_COMPONENT);
      await screen.findByTestId('gameStart');
    });
  });

  describe('component starts with default selected settings', () => {
    test('radio button starts with number setting', async () => {
      render(GAME_START_COMPONENT);
      const gameTypeInput: HTMLInputElement = await screen.findByTestId(
        'gameTypeNumber'
      );
      expect(gameTypeInput.value).toBe('on');
    });
    test('radio button starts with number of players at 1 ', async () => {
      render(GAME_START_COMPONENT);
      const gamePlayersInput: HTMLInputElement = await screen.findByLabelText(
        '1'
      );
      expect(gamePlayersInput.value).toBe('on');
    });
    test('radio button starts with grid size of 4x4', async () => {
      render(GAME_START_COMPONENT);
      const gameGridSize: HTMLInputElement = await screen.findByTestId(
        'gameGridSizeFour'
      );
      console.log(gameGridSize);
      expect(gameGridSize.value).toBe('on');
    });
  });

  describe('chaning intial game settings', () => {
    test('change game type to icon', async () => {
      render(GAME_START_COMPONENT);
      const gameTypeNumber: HTMLInputElement = await screen.findByTestId(
        'gameTypeNumber'
      );
      const gameTypeIcon: HTMLInputElement = await screen.findByTestId(
        'gameTypeIcon'
      );

      setTimeout(() => {
        expect(gameTypeNumber.value).toBe('on');
        expect(gameTypeIcon.value).toBe('off');
      }, 1000);

      userEvent.click(gameTypeIcon);

      setTimeout(() => {
        expect(gameTypeIcon.value).toBe('on');
        expect(gameTypeNumber.value).toBe('off');
      }, 1000);
    });
    test('change number of players to 3 players', async () => {
      render(GAME_START_COMPONENT);
      const gamePlayersOne: HTMLInputElement = await screen.findByLabelText(
        '1'
      );
      const gamePlayersThree: HTMLInputElement = await screen.findByLabelText(
        '2'
      );

      userEvent.click(gamePlayersThree);
      expect(gamePlayersThree.checked).toBe(true);
      expect(gamePlayersOne.checked).toBe(false);
    });
    test('change grid size to 6x6', async () => {
      render(GAME_START_COMPONENT);
      const gameGridSizeFour: HTMLInputElement = await screen.findByTestId(
        'gameGridSizeFour'
      );
      const gameGridSizeSix: HTMLInputElement = await screen.findByTestId(
        'gameGridSizeSix'
      );

      userEvent.click(gameGridSizeSix);
      setTimeout(() => {
        expect(gameGridSizeSix.value).toBe('on');
        expect(gameGridSizeFour.value).toBe('off');
      }, 1000);
    });
  });
});
