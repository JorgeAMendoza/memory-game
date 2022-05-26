import React, { ReactNode, useEffect, useState } from 'react';
import GameTile from './GameTile';
import createRandomNums from '../../utils/create-random-nums';

interface GameTilesProps {
  boardSize: '4x4' | '6x6';
  gameType: 'numbers' | 'icons';
  setClickedPiece: React.Dispatch<string | number>;
}

const GameTilesWrapper = ({
  boardSize,
  gameType,
  setClickedPiece,
}: GameTilesProps) => {
  const [tileValues, setTileValues] = useState<number[][]>([]);
  const [resetGame, setResetGame] = useState<boolean>(true);

  useEffect(() => {
    if (resetGame) {
      const randomValues = createRandomNums(boardSize);
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
    console.log('rendering number tiles');

    for (let i = 0; i < tileValues.length; i++) {
      for (let j = 0; j < tileValues[i].length; j++) {
        gameTiles.push(
          <GameTile
            key={`${i},${j}`}
            value={tileValues[i][j]}
            setClickedPiece={setClickedPiece}
          />
        );
      }
    }
    return gameTiles;
  };

  const renderIconTiles = (): Array<ReactNode> => {
    const gameTiles: Array<ReactNode> = [];
    console.log('rendering icon tiles');
    return gameTiles;
  };
  return <div>{tileValues.length !== 0 ? renderGameTiles() : null}</div>;
};

export default GameTilesWrapper;
