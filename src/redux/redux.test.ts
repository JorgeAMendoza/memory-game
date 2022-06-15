import { AnyAction } from 'redux';
import GameInformation, { Player } from '../types/game-context-types';
import gameReducer, { setupGame, setupNewGame } from './game-reducer';

const playerOne: Player = {
  name: '1',
  score: 0,
  currentTurn: true,
};
const playerTwo: Player = {
  name: '2',
  score: 0,
  currentTurn: false,
};
const gameInformation: GameInformation = {
  gameType: 'numbers',
  boardSize: '4x4',
  numOfPlayers: 2,
  players: [playerOne, playerTwo],
};

describe('testing react redux implementation', () => {
  test('redux starts at an intial empty state', () => {
    expect(gameReducer(undefined, {} as AnyAction)).toStrictEqual({});
  });

  test('redux sets up inital game information', () => {
    const previousState = {} as GameInformation;

    expect(
      gameReducer(previousState, setupGame(gameInformation))
    ).toStrictEqual(gameInformation);
  });

  test('redux restarts the game', () => {
    const previousState = gameInformation;
    expect(gameReducer(previousState, setupNewGame())).toStrictEqual({});
  });
});
