interface Player {
  name: '1' | '2' | '3' | '4';
  score: number;
}

interface GameInformation {
  gameType: 'numbers' | 'icons';
  boardSize: '4x4' | '6x6';
  numOfPlayers: 1 | 2 | 3 | 4;
  players: Player[];
}

export default GameInformation;
