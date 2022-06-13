import { TileValueHashMap } from '../../types/game-board-types';

interface NumberGameTileProps {
  value: number | string;
  clickPiece: (value: string | number, i: string, j: string) => void;
  indexOne: string;
  indexTwo: string;
  currentSelectedIndex: string;
  matchedValuesHash: TileValueHashMap;
}

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
  return (
    <button
      onClick={() => {
        clickPiece(value, indexOne, indexTwo);
      }}
      disabled={disableTile()}
    >
      {value}
    </button>
  );
};

export default NumberGameTile;
