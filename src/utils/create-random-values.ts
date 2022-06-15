import GameInformation from '../types/game-context-types';
import { gameIconValues } from '../types/general-types';

const numSet = [
  1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12,
  13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18,
];

const iconSet = [
  'anchor',
  'anchor',
  'baseball',
  'baseball',
  'basketball',
  'basketball',
  'car',
  'car',
  'cat',
  'cat',
  'chicken',
  'chicken',
  'controller',
  'controller',
  'dog-pee',
  'dog-pee',
  'flask',
  'flask',
  'football',
  'football',
  'futbol',
  'futbol',
  'hamster',
  'hamster',
  'hand-spock',
  'hand-spock',
  'lira-sign',
  'lira-sign',
  'moon',
  'moon',
  'robot',
  'robot',
  'snowflake',
  'snowflake',
  'sun',
  'sun',
];

type ExtractTypeVal<T, K extends keyof T> = T[K];
type RandomMatrixType<T> = T extends 'numbers'
  ? number[][]
  : gameIconValues[][];

type gameTypeArg = ExtractTypeVal<GameInformation, 'gameType'>;
type boardSizeArg = ExtractTypeVal<GameInformation, 'boardSize'>;

const createRandomValues = (gameType: gameTypeArg, boardSize: boardSizeArg) => {
  const gridLength = Number(boardSize.charAt(0));
  const targetSet = gameType === 'numbers' ? numSet : iconSet;
  const finalTargetSet =
    boardSize === '4x4' ? targetSet.slice(0, 16) : targetSet.slice(0);

  const randomMatrix: RandomMatrixType<typeof gameType> = [];

  for (let i = 0; i < gridLength; i++) {
    randomMatrix.push([]);
    for (let j = 0; j < gridLength; j++) {
      randomMatrix[i].push();
    }
  }

  if (
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'test'
  ) {
    for (let i = 0; i < gridLength; i++) {
      for (let j = 0; j < gridLength; j++) {
        randomMatrix[i][j] = finalTargetSet.shift() as number | gameIconValues;
      }
    }
    return randomMatrix;
  }

  for (let i = 0; i < gridLength; i++) {
    for (let j = 0; j < gridLength; j++) {
      const randomIndex = Math.floor(
        Math.random() * (finalTargetSet.length - 1)
      );
      const randomValue = finalTargetSet[randomIndex];
      randomMatrix[i][j] = randomValue as number | gameIconValues;
      finalTargetSet.splice(randomIndex, 1);
    }
  }
  return randomMatrix;
};

export default createRandomValues;
