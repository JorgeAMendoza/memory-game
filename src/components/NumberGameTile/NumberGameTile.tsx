import { TileValueHashMap } from '../../types/game-board-types';
import { NumberGameTileStyled } from './NumberGameTile.styled';

interface NumberGameTileProps {
  value: number | string;
  clickPiece: (value: string | number, i: string, j: string) => void;
  indexOne: string;
  indexTwo: string;
  currentSelectedIndex: string;
  matchedValuesHash: TileValueHashMap;
}

type ButtonState = 'win' | 'selected' | '';

const NumberGameTile = ({
  value,
  clickPiece,
  indexOne,
  indexTwo,
  currentSelectedIndex,
  matchedValuesHash,
}: NumberGameTileProps) => {
  const disableTile = () => {
    if (value in matchedValuesHash) return true;
    else if (`${indexOne},${indexTwo}` === currentSelectedIndex) return true;
    else return false;
  };
  const buttonStaus = (): ButtonState => {
    if (value in matchedValuesHash) return 'win';
    else if (`${indexOne},${indexTwo}` === currentSelectedIndex)
      return 'selected';
    else return '';
  };
  return (
    <NumberGameTileStyled
      buttonState={buttonStaus()}
      onClick={() => {
        clickPiece(value, indexOne, indexTwo);
      }}
      disabled={disableTile()}
    >
      {value}
    </NumberGameTileStyled>
  );
};

export default NumberGameTile;
