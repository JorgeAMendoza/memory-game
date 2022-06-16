import { FinalPlayerData } from '../types/general-types';
import { Player } from '../types/game-context-types';

const modalPlayerData = (playerData: Player[]): FinalPlayerData => {
  let maxScore = -Infinity;
  let winningPlayer = '';
  let isTied = false;

  for (const player of playerData) {
    if (player.score > maxScore) {
      maxScore = player.score;
      winningPlayer = player.name;
      isTied = false;
    } else if (player.score === maxScore) {
      winningPlayer = '';
      isTied = true;
    }
  }

  const winningMessage = isTied
    ? `it's a tie!`
    : `player ${winningPlayer} wins!`;

  const playerResults = playerData
    .map((player) => {
      return {
        name: player.name,
        score: player.score,
        isWinner: player.score === maxScore ? true : false,
      };
    })
    .sort((playerOne, playerTwo) => playerTwo.score - playerOne.score);

  const finalResult: FinalPlayerData = {
    modalMessage: winningMessage,
    players: playerResults,
  };

  return finalResult;
};

export default modalPlayerData;
