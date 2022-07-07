import { ReactNode, useEffect, useState } from 'react';
import { TileValueHashMap } from '../../types/game-board-types';
import { GameIconValues } from '../../types/general-types';
import createRandomValues from '../../utils/create-random-values';
import { GameTilesStyled, GameTilesWrapper } from './GameTiles.styled';
import iconSourceMap from '../../utils/icon-source-map';
import GameTile from '../GameTile/GameTile';

interface GameTilesProps {
  boardSize: '4x4' | '6x6';
  gameType: 'numbers' | 'icons';
  clickPiece: (value: string | number, i: string, j: string) => void;
  matchedValues: TileValueHashMap;
  currentIndex: string;
}

const GameTiles = ({
  boardSize,
  gameType,
  clickPiece,
  currentIndex,
  matchedValues,
}: GameTilesProps) => {
  const [tileValues, setTileValues] = useState<number[][] | GameIconValues[][]>(
    []
  );
  const [resetGame, setResetGame] = useState<boolean>(true);

  useEffect(() => {
    if (resetGame) {
      const randomValues =
        gameType === 'numbers'
          ? createRandomValues('numbers', boardSize)
          : createRandomValues('icons', boardSize);
      setTileValues(randomValues);
      setResetGame(false);
    } else return;
  }, [resetGame]);

  const renderGameTiles = (): Array<ReactNode> => {
    if (gameType === 'numbers') return renderNumberTiles();
    else return renderIconTiles();
  };

  const renderNumberTiles = (): Array<ReactNode> => {
    const gameTiles: Array<ReactNode> = [];

    for (let i = 0; i < tileValues.length; i++) {
      for (let j = 0; j < tileValues[i].length; j++) {
        gameTiles.push(
          <GameTile
            key={`${i},${j}`}
            value={tileValues[i][j]}
            clickPiece={clickPiece}
            indexOne={`${i}`}
            indexTwo={`${j}`}
            currentSelectedIndex={currentIndex}
            matchedValuesHash={matchedValues}
          >
            <p>{tileValues[i][j]}</p>
          </GameTile>
        );
      }
    }
    return gameTiles;
  };

  const renderIconTiles = (): Array<ReactNode> => {
    const gameTiles: Array<ReactNode> = [];
    for (let i = 0; i < tileValues.length; i++) {
      for (let j = 0; j < tileValues[i].length; j++) {
        gameTiles.push(
          <GameTile
            key={`${i},${j}`}
            value={tileValues[i][j]}
            clickPiece={clickPiece}
            indexOne={`${i}`}
            indexTwo={`${j}`}
            currentSelectedIndex={currentIndex}
            matchedValuesHash={matchedValues}
          >
            <img
              src={iconSourceMap[tileValues[i][j] as GameIconValues]}
              alt={`${tileValues[i][j]} icon`}
            />
          </GameTile>
        );
      }
    }
    return gameTiles;
  };
  return (
    <GameTilesStyled>
      <GameTilesWrapper
        data-testid="gameTilesContainer"
        gridSize={boardSize === '4x4' ? '4' : '6'}
      >
        {tileValues.length !== 0 ? renderGameTiles() : null}
      </GameTilesWrapper>
    </GameTilesStyled>
  );
};

export default GameTiles;
