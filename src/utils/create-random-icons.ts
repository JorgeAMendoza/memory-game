import { gameIconValues } from '../types/general-types';

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

const createRandomIcons = (gridSize: '4x4' | '6x6'): gameIconValues[][] => {
  const gridLength = Number(gridSize.charAt(0));
  const targetIconSet: string[] =
    gridSize === '4x4' ? iconSet.slice(0, 16) : iconSet.slice(0);

  const randomMatrix: Array<Array<gameIconValues>> = [];

  for (let i = 0; i < gridLength; i++) {
    randomMatrix.push([]);
    for (let j = 0; j < gridLength; j++) {
      randomMatrix[i].push('' as gameIconValues);
    }
  }

  if (process.env.NODE_ENV === 'development') {
    for (let i = 0; i < gridLength; i++) {
      for (let j = 0; j < gridLength; j++) {
        randomMatrix[i][j] = targetIconSet.shift() as gameIconValues;
      }
    }
    return randomMatrix;
  }

  for (let i = 0; i < gridLength; i++) {
    for (let j = 0; j < gridLength; j++) {
      const randomIndex = Math.floor(
        Math.random() * (targetIconSet.length - 1)
      );
      const randomIcon = targetIconSet[randomIndex];
      randomMatrix[i][j] = randomIcon as gameIconValues;
      targetIconSet.splice(randomIndex, 1);
    }
  }
  return randomMatrix;
};

export default createRandomIcons;
