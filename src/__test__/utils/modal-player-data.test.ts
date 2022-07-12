import { Player } from '../../types/game-context-types';
import modalPlayerData from '../../utils/modal-player-data';

const playerTestDataOne: Player[] = [
  { name: '1', score: 5, currentTurn: false },
  { name: '2', score: 10, currentTurn: false },
];

const playerTestDataTwo: Player[] = [
  { name: '1', score: 7, currentTurn: false },
  { name: '2', score: 6, currentTurn: false },
  { name: '3', score: 10, currentTurn: false },
];

const playerTestDataThree: Player[] = [
  { name: '1', score: 5, currentTurn: false },
  { name: '2', score: 6, currentTurn: false },
  { name: '3', score: 6, currentTurn: false },
];

describe('modal player data function that returns data to be used by multiplayer game over component', () => {
  test('player 2 wins the game', () => {
    const result = modalPlayerData(playerTestDataOne);
    expect(result.modalMessage).toBe('Player 2 wins!');
    expect(result.players[0].isWinner).toBe(true);
    expect(result.players[0].score).toBe(10);
  });

  test('player 3 wins the game', () => {
    const result = modalPlayerData(playerTestDataTwo);
    expect(result.modalMessage).toBe('Player 3 wins!');
    expect(result.players[0].isWinner).toBe(true);
    expect(result.players[0].score).toBe(10);
  });

  test('player 2 and 3 tie', () => {
    const result = modalPlayerData(playerTestDataThree);
    expect(result.modalMessage).toBe(`It's a tie!`);
    expect(result.players[0].isWinner).toBe(true);
    expect(result.players[1].isWinner).toBe(true);
    expect(result.players[0].name).toBe('2');
    expect(result.players[1].name).toBe('3');
    expect(result.players[0].score).toBe(6);
    expect(result.players[1].score).toBe(6);
  });
});
