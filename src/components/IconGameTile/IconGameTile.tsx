import { TileValueHashMap } from '../../types/game-board-types';
import { gameIconValues } from '../../types/general-types';
import getIconSource from '../../utils/get-icon-source';
import { IconGameTileStyled } from './IconGameTile.styled';
interface IconGameTileProps {
  value: number | string;
  clickPiece: (value: string | number, i: string, j: string) => void;
  indexOne: string;
  indexTwo: string;
  currentSelectedIndex: string;
  matchedValuesHash: TileValueHashMap;
}

type ButtonState = 'win' | 'selected' | '';

const IconGameTile = ({
  value,
  clickPiece,
  indexOne,
  indexTwo,
  currentSelectedIndex,
  matchedValuesHash,
}: IconGameTileProps) => {
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
    <IconGameTileStyled
      buttonState={buttonStatus()}
      onClick={() => {
        clickPiece(value, indexOne, indexTwo);
      }}
      disabled={disableTile()}
    >
      <img src={getIconSource(value as gameIconValues)} alt={`${value} icon`} />
    </IconGameTileStyled>
  );
};

export default IconGameTile;
