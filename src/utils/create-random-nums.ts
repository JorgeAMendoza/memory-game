const fourByFourNumSet = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

const sixBySixNumSet = [
  1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12,
  13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18,
];

const createRandomNums = (gridSize: '4x4' | '6x6') => {
  const gridRowLength = Number(gridSize.charAt(0));
  const gridColLength = Number(gridSize.charAt(2));
  const targetNumSet: number[] =
    gridSize === '4x4' ? [...fourByFourNumSet] : [...sixBySixNumSet];

  const randomMatrix: Array<Array<number>> = [];

  for (let i = 0; i < gridRowLength; i++) {
    randomMatrix.push([]);
    for (let j = 0; j < gridColLength; j++) {
      randomMatrix[i].push(0);
    }
  }

  if (process.env.NODE_ENV === 'development') {
    for (let i = 0; i < gridRowLength; i++) {
      for (let j = 0; j < gridColLength; j++) {
        randomMatrix[i][j] = targetNumSet.shift() as number;
      }
    }
    return randomMatrix;
  }

  for (let i = 0; i < gridRowLength; i++) {
    for (let j = 0; j < gridColLength; j++) {
      const randomIndex = Math.floor(Math.random() * (targetNumSet.length - 1));
      const randomNum = targetNumSet[randomIndex];
      randomMatrix[i][j] = randomNum;
      targetNumSet.splice(randomIndex, 1);
    }
  }
  return randomMatrix;
};

export default createRandomNums;
