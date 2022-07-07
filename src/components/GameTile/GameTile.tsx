import React from 'react';
import { TileValueHashMap } from '../../types/game-board-types';
import { GameTileStyled } from './GameTile.styled';

interface GameTileProps {
  value: number | string;
  clickPiece: (value: string | number, i: string, j: string) => void;
  indexOne: string;
  indexTwo: string;
  currentSelectedIndex: string;
  matchedValuesHash: TileValueHashMap;
  children: React.ReactNode;
}

type ButtonState = 'win' | 'selected' | '';

const GameTile = ({
  value,
  clickPiece,
  indexOne,
  indexTwo,
  currentSelectedIndex,
  matchedValuesHash,
  children,
}: GameTileProps) => {
  const disableTile = () => {
    if (value in matchedValuesHash) return true;
    else if (`${indexOne},${indexTwo}` === currentSelectedIndex) return true;
    else return false;
  };
  const buttonStatus = (): ButtonState => {
    if (value in matchedValuesHash) return 'win';
    else if (`${indexOne},${indexTwo}` === currentSelectedIndex)
      return 'selected';
    else return '';
  };
  return (
    <GameTileStyled
      buttonState={buttonStatus()}
      onClick={() => clickPiece(value, indexOne, indexTwo)}
      disabled={disableTile()}
    >
      {children}
    </GameTileStyled>
  );
};

export default GameTile;
