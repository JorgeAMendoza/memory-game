import createRandomValues from '../../utils/create-random-values';

describe('creation of random icon or number value for game tiles, in development mode', () => {
  const fourByFourGrid = '4x4';
  const sixBySixGrid = '6x6';
  const numberGameType = 'numbers';
  const iconGameType = 'icons';

  test('4x4 number game returns a 4x4 number matrix', () => {
    const randomGrid = createRandomValues(numberGameType, fourByFourGrid);
    expect(randomGrid[0][0]).toBe(1);
    expect(randomGrid[3][3]).toBe(8);
  });
  test('6x6 number game returns a 6x6 number matrix', () => {
    const randomGrid = createRandomValues(numberGameType, sixBySixGrid);
    expect(randomGrid[0][0]).toBe(1);
    expect(randomGrid[5][5]).toBe(18);
  });

  test('4x4 icon game returns a 4x4 icon matrix', () => {
    const randomGrid = createRandomValues(iconGameType, fourByFourGrid);
    expect(randomGrid[0][0]).toBe('anchor');
    expect(randomGrid[3][3]).toBe('dog-pee');
  });
  test('6x6 icon game returnsa 6x6 icon matrix', () => {
    const randomGrid = createRandomValues(iconGameType, sixBySixGrid);
    expect(randomGrid[0][0]).toBe('anchor');
    expect(randomGrid[5][5]).toBe('sun');
  });
});
