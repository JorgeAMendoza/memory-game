import createRandomNums from '../../utils/create-random-nums';

describe('creation of random number matrix for game tiles', () => {
  test('4x4 grid option returns 4x4 grid', () => {
    const gridSize = '4x4';
    const randomMatrix = createRandomNums(gridSize);

    expect(randomMatrix.length).toBe(4);
    expect(randomMatrix[0].length).toBe(4);
  });

  test('6x6 grid option returns 6x6 grid', () => {
    const gridSize = '6x6';
    const randomMatrix = createRandomNums(gridSize);

    expect(randomMatrix.length).toBe(6);
    expect(randomMatrix[0].length).toBe(6);
  });
});
